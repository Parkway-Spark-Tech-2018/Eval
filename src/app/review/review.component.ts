import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';

import {Review} from '../../models/Review';

//Review Database

import {ReviewDatabase} from '../../database/ReviewDatabase';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public name:string;
  public type:string;


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    var that = this;

    this.getName().then (function (name) {
      that.name = <string>name;
    })

    this.getType().then (function (type) {
      that.type = <string>type;
    })

  }

  review(review_rating:boolean, review_explanation) {

    let review:Review;

    if (this.type == "Teacher") {
      review = Review.createTeacherReview(this.name, review_rating, review_explanation);
    }else if (this.type == "Course") {
      review = Review.createCourseReview(this.name, review_rating, review_explanation);
    }

    let that = this;

    ReviewDatabase.addReview(review).then (function (reviews) {
      console.log(reviews);

      if (that.type == "Teacher") {
        that.goTeacherBack();
      }else if (that.type == "Course") {
        that.goCourseBack();
      }

    })

  }

  goTeacherBack() {

    let navigationExtras: NavigationExtras = {
      queryParams: {'teacher_name': this.name}
    }

    this.router.navigate(['/profile'], navigationExtras)


  }

  goCourseBack() {

    let navigationExtras: NavigationExtras = {
      queryParams: {'course_name': this.name}
    }

    this.router.navigate(['/course'], navigationExtras)


  }

  getName() {

    let that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        var teacherName = <string>params['name'] || null;
        resolve(teacherName)
      })
    });

    return query_promise
  }

  getType() {
    let that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        var teacherName = <string>params['type'] || null;
        resolve(teacherName)
      })
    });

    return query_promise
  }

}
