import { Component, OnInit } from '@angular/core';

import { AuthService } from '../providers/auth.service';
import { Router} from '@angular/router';
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

  getSessionCourse(session:Session) {
    console.log(session);
  }

  getSessionTeacher(session:Session) {
    console.log(session);
  }

  ngOnInit() {
  }

  update_teacher_courses (teachers:Teacher[], courses:Course[]){
    this.teachers = teachers;
    this.courses = courses;
  }

}
