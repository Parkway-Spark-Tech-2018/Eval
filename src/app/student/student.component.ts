import { Component, OnInit } from '@angular/core';

import { AuthService } from '../providers/auth.service';
import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

//Models
import {EvalUser} from '../../models/EvalUser';
import {Student} from '../../models/Student';
import {StudentSchedule} from '../../models/StudentSchedule';
import {Course} from '../../models/Course';
import {Teacher} from '../../models/Teacher';
import {Session} from '../../models/Session';

//Eval Api
import {EvalApi} from '../../api/EvalApi';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [AuthService, AngularFireAuth, EvalApi]
})

export class StudentComponent implements OnInit {

  public name:string = '';
  public user:EvalUser;
  public student:Student;
  public schedule:StudentSchedule;
  public sessions: Session[] = [];
  public teachers: Teacher[] = [];
  public courses: Course[] = [];

  constructor(private auth: AuthService, private router: Router, private eval_api: EvalApi) {

    const that = this;
    this.auth.getUser().then (function (user: EvalUser) {
      if (user == null) {
        that.user = null;
      } else {
        that.user = user;

        that.eval_api.getStudentByEmail(that.user.email).then (function (student:Student) {
          that.student = student;
          that.name = that.student.full_name;
          return Student.getSchedule(student, that.eval_api);
        }).then (function (schedule:StudentSchedule) {
          that.schedule = schedule;
          return StudentSchedule.getSessions(schedule, that.eval_api);
        }).then (function (sessions:Session[]) {
          that.sessions = sessions;

          var c = 0;

          var temp_teachers: Teacher[];
          var temp_courses: Course[];


          that.eval_api.getTeachersFromSessions(that.sessions).then (function (teachers:Teacher[]) {
            temp_teachers = teachers;
            c++;

            if (c>= 2) {
              that.update_teacher_courses(temp_teachers, temp_courses);
            }
          })

          that.eval_api.getCoursesFromSessions(that.sessions).then (function (courses:Course[]) {
            temp_courses = courses;
            c++;

            if (c>=2) {
              that.update_teacher_courses(temp_teachers,temp_courses)
            }
          })
        });

      }

    });


  }

  //Helper function
  update_teacher_courses (teachers:Teacher[], courses:Course[]){
    this.teachers = teachers;
    this.courses = courses;
  }


  //Get the session course info
  getSessionCourse(session:Session) {

    var course_id:number = session.course_id;

    var course:Course = this.courses.find(function (course:Course) {
      return course.id == course_id;
    })

    return course;

  }

  //Get the session teacher info
  getSessionTeacher(session:Session) {
    var teacher_id:number = session.staff_id;

    var teacher:Teacher = this.teachers.find(function (teacher:Teacher) {
      return teacher.id == teacher_id;
    })

    return teacher;
  }

  reviewSession(session:Session) {
    let navigationExtras: NavigationExtras = {
      queryParams: {'session_id': session.id,
                    'schedule_id': this.schedule.id,
                    'student_id': this.student.id
                    }
    }

    this.router.navigate(['/review'], navigationExtras);
  }

  ngOnInit() {
  }

}
