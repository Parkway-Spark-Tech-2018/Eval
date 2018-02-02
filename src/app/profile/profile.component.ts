import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';

import {ReviewDatabase} from '../../database/ReviewDatabase';
import {Review} from '../../models/Review';

import {Teacher} from '../../models/Teacher';

/** Import the api **/
import {EvalApi} from '../../api/EvalApi';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [EvalApi]
})
export class ProfileComponent implements OnInit {

  public teacher:Teacher;

  public teacher_name:string;

  public reviews:Review[] = [];

  public amnt_bad:number = 0;
  public amnt_good:number = 0;

  public good_percentage = 0;
  public bad_percentage = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: EvalApi
  ) {

  }

  ngOnInit() {

    let that = this;


    this.getTeacher().then (function (teacher:Teacher) {
        that.teacher = teacher;
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
        return (review.type == "Teacher" && review.name == that.teacher.name)
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

  getTeacher() {

    let that = this;

    let teacher_promise = new Promise(function (resolve, reject) {
      let teacher_name:string = "";

      that.getTeacherName().then (function (name:string) {
        teacher_name = name;
        return that.api.getTeachers();
      }).then (function (teachers:Teacher[]) {

        let teacher:Teacher = teachers.find(function (teacher:Teacher) {
          return teacher.name == teacher_name;
        })

        resolve(teacher);

      }).catch(function (err) {
        reject(err);
      })
    })

    return teacher_promise;

  }

  leave_review() {

    let navigationExtras: NavigationExtras = {
      queryParams: {'name': this.teacher.name,
                    'type': 'Teacher'
                    }
    }

    this.router.navigate(['/review'], navigationExtras);

  }

}
