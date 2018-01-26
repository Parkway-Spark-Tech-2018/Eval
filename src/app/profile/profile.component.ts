import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';

import {ReviewDatabase} from '../../database/ReviewDatabase';
import {Review} from '../../models/Review';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public teacher_name:string;

  public reviews:Review[] = [];

  public amnt_bad:number = 0;
  public amnt_good:number = 0;

  public good_percentage = 0;
  public bad_percentage = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {

    let that = this;

    this.getTeacherName().then (function (teacher_name) {
      that.teacher_name = <string>teacher_name;

      return ReviewDatabase.getReviews();
    }).then (function (reviews) {
      that.reviews = that.filterTeacherReviews(<Review[]> reviews);
      that.updateScore(that.reviews);

      that.good_percentage = that.viewPercentage(that.amnt_good, (that.amnt_good + that.amnt_bad));
      that.bad_percentage = that.viewPercentage(that.amnt_bad, (that.amnt_good + that.amnt_bad));

    })

  }
  backToSearch()
  {
    this.router.navigate(['/search'])
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

  filterTeacherReviews(reviews: Review[]) {

    let that = this;

    return reviews.filter(function (review:Review) {
        return (review.type == "Teacher" && review.name == that.teacher_name)
    })

  }

  getTeacherName() {

    var that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        let teacher_name = params["teacher_name"] || null;
        resolve(teacher_name);
      })
    });

    return query_promise;

  }

  leave_review() {

    let navigationExtras: NavigationExtras = {
      queryParams: {'name': this.teacher_name,
                    'type': 'Teacher'
                    }
    }

    this.router.navigate(['/review'], navigationExtras);

  }

}
