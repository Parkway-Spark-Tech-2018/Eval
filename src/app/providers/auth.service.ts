import { Injectable } from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {EvalUser} from '../../models/EvalUser';

// local_db
import * as localForage from 'localforage';

@Injectable()
export class AuthService {

  public logged_in:boolean;

  constructor(public afAuth: AngularFireAuth) {
    this.logged_in = false;
  }

  getLoggedin() {
    return this.logged_in;
  }

  getUser() { //Get the user async

    var user_promise = new Promise(function (resolve, reject) {

      localForage.getItem('user').then (function (user) {

        if (user == null) {
          resolve(null);
        }else {
          resolve(user);
        }

      }).catch (function (err) {
        reject(err);
      })


    })

    return user_promise;

  }

  setUser(user: EvalUser) { //Set the new user

    var user_promise = new Promise (function (resolve, reject) {

      localForage.setItem('user', user).then (function (user) {
        resolve(<EvalUser>user);
      }).catch (function (err) {
        reject(err);
      })

    })

    return user_promise;

  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

  }

  logout() {

    return this.afAuth.auth.signOut();

  }


}
