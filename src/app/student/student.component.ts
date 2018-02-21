import { Component, OnInit } from '@angular/core';

import { AuthService } from '../providers/auth.service';
import { Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

//Models
import {EvalUser} from '../../models/EvalUser';
import {Student} from '../../models/Student';

//Eval Api
import {EvalApi} from '../../api/EvalApi';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [AuthService, AngularFireAuth, EvalApi]
})

export class StudentComponent implements OnInit {

  public name:string = '';
  public user:EvalUser;
  public student:Student;

  constructor(private auth: AuthService, private router: Router, private eval_api: EvalApi) {

    const that = this;
    this.auth.getUser().then (function (user: EvalUser) {
      if (user == null) {
        that.user = null;
      } else {
        that.user = user;

        that.eval_api.getStudentByEmail(that.user.email).then (function (student:Student) {
          that.student = student;
          that.name = that.student.full_name;
        })

      }

    });


  }

  ngOnInit() {
  }

}
