import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {EvalApi} from '../../api/EvalApi';
import {Teacher} from '../../models/Teacher';
import {Department} from '../../models/Department';
import {Review} from '../../models/Review';
import {Session} from '../../models/Session';

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

  public reviews:Review[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eval_api: EvalApi) { }

  ngOnInit() {


    this.teacher_id = Number(this.route.snapshot.paramMap.get('id'));

    this.retrieveInfo(this.teacher_id)

    this.eval_api.getSessions().then (function (sessions:Sessions) {
      console.log(sessions);
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


      return that.eval_api.getDepartmentById(that.user_teacher.department_id);

    }).then (function (department: Department) {
      that.department = department;
      return that.eval_api.getReviewsByTeacherId(that.teacher_id);
    }).then (function (reviews: Review[]) {
      that.reviews = reviews;
    }).catch (function (err) {
      console.log (err);
    })

  }

}
