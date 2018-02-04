import { Component, OnInit } from '@angular/core';

import {EvalUser} from '../../models/EvalUser';

import {AuthService} from '../providers/auth.service';
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

  public user:EvalUser;

  constructor(private auth: AuthService) {

    let that = this;

    this.auth.getUser().then (function (user) {
      if (user == null) {
        that.user = null;
      }else {
        that.user = user;
      }

      console.log(that.user);

    })

  }

  ngOnInit() {

  }



}
