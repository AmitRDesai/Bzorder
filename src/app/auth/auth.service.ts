import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { User } from './user.modal';

@Injectable()
export class AuthService {

  isLoggedIn = false;
  token = null;

  constructor(private router:Router) { }

  login(user: User){
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)
    .then(
      res => {
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => {
            this.token = token;
            console.log(this.token);
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

  logout(){
    this.token = null;
    this.isLoggedIn = false;
  }

  isAuth(){
    if(this.token){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
