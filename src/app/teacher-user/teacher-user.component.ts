import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {EvalApi} from '../../api/EvalApi';
import {Teacher} from '../../models/Teacher';
import {Department} from '../../models/Department';
import {Review} from '../../models/Review';
import {Session} from '../../models/Session';
import {Course} from '../../models/Course';
import {Student} from '../../models/Student';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-teacher-user',
  templateUrl: './teacher-user.component.html',
  styleUrls: ['./teacher-user.component.css'],
  providers: [EvalApi]
})
export class TeacherUserComponent implements OnInit {

  /** Chart stuff **/
  public pieChartLabels:string[] = ['Dislikes', 'Likes' ];
  public pieChartData:number[] = [0, 0];
  public pieChartType:string = 'pie';
  public chartOptions = {
    responsive: true
  }

  public teacher_id:number;
  public user_teacher:Teacher;
  public department:Department;
  public display_prefix:boolean = false;
  public sessions:Session[] = [];
  public courses:Course[] = [];
  public students:Student[] = [];
  public reviews:Review[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eval_api: EvalApi) { }

  ngOnInit() {


    this.teacher_id = Number(this.route.snapshot.paramMap.get('id'));

    this.eval_api.getStudents().then (function (students:Student[]) {
      that.students = students;
    }).catch (function (err) {
      console.log(err);
    })


    this.retrieveInfo(this.teacher_id)

    let that = this;

    this.eval_api.getSessions().then (function (sessions:Session[]) {
      console.log("all sessions");
      console.log(sessions);
    })

    this.eval_api.getSessionsByTeacher(this.teacher_id).then (function (sessions:Session[]) {
      that.sessions = sessions;

      return that.eval_api.getCoursesFromSessions(that.sessions);
    }).then (function (courses:Course[]) {
      console.log("Courses");
      that.courses = courses;
    })

  }

  getStudent(student_id) {

    return this.students.find(function (student:Student) {
      return student.id == student_id;
    })

  }

  renderChart(reviews: Review[]) {
    var likes:number = 0;
    var dislikes:number = 0;

    reviews.forEach(function (review:Review) {
      switch (review.thumbs.toString()) {
        case "true":
          likes += 1;
          break;
        case "false":
          dislikes += 1;
          break;
        default:
          break;
      }
    })

    this.pieChartData = [dislikes, likes]

  }

  retrieveInfo(teacher_id:number) {

    let that = this;


    this.eval_api.getTeacherById(teacher_id).then (function (teacher:Teacher) {
      that.user_teacher = teacher;

      if (that.user_teacher.prefix != null && that.user_teacher.prefix != "null") {
        that.display_prefix = true;
      }else {
        that.display_prefix = false;
      }

      that.eval_api.getDepartmentById(that.user_teacher.department_id).then (function (department: Department) {
        that.department = department;
      }).catch (function (err) {
        console.log (err);
      })

      that.eval_api.getReviewsByTeacherId(that.user_teacher.id).then (function (reviews: Review[]) {
        that.reviews = reviews;
        that.renderChart(that.reviews);
        console.log (that.reviews);
      })

    }).catch(function (err) {
      console.log(err);
    })

  }

  getCourseBySession(session_id:number) {
    let that = this;

    return this.courses.find (function (course:Course) {
      var session:Session = that.sessions.find(function (session:Session) {
        return session.id == session_id;
      })

      return course.id == session.course_id;
    })
  }

}
