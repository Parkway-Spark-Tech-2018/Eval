import { Component, OnInit } from '@angular/core';
import { AuthService } from "../providers/auth.service";
import { Router} from "@angular/router";
import {AngularFireAuth} from 'angularfire2/auth';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService, AngularFireAuth]
})
export class HomeComponent implements OnInit {


  public courses = []
  public teachers = []

  public search_string:string = "";
  public router: Router;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    console.log('At least I got here though');
    console.log(this.auth.getUser().user_name);
    if (this.auth.getUser().type == 1) //Student
    {
      console.log('Well you are a sudent, so, going to search page.')
      this.router.navigate(['/search']);
    }
    if (this.auth.getUser().type == 2) //Teacher
    {
      console.log('Well you are a sudent, so, going to search page.')
      this.router.navigate(['/about']);
    }

  }



}
