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

  constructor(private auth: AuthService, private afAuth: AngularFireAuth, private zone: NgZone) { }

  ngOnInit() {

    this.logged_in = false;

    this.auth.afAuth.authState.subscribe((auth) => {
      if (auth == null) {
        this.logged_in = false;
        this.user_name = "";
        this.email = ""
      }else {
        this.logged_in = true;
        this.user_name = auth.displayName;
        this.email = auth.email;
      }
    });


  }

  google_login() {
    var login = this.auth.loginWithGoogle();
  }

  logout() {
    var logout = this.auth.logout();

  }

}
