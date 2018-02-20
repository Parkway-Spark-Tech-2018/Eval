import { Component, OnInit } from '@angular/core';

import {AuthService} from '../providers/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';

import {NgZone} from '@angular/core';

import {EvalUser} from '../../models/EvalUser';
import {Router, ActivatedRoute, ParamMap, NavigationExtras} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService, AngularFireAuth]
})
export class LoginComponent implements OnInit {

  public user:EvalUser = new EvalUser();

  public user_name: string = ""
  public email: string = ""

  public logged_in: boolean;
  public tryAgain: boolean;

  constructor(public auth: AuthService,
              private afAuth: AngularFireAuth,
              private zone: NgZone,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    let that = this;

    /** Get the user if stored in the local database **/
    this.auth.getUser().then (function (user: EvalUser) {

      if (user == null) {
        that.logged_in = false
        that.user = new EvalUser();
      } else {
        that.user = user;
        that.logged_in = true;

      }

    })

    this.logged_in = false;

    let query_promise = this.route.queryParams.subscribe(params => {
      var query = params['l'] || "";
      if (query === 'o')
      {
        this.tryAgain = true;
      }
      else
      {
        this.tryAgain = false;
      }
    });

    this.auth.afAuth.authState.subscribe((auth) => {
      if (auth == null) {
        this.logged_in = false;
        this.user = null;


        let query_promise = this.route.queryParams.subscribe(params => {
          var query = params['l'] || "";
          if (query === 't')
          {
            this.google_login();
          }
        });


      }else {
        this.logged_in = true;
        this.user.user_name = auth.displayName;
        this.user.email = auth.email;
        this.user.id = auth.uid;

        //For TESTING PURPOSES ONLY
        if (this.user.email == "mikipux7@gmail.com") {
          this.user.type = 3;
          this.auth.setUser(this.user);

          that.redirect_test_teacher();

          /** update the local_db of the user for other pages **/


        }

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


      /** update the local_db of the user for other pages **/
      this.auth.setUser(this.user);
    });


  }

  //FOR TESTING ONLY
  redirect_test_teacher() {
    this.router.navigate(['/user/teacher/2']);
  }

  google_login() {
    var login = this.auth.loginWithGoogle();
  }

  logout() {
    var logout = this.auth.logout();
    if (this.tryAgain)
    {
      this.router.navigate(['/login'], {queryParams: {'l': 'o'}});
    }
    else {
      this.router.navigate(['/login'];
    }
    location.reload();)

  }



}
