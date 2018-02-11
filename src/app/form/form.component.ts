import { Component, OnInit } from '@angular/core';

import {Teacher} from '../../models/Teacher';
import {Course} from '../../models/Course';

import {Review} from '../../models/Review';

import {EvalApi} from '../../api/EvalApi';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [EvalApi]
})
export class FormComponent implements OnInit {

  subject_id: number = 4;
  subject: Course | Teacher;

  review_type:string = "Course";
  new_review:Review = new Review();

  thumbs:boolean = null;

  constructor(
    private eval_api: EvalApi
  ) { }

  getSubject(type:string, subject_id:number) {

    let that = this;

    var subject_promise = new Promise(function (resolve, reject) {
      if (type == "Course") {

        that.eval_api.getCourseById(subject_id).then (function (course:Course) {

          resolve(course);

        }).catch (function (err) {
          reject(err);
        })

      }else if (type == "Teacher") {

        that.eval_api.getTeacherById(subject_id).then (function (teacher:Teacher) {

          resolve(teacher);

        }).catch (function (err) {
          reject(err);
        })
      }
    });

    return subject_promise;

  }

  ngOnInit() {

    let that = this;

    this.getSubject(this.review_type, this.subject_id).then (function (subject: Course | Teacher) {
      that.subject = subject;
    }).then (function (){
      switch (that.review_type) {
        case "Course":
          that.new_review = Review.createCourseReview(<Course>that.subject, null, "")
          break;
        case "Teacher":
          that.new_review = Review.createTeacherReview(<Teacher>that.subject, null, "")
          break;
      }


    })

  }

  formSubmit() {

    if (String(this.new_review.thumbs) == "null") {
      alert ("Please select a option for the first question!")
    }else {
      alert(JSON.stringify(this.new_review))
    }

  }

}
