import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';

import {Review} from '../../models/Review';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public teacher_name:string;

  public reviews:Review[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    let that = this;

    this.getTeacherName().then (function (teacher_name) {
      that.teacher_name = <string>teacher_name;
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
      queryParams: {'teacherName': this.teacher_name}
    }

    this.router.navigate(['/review'], navigationExtras);

  }

}
