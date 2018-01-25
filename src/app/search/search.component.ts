import { Component, OnInit } from '@angular/core';

import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';

/** Import models **/
import {Result} from '../../models/Result';

import * as fuzzysearch from 'fuzzysearch';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public search_query:string;

  public courses:string[] = [
    "Calculus",
    "Memes",
    "Business",
    "Apples",
    "App Development"
  ]

  public teachers:string[] = [
    "Mr. Palmer",
    "Dr. Strange",
    "Dr. Stanfill",
    "Meme. Machine"
  ]

  public results:Result[] = [];

  constructor(private route: ActivatedRoute) {

  }

  search(search_string) {

    let search_results:Result[] = [];

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

  ngOnInit() {

    let query_promise = this.route
      .queryParams
      .subscribe(params => {
        this.search_query = params['search_query'] || "None";
        this.results = this.search(this.search_query);
      })
  }

}
