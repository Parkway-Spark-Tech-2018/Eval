import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

/** Auth **/
import {AuthService} from '../providers/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

/** API **/
import {EvalApi} from '../../api/EvalApi';

/** Models **/
import {Teacher} from '../../models/Teacher';
import {Department} from '../../models/Department';
import {Review} from '../../models/Review';
import {Session} from '../../models/Session';
import {Course} from '../../models/Course';
import {EvalUser} from '../../models/EvalUser';

@Component({
  selector: 'app-admin-stats',
  templateUrl: './admin-stats.component.html',
  styleUrls: ['./admin-stats.component.css'],
  providers: [EvalApi, AuthService,AngularFireAuth]
})
export class AdminStatsComponent implements OnInit {


  /** Chart stuff **/
  public pieChartLabels:string[] = ['Dislikes', 'Likes' ];
  public pieChartData:number[] = [0, 0];
  public pieChartType:string = 'pie';
  public chartOptions = {
    responsive: true
  }

  /** Stat Params **/
  public subject_type:string = null;
  public subject: Course | Teacher = null;
  public reviews: Review[] = [];

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private api: EvalApi,
      private auth: AuthService
    ) {

  }

  ngOnInit() {

    var sid:number = null;

    let that = this;

    this.checkAdmin();

    that.getSubjectId().then (function (id:number) { // Get the Course/Teacher id
      sid = id;
      return that.getSubjectType();
    }).then (function (type:string) { // Get the type (i.e Course or Teacher)
      that.subject_type = type;
      return that.getSubject(that.subject_type, sid); // Get the Course/Teacher Object
    }).then (function (subject: Course | Teacher) {
      that.subject = subject
      return that.getReviews(that.subject_type, that.subject);
    }).then (function (reviews: Review[]) {
      that.reviews = reviews;
      console.log(that.reviews);

      that.renderChart(that.reviews);

    })


  }

  checkAdmin() {

    this.auth.getUser().then (function (user: EvalUser) {
      if (user.type != 3) {
        alert("This user is not an admin!");
      }
    })

  }

  renderChart(reviews: Review[]) {
    var likes:number = 0;
    var dislikes:number = 0;

    reviews.forEach(function (review:Review) {
      switch (review.thumbs.toString()) {
        case "true":
          likes += 1;
          break;
        case "false":
          dislikes += 1;
          break;
        default:
          break;
      }
    })

    this.pieChartData = [dislikes, likes]

  }

  getReviews(type:string, subject: Course | Teacher) {

    let that = this;

    var reviews_promise = new Promise (function (resolve, reject ) {
      that.api.getReviews().then (function (reviews: Review[]) {
        switch (type){
          case "course":
            resolve (that.filterCourseReviews(reviews, <Course>subject));
            break;
          case "teacher":
            resolve (that.filterTeacherReviews(reviews, <Teacher>subject));
            break;
          default:
            resolve (null)
        }
      }).catch (function (err) {
        reject(err)
      })
    })

    return reviews_promise;

  }

  filterCourseReviews(reviews: Review[], course: Course) { //Get Course Reviews

    let that = this;

    return reviews.filter(function (review:Review) {
      if (review.subject == undefined || review.type == undefined) {
        return false;
      }

      return (review.type == "Course" && review.subject.id == course.id)
    })

  }

  filterTeacherReviews(reviews: Review[], teacher: Teacher) { //Get Teacher Reviews

    let that = this;

    return reviews.filter(function (review:Review) {
        if (review.subject == undefined || review.type == undefined) {
          return false;
        }

        return (review.type == "Teacher" && review.subject.id == teacher.id)
    })

  }

  getSubjectId() { // Get the course/teacher id
    var that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        let subject_id = params["subject_id"] || null;
        resolve(subject_id);
      })
    });

    return query_promise;

  }

  getSubjectType() { // Get the type (i.e Course or Teacher)
    var that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        let subject_id = params["subject_type"] || null;
        resolve(subject_id);
      })
    });

    return query_promise;
  }

  //Get the subject (i.e Course or Teacher)
  getSubject(type:string, id:number) {

    let that = this;

    var subject_promise = new Promise(function (resolve, reject) {

      var s_promise = null;

      switch (type) {
        case "course":
          s_promise = that.api.getCourseById(id);
          break;
        case "teacher":
          s_promise = that.api.getTeacherById(id);
          break;
        default:
          resolve(null)
      }

      s_promise.then (function (subject: Course | Teacher) {
        resolve (subject)
      }).catch (function (err) {
        reject(err)
      })

    })

    return subject_promise;

  }
