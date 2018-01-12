import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { User } from './user.modal';
import { DatabaseService } from '../core/database.service';
import { CoreService } from '../core/core.service';

@Injectable()
export class AuthService {

  isLoggedIn = false;
  loggedUser: firebase.User;
  recaptchaVerifier;
  confirmation;

  constructor(private router: Router,
    private data: DatabaseService,
    private core: CoreService) { }

  init() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.loggedUser = user;
        if (user.displayName){
          this.isLoggedIn = true;
          this.router.navigate(['home']);
        }else{
          this.router.navigate(['sign-up']);
        }
      } else {
        this.router.navigate(['login']);
      }
      this.core.setLoading(false);
    });
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('phone-sign-in-recaptcha', {
      'size': 'invisible',
      'callback': function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    });
  }

  login(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(
      res => {
      })
      .catch(
      err => console.log(err)
      );
  }

  sendCode(phone: string) {
    firebase.auth().signInWithPhoneNumber(phone, this.recaptchaVerifier)
      .then(confirmation => { this.confirmation = confirmation })
      .catch(err => console.log(err));
  }

  verifyCode(code) {
    this.confirmation.confirm(code).then(() => {
          this.core.setLoading(false);
        }).catch(err => {
          console.log(err);
          this.core.setLoading(false);
        });
  }

  singUp(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(
      err => console.log(err)
      );
  }

  logout() {
    this.isLoggedIn = false;
    firebase.auth().signOut();
  }

  isAuth() {
    return this.isLoggedIn;
  }

  refresh(){
    let user = firebase.auth().currentUser;
    if(user){
      this.loggedUser = user;
      this.isLoggedIn = true;
    }
  }
}
