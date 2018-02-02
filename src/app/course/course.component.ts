import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';

import {ReviewDatabase} from '../../database/ReviewDatabase';
import {Review} from '../../models/Review';

import {Course} from '../../models/Course';

/** Import the api **/
import {EvalApi} from '../../api/EvalApi';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [EvalApi]
})
export class CourseComponent implements OnInit {

  public course:Course;

  public reviews:Review[] = [];

  constructor(private route: ActivatedRoute,
  private router: Router,
  private api: EvalApi) {

  }

  ngOnInit() {

    let that = this;

    this.getCourse().then (function (course:Course) {
      that.course = course;

      return ReviewDatabase.getReviews();
    }).then (function (reviews) {
      that.reviews = that.filterCourseReviews(<Review[]> reviews);

    })

  }

  backToSearch()
  {
    this.router.navigate(['/search'])
  }

  leave_review() {

    let navigationExtras: NavigationExtras = {
      queryParams: {'name': this.course.name,
                    'type': 'Course'
                    }
    }

    this.router.navigate(['/review'], navigationExtras);

  }

  getCourseName() {
    var that = this;

    let query_promise = new Promise (function (resolve, reject) {
      that.route
      .queryParams
      .subscribe(params => {
        let course_name = params["course_name"] || null;
        resolve(course_name);
      })
    });

    return query_promise;
  }

  getCourse() {
    let that = this;

    let course_promise = new Promise(function (resolve, reject) {
      let course_name:string = "";

      that.getCourseName().then (function (name:string) {
        course_name = name;
        return that.api.getCourses();
      }).then (function (courses:Course[]) {

        let course:Course = courses.find(function (course:Course) {
          return course.name == course_name;
        })

        resolve(course);

      }).catch (function (err) {
        reject(err)
      })
    })

    return course_promise;
  }

  filterCourseReviews(reviews: Review[]) {

    let that = this;

    return reviews.filter(function (review:Review) {
        return (review.type == "Course" && review.name == that.course.name)
    })

  }

}
