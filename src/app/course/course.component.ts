import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';

import {ReviewDatabase} from '../../database/ReviewDatabase';
import {Review} from '../../models/Review';

import {Course} from '../../models/Course';
import {Session} from '../../models/Session';
import {Teacher} from '../../models/Teacher';

/** Import the api **/
import {EvalApi} from '../../api/EvalApi';
import {Department} from '../../models/Department';
import { AuthService } from '../providers/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {EvalUser} from '../../models/EvalUser';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [EvalApi, AuthService, AngularFireAuth]
})
export class CourseComponent implements OnInit {

  public course:Course;

  public sessions:Session[] = [];
  public teachers:Teacher[] = [];
  public reviews:Review[] = [];

  public user:EvalUser;
  public usertype:number = 0;

  public departments:Department[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: EvalApi,
    private auth: AuthService
  ) {
    let that = this;

    this.auth.getUser().then (function (user:EvalUser) {
      if (user == null) {
        that.user = null;
        that.usertype = 0;
      }else {

        that.user = user;
        console.log('User: '+that.user.user_name)
        if (that.user.type === null)
          that.usertype = 0;
        else
          that.usertype = that.user.type;
      }


      console.log('User:'+that.user);

    })
    this.usertype = that.usertype;


  }

  getDepartment(department_id:number) {

    var department = this.departments.find(function (department:Department) {
      return department.id == department_id;
    })

    return department.name;
  }

  ngOnInit() {

    let that = this;

    this.getCourse().then (function (course:Course) {
      that.course = course;

      return that.api.getReviewsByCourseId(that.course.id);
    }).then (function (reviews:Review[]) {
      that.reviews = reviews
      console.log(that.reviews);

      return that.api.getSessionsByCourse(that.course.id);

    }).then (function (sessions:Session[]) {
      console.log(sessions);

      return that.api.getTeachersFromSessions(sessions);
    }).then (function (teachers: Teacher[]) {
      console.log(teachers);
      that.teachers = teachers;
    });

    this.api.getDepartments().then (function (departments:Department[]) {
      that.departments = departments
    });

  }

  backToSearch()
  {
    //this.router.navigate(['/search'])
    history.back();
  }

  getCourseId() {
    var that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        let course_id = params["course_id"] || null;
        resolve(course_id);
      })
    });

    return query_promise;
  }

  getCourse() {
    let that = this;

    let course_promise = new Promise(function (resolve, reject) {
      let course_id:number = 0;

      that.getCourseId().then (function (id:number) {
        course_id = id;

        return that.api.getCourseById(course_id);
      }).then (function (course:Course) {

        resolve(course);

      }).catch (function (err) {
        reject(err)
      })
    })

    return course_promise;
  }


}
