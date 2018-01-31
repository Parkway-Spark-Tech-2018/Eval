import { Component, OnInit } from '@angular/core';

import {AuthService} from '../providers/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

import {NgZone} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, AngularFireAuth]
})
export class LoginComponent implements OnInit {

  public user_name: string = ""
  public email: string = ""

  public logged_in: boolean;

  constructor(private auth: AuthService, private zone: NgZone) { }

  ngOnInit() {

    this.logged_in = false;

  }

  google_login() {
    var login = this.auth.loginWithGoogle();

    let that = this;

    login.then (function (data) {

      that.change_login_status();

      that.set_user(data.user.displayName, data.user.email)

    })
  }

  set_user(username, email) {

    let that = this;

    this.zone.run(function () {
      that.user_name = username
      that.email = email;
    });


  }

  change_login_status() {

    let that = this;
    this.zone.run(function () {
      that.logged_in = !that.logged_in;
    });
  }

  logout() {
    var logout = this.auth.logout();

    let that = this;

    logout.then (function (data) {

      that.change_login_status();
      that.set_user("", "")
      that.logged_in = false;

    })
  }

}
