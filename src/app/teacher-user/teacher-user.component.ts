import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {EvalApi} from '../../api/EvalApi';
import {Teacher} from '../../models/Teacher';
import {Department} from '../../models/Department';
import {Review} from '../../models/Review';
import {Session} from '../../models/Session';
import {Course} from '../../models/Course';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-teacher-user',
  templateUrl: './teacher-user.component.html',
  styleUrls: ['./teacher-user.component.css'],
  providers: [EvalApi]
})
export class TeacherUserComponent implements OnInit {

  public teacher_id:number;
  public user_teacher:Teacher;
  public department:Department;
  public display_prefix:boolean = false;
  public sessions:Session[] = [];
  public courses:Course[] = [];

  public reviews:Review[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eval_api: EvalApi) { }

  ngOnInit() {


    this.teacher_id = Number(this.route.snapshot.paramMap.get('id'));

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
        console.log (that.reviews);
      })

    }).catch(function (err) {
      console.log(err);
    })

  }

}
