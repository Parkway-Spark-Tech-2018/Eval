import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';

import {ReviewDatabase} from '../../database/ReviewDatabase';
import {Review} from '../../models/Review';

import {Course} from '../../models/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public course:Course;

  public course_name:string = "";

  public reviews:Review[] = [];

  public amnt_bad:number = 0;
  public amnt_good:number = 0;

  public good_percentage = 0;
  public bad_percentage = 0;

  constructor(private route: ActivatedRoute,
  private router: Router) {

  }

  ngOnInit() {

    let that = this;

    this.getCourseName().then (function (course_name) {
      that.course_name = <string>course_name;

      return ReviewDatabase.getReviews();
    }).then (function (reviews) {
      that.reviews = that.filterCourseReviews(<Review[]> reviews);
      that.updateScore(that.reviews);

      that.good_percentage = that.viewPercentage(that.amnt_good, (that.amnt_good + that.amnt_bad));
      that.bad_percentage = that.viewPercentage(that.amnt_bad, (that.amnt_good + that.amnt_bad));

    })

  }

  backToSearch()
  {
    this.router.navigate(['/search'])
  }

  leave_review() {

    let navigationExtras: NavigationExtras = {
      queryParams: {'name': this.course_name,
                    'type': 'Course'
                    }
    }

    this.router.navigate(['/review'], navigationExtras);

  }

  GoodPercentageString() {
    return this.good_percentage + "%";
  }

  BadPercentageString() {

    if (this.good_percentage == 0 && this.bad_percentage == 0) {
      return "0%";
    }else if (this.good_percentage == 0) {
      return this.bad_percentage + "%";
    }

    return (100 - this.good_percentage) + "%";
  }


  viewPercentage(amnt:number, total:number) {
    let percentage:number = Math.floor(100 * (amnt/total));
    return percentage;
  }

  updateScore(reviews: Review[]) {

    let that = this;

    reviews.forEach(function (review:Review) {

      if (review.review_amnt > 0) {
        that.amnt_good += 1;
      }else if (review.review_amnt < 0) {
        that.amnt_bad += 1;
      }

    })

  }

  getCourseName() {
    var that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        let teacher_name = params["course_name"] || null;
        resolve(teacher_name);
      })
    });

    return query_promise;
  }

  getCourse() {
    
  }

  filterCourseReviews(reviews: Review[]) {

    let that = this;

    return reviews.filter(function (review:Review) {
        return (review.type == "Course" && review.name == that.course_name)
    })

  }

}
