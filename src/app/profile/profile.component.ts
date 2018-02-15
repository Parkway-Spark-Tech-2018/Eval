import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';

import {ReviewDatabase} from '../../database/ReviewDatabase';
import {Review} from '../../models/Review';

import {Teacher} from '../../models/Teacher';
import {Course} from '../../models/Course';
import {Session} from '../../models/Session';

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
  public reviews:Review[] = [];
  public courses:Course[] = [];
  public sessions:Session[] = [];

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
        return that.api.getReviews();
    }).then (function (reviews:Review[]) {
      that.reviews = that.filterTeacherReviews(<Review[]> reviews);
      console.log(that.reviews);
      return that.api.getSessionsByTeacher(that.teacher.id);
    }).then (function (sessions:Session[]) {
      return that.api.getCoursesFromSessions(sessions);
    }).then (function (courses:Course[]) {
      console.log("Courses");
      console.log(courses);
      that.courses = courses;
    })

  }


  backToSearch()
  {
    this.router.navigate(['/search'])
  }


  filterTeacherReviews(reviews: Review[]) {

    let that = this;

    return reviews.filter(function (review:Review) {
        if (review.subject == undefined || review.type == undefined) {
          return false;
        }

        return (review.type == "Teacher" && review.subject.id == that.teacher.id)
    })

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
      queryParams: {'id': this.teacher.id,
                    'type': 'Teacher'
                    }
    }

    this.router.navigate(['/review'], navigationExtras);

  }

}
