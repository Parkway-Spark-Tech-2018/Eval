import { Component, OnInit } from '@angular/core';

import {AuthService} from '../providers/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

import {NgZone} from '@angular/core';

import {EvalUser} from '../../models/EvalUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, AngularFireAuth]
})
export class LoginComponent implements OnInit {

  public user:EvalUser;

  public user_name: string = ""
  public email: string = ""

  public logged_in: boolean;
  public tryAgain: boolean;

  constructor(private auth: AuthService, private afAuth: AngularFireAuth, private zone: NgZone) { }

  ngOnInit() {

    this.user = new EvalUser()

    this.logged_in = false;
    this.tryAgain = false;

    this.auth.afAuth.authState.subscribe((auth) => {
      if (auth == null) {
        this.logged_in = false;
        this.user.user_name = "";
        this.user.email = "";
        this.user.id = "";
        // Peter added this next line:
          this.user.type = 0;
      }else {
        this.logged_in = true;
        this.user.user_name = auth.displayName;
        this.user.email = auth.email;
        this.user.id = auth.uid;

        //Peter added this code
        if (!this.user.email.endsWith('@parkwayschools.net'))
        {
          this.tryAgain = true;
          this.logout();
          this.logged_in = false;
          this.user.user_name = "";
          this.user.email = "";
          this.user.id = "";
        }
        else
        {
          this.tryAgain = false;
        }
        let tempString: string = this.user.email.split('@')[0];
        let lastFour: string = tempString.substring(tempString.length - 4, tempString.length);
        let digits: number;
        digits = Number(lastFour);
        if (digits > 1000)
        {
          this.user.type = 1;
        }
        else
        {
          this.user.type = 2;
        }
        console.log("Usertype: " + this.user.type)
        // End of code by Peter^^^
      }

      this.auth.logged_in = this.logged_in;
      this.auth.user = this.user;

    });


  }

  google_login() {
    var login = this.auth.loginWithGoogle();
  }

  logout() {
    var logout = this.auth.logout();

  }

  view_user(){
    let user:EvalUser = this.auth.getUser();

    alert(JSON.stringify(user));
  }

}
