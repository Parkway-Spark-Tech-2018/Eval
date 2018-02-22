import { Component, OnInit } from '@angular/core';

import {AuthService} from '../providers/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

import {NgZone} from '@angular/core';

import {EvalUser} from '../../models/EvalUser';
import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-redirector',
  templateUrl: './redirector.component.html',
  styleUrls: ['./redirector.component.css'],
  providers: [AuthService, AngularFireAuth]
})
export class RedirectorComponent implements OnInit {

  public usertype:number = 0;
  public user:EvalUser;

  constructor(private auth: AuthService, private router: Router) {

    let that = this;

    this.auth.getUser().then (function (user:EvalUser) {
      if (user == null) {
        that.user = null;
        that.usertype = 0;
        console.log('Got here!')
        that.router.navigate(['/']);
      }else {

        that.user = user;
        console.log('User: ' + that.user.user_name)
        if (that.user.type == 0) {
          that.usertype = 0;
          that.router.navigate(['/']);
        }
        else
          that.usertype = that.user.type;
        if (that.user.type == 1) //Student
        {
          //console.log('Well you are a sudent, so, going to search page.')
          that.router.navigate(['/student']);
        }
        else if (that.user.type == 2) //Teacher
        {
          //console.log('Well you are a sudent, so, going to search page.')
          that.router.navigate(['/teacher-user.component.ts']);
        }
        else if (that.user.type == 3) //Admin
        {
          //console.log('Well you are a sudent, so, going to search page.')
          that.router.navigate(['/teacher-user.component.ts']);
        }
        else
        {
          that.router.navigate(['/home']);
        }
        location.reload();
      }


      console.log('User:'+that.user);

    })
    this.usertype = that.usertype;
    console.log(this.usertype)

  }


  ngOnInit() {


  }



}
