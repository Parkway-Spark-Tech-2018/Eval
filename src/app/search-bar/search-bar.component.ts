import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public search_string:string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

  }

  search() {

    let navigationExtras: NavigationExtras = {
      queryParams: {'search_query': this.search_string}
    }

    this.router.navigate(['/search'], navigationExtras)
  }

}
