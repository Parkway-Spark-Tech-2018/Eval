import { Component, OnInit } from '@angular/core';

import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';

/** Import Data api **/
import {EvalApi} from '../../api/EvalApi';

/** Import models **/
import {Result} from '../../models/Result';

import * as fuzzysearch from 'fuzzysearch';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [EvalApi],
})
export class SearchComponent implements OnInit {

  public search_query:string;

  public courses:string[] = []

  public teachers:string[] = []

  public results:Result[] = [];

  constructor(private route: ActivatedRoute, private eval_api: EvalApi) {


  }


  search(search_string) { //Search algorithm

    let search_results:Result[] = [];

    if (search_string == "") {

      for (var course_idx in this.courses) {
        var course:string = this.courses[course_idx];
        var course_result:Result = Result.createCourseResult(course);
        search_results.push(course_result);
      }

      for (var teacher_idx in this.teachers) {
        var teacher:string = this.teachers[teacher_idx];
        var teacher_result:Result = Result.createTeacherResult(teacher);
        search_results.push(teacher_result);
      }

    }
    for (var course_idx in this.courses) {

      var course:string = this.courses[course_idx]

      if (fuzzysearch(search_string.toLowerCase(), course.toLowerCase()) == true) {

        var course_result:Result = Result.createCourseResult(course);
        search_results.push(course_result);
      }

    }

    for (var teacher_idx in this.teachers) {
        var teacher:string = this.teachers[teacher_idx]

        if (fuzzysearch(search_string.toLowerCase(), teacher.toLowerCase()) == true) {
          var teacher_result:Result = Result.createTeacherResult(teacher);
          search_results.push(teacher_result);
        }
    }

    console.log(search_results);
    return search_results;

  }

  viewCourse(course:string) {
    
  }

  viewTeacher(teacher:string) {

  }

  performSearch() { //Perform the search query
    let query_promise = this.route
      .queryParams
      .subscribe(params => {
        this.search_query = params['search_query'] || "";
        this.results = this.search(this.search_query);
      })
  }

  ngOnInit() {

    let that = this;

    //Get the teacher and courses
    this.eval_api.getTeachers().then (function (data) {
      that.teachers = <string[]> data;
      return that.eval_api.getCourses()
    }).then (function (data) {
      that.courses = <string[]> data;
    }).then (function () {
      that.performSearch(); //Perform the search;
    })


  }

}
