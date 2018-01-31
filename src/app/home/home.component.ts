import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public courses = []
  public teachers = []

  public search_string:string = "";

  constructor() { }

  ngOnInit() {

  }

  

}
