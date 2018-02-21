import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';

import {ReviewDatabase} from '../../database/ReviewDatabase';
import {Review} from '../../models/Review';

import {Teacher} from '../../models/Teacher';
import {Course} from '../../models/Course';
import {Session} from '../../models/Session';

/** Import the api **/
import {EvalApi} from '../../api/EvalApi';
import {Department} from '../../models/Department';

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

  public departments:Department[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: EvalApi
  ) {

  }

  getDepartment(department_id:number) {

    var department = this.departments.find(function (department:Department) {
      return department.id == department_id;
    })

    return department.name;
  }

  ngOnInit() {

    let that = this;



    this.getTeacher().then (function (teacher:Teacher) {
        that.teacher = teacher;
        return that.api.getReviewsByTeacherId(that.teacher.id);
    }).then (function (reviews:Review[]) {
      that.reviews = reviews;
      console.log(that.reviews);
      return that.api.getSessionsByTeacher(that.teacher.id);
    }).then (function (sessions:Session[]) {
      return that.api.getCoursesFromSessions(sessions);
    }).then (function (courses:Course[]) {
      console.log("Courses");
      console.log(courses);
      that.courses = courses;
    })

    this.api.getDepartments().then (function (departments:Department[]) {
      that.departments = departments
    });



  }


  backToSearch()
  {
    //this.router.navigate(['/search'])
    history.back();
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

}
