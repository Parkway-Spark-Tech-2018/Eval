import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public TeacherName:string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    var that = this;
    this.getTeacherName().then (function (teacher_name) {
      that.TeacherName = teacher_name;
    })


  }

  getTeacherName() {

    let that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        var teacherName = params['teacherName'] || null;
        resolve(teacherName)
      })
    });

    return query_promise
  }

}
