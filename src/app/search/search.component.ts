import { Component, OnInit } from '@angular/core';

import { ActivatedRoute }     from '@angular/router';
import { Observable }         from 'rxjs/Observable';



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

  constructor(private route: ActivatedRoute) { }

  search(search_string) {

  }

  ngOnInit() {

    let query_promise = this.route
      .queryParams
      .subscribe(params => {
        this.search_query = params['search_query'] || "None";
      })
  }

}
