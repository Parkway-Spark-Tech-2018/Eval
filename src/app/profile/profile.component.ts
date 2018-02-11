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
  public id:number;

  public reviews:Review[] = [];

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
    })

  }


  backToSearch()
  {
    this.router.navigate(['/search'])
  }


  filterTeacherReviews(reviews: Review[]) {

    let that = this;

    //FIXME
    return [];

    /**
    return reviews.filter(function (review:Review) {
        return (review.type == "Teacher" && review.name == that.teacher.name)
    })
    **/

  }

  getTeacherId() {

    var that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        let teacher_id = params["teacher_id"] || null;
        resolve(teacher_id);
      })
    });

    return query_promise;

  }

  getTeacher() {

    let that = this;

    let teacher_promise = new Promise(function (resolve, reject) {
      let teacher_id:number = 1;

      that.getTeacherId().then (function (id:number) {
        teacher_id = id;
        that.id = id;
        return that.api.getTeacherById(teacher_id);
      }).then (function (teacher:Teacher) {

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
