import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';

import {Review} from '../../models/Review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public TeacherName:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    var that = this;
    this.getTeacherName().then (function (teacher_name) {
      that.TeacherName = teacher_name;
    })

  }

  review(review_rating:number) {

    let teacher_review:Review = Review.createTeacherReview(this.TeacherName, review_rating);

    console.log(teacher_review);

    this.goTeacherBack();

  }

  goTeacherBack() {

    let navigationExtras: NavigationExtras = {
      queryParams: {'teacher_name': this.TeacherName}
    }

    this.router.navigate(['/profile'], navigationExtras)


  }

  getTeacherName() {

    let that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        var teacherName = <string>params['teacherName'] || null;
        resolve(teacherName)
      })
    });

    return query_promise
  }

}
