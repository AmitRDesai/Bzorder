import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from './user.modal';

@Injectable()
export class UserService {

  constructor() { }

  updateProfile(profile: User) {
    const user = firebase.auth().currentUser;
    return user.updateProfile(profile).then( () => {
    }).catch(error => console.log(error));
  }

  updateEmail(email: string) {
    const user = firebase.auth().currentUser;
    return user.updateEmail(email).then(() => {
    }).catch(error => console.log(error));
  }

  updatePassword(newPassword: string) {
    const user = firebase.auth().currentUser;
    return user.updatePassword(newPassword).then(function() {
    }).catch(error => console.log(error));
  }

}
