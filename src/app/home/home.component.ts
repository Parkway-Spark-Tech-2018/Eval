import { Component, OnInit } from '@angular/core';
import { AuthService } from "../providers/auth.service";
import { Router} from "@angular/router";
import {AngularFireAuth} from 'angularfire2/auth';
import {EvalUser} from '../../models/EvalUser';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService, AngularFireAuth]
})
export class HomeComponent implements OnInit {

  public usertype:number = 0;
  public courses = []
  public teachers = []

  public search_string:string = "";

  public user:EvalUser;

  constructor(private auth: AuthService, private router: Router) {

    let that = this;

    this.auth.getUser().then (function (user:EvalUser) {
      if (user == null) {
        that.user = null;
        that.usertype = 0;
      }else {

        that.user = user;
        console.log('User: '+that.user.user_name)
        if (that.user.type === null)
          that.usertype = 0;
        else
          that.usertype = that.user.type;
        if (that.user.type == 1) //Student
        {
          //console.log('Well you are a sudent, so, going to search page.')
          //that.router.navigate(['/student']);
        }
        if (that.user.type == 2) //Teacher
        {
          //console.log('Well you are a sudent, so, going to search page.')
          //that.router.navigate(['/about']);
        }
      }


      console.log('User:'+that.user);

    })
    this.usertype = that.usertype;
    console.log(this.usertype)

  }


  ngOnInit() {


  }



}
