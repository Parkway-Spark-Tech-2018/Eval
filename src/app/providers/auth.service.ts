import { Injectable } from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {EvalUser} from '../../models/EvalUser';

@Injectable()
export class AuthService {

  public logged_in:boolean;
  public user:EvalUser;

  constructor(public afAuth: AngularFireAuth) {
    this.logged_in = false;
  }

  getLoggedin() {
    return this.logged_in;
  }

  getUser() {
    if (this.logged_in == true) {
      return this.user;
    }else {
      return null;
    }
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.afAuth.auth.signOut();
  }


}
