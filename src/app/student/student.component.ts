import { Component, OnInit } from '@angular/core';

import { AuthService } from '../providers/auth.service';
import { Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {EvalUser} from '../../models/EvalUser';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [AuthService, AngularFireAuth]
})

export class StudentComponent implements OnInit {

  public name:string = '';
  public user:EvalUser;

  constructor(private auth: AuthService, private router: Router) {

    const that = this;
    this.auth.getUser().then (function (user: EvalUser) {
      if (user == null) {
        that.user = null;
      } else {
        that.user = user;
        that.name = that.user.user_name;
        console.log(that.user.user_name);
      }
      console.log(that.user);

    });


  }

  ngOnInit() {
  }

}
