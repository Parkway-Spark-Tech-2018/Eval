import { Component, OnInit } from '@angular/core';

import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';

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

  public results:string[] = [];

  constructor(private route: ActivatedRoute) {

  }

  search(search_string) {

    let search_results:string[] = [];

    for (var course_idx in this.courses) {

      var course:string = this.courses[course_idx]

      if (fuzzysearch(search_string.toLowerCase(), course.toLowerCase()) == true) {
        search_results.push(course);
        console.log(course);
      }

      console.log(course);
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
