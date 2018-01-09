import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';

@Injectable()
export class DatabaseService {

  private url = 'https://bzorder07.firebaseio.com/';

  private rootRef: firebase.database.Reference;
  private itemsRef: firebase.database.Reference;
  private usersRef: firebase.database.Reference;
  private categoriesRef: firebase.database.Reference;

  constructor(private http: HttpClient) {
  }

  init() {
    this.rootRef = firebase.database().ref();
    this.itemsRef = this.rootRef.child('items');
    this.usersRef = this.rootRef.child('users');
    this.categoriesRef = this.rootRef.child('categories');
  }

  getAllItems() {
    return this.itemsRef.once('value').then((items) => { 
      return items.val();
    });
  }

  getItemsByCategoryId(categoryId) {
    return this.itemsRef.orderByChild('category').equalTo(categoryId)
      .once('value').then((items) => {
      return items.val();
    });
  }

  getUserById(uid: string) {
    return this.usersRef.child(uid).once('value').then((user) => {
      return user.val();
    });
  }

  getAllCategories() {
    return this.categoriesRef.once('value').then((categories) => {
      return categories.val();
    });
  }
}
