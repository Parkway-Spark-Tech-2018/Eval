import { Component, OnInit } from '@angular/core';

import {Teacher} from '../../models/Teacher';
import {Course} from '../../models/Course';

import {Review} from '../../models/Review';

import {EvalApi} from '../../api/EvalApi';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';

import {ReviewDatabase} from '../../database/ReviewDatabase';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  providers: [EvalApi]
})
export class ReviewComponent implements OnInit {

  new_review:Review = null;

  constructor(
    private eval_api: EvalApi,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    let that = this;

    var session_id:number;
    var schedule_id:number;
    var student_id:number;

    that.getStudentId().then (function (id:number) {
      student_id = id;
      return that.getScheduleId()
    }).then (function (id:number) {
      schedule_id = id;
      return that.getStudentId()
    }).then (function (id:number) {
      student_id = id;
      that.new_review = Review.createEmptySessionReview(session_id, schedule_id, student_id);
    })


  }

  formSubmit() {

    if (String(this.new_review.thumbs) == "null") {
      alert ("Please select a option for the first question!")
    }else {
      console.log(JSON.stringify(this.new_review))

      let that = this;

      /** FIXME
      this.eval_api.createReview(this.new_review).then (function (reviews:Review[]) {
        alert("review created");
        that.goBack();

      }).catch (function (err) {
        alert("unable to create review");
      })**/

    }

  }

  goBack() {
    //I ADDED THIS CODE
    history.back();


  }

  getStudentId() {
    let that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        var session_id = <number>params['student_id'] || null;
        resolve(session_id);
      })
    });

    return query_promise;
  }

  getScheduleId() {
    let that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        var schedule_id = <number>params['schedule_id'] || null;
        resolve(schedule_id);
      })
    });

    return query_promise;
  }

  getSessionId() {
    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        var session_id = <number>params['session_id'] || null;
        resolve(session_id);
      })
    });

    return query_promise;
  }

}
