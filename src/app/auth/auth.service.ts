import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { User } from './user.modal';
import { DatabaseService } from '../core/database.service';

@Injectable()
export class AuthService {

  isLoggedIn = false;
  loggedUser: User;
  token = null;
  recaptchaVerifier;
  confirmation;

  constructor(private router: Router, private data: DatabaseService) { }

  init() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.data.getUserById(firebase.auth().currentUser.uid).then((user: User) => {
          this.isLoggedIn = true;
          this.token = firebase.auth().currentUser.getIdToken();
          this.loggedUser = user;
          this.router.navigate(['home']);
        });
      }else{
        this.router.navigate(['login']);
      }
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
        firebase.auth().currentUser.getIdToken()
          .then(
          (token: string) => {
            this.token = token;
            this.data.getUserById(firebase.auth().currentUser.uid).then((user: User) => {
              this.loggedUser = user;
            });
            this.isLoggedIn = true;
            this.router.navigate(['/home']);
          }
          );
      }
      )
      .catch(
      err => console.log(err)
      );
  }

  sendCode(phone: string) {
    firebase.auth().signInWithPhoneNumber(phone, this.recaptchaVerifier)
      .then(confirmation => this.confirmation = confirmation)
      .catch(err => console.log(err));
  }

  verifyCode(code) {
    this.confirmation.confirm(code).then(() => {
      firebase.auth().currentUser.getIdToken()
        .then(
        (token: string) => {
          this.token = token;
          this.data.getUserById(firebase.auth().currentUser.uid).then((user: User) => {
            this.loggedUser = user;
          });
          this.isLoggedIn = true;
          this.router.navigate(['/home']);
        }
        );
    });
  }

  singUp(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(
      err => console.log(err)
      );
  }

  logout() {
    this.token = null;
    this.isLoggedIn = false;
    firebase.auth().signOut();
  }

  isAuth() {
    return this.isLoggedIn;
  }
}
