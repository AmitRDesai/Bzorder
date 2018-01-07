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

  constructor(private router: Router, private data: DatabaseService) { }

  login(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(
      res => {
        firebase.auth().currentUser.getIdToken()
          .then(
          (token: string) => {
            this.token = token;
            this.data.getUserById(firebase.auth().currentUser.uid).then((user: User)=>{
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

  singUp(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(
      err => console.log(err)
      );
  }

  logout() {
    this.token = null;
    this.isLoggedIn = false;
  }

  isAuth() {
    if (this.token) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
