import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';

@Injectable()
export class DatabaseService {

  private url = 'https://bzorder07.firebaseio.com/';

  private rootRef : firebase.database.Reference;
  private itemsRef : firebase.database.Reference;

  constructor(private http: HttpClient) { 
    this.rootRef = firebase.database().ref();
    this.itemsRef = this.rootRef.child('items');
  }

  getAllItems(){
    return this.itemsRef.once('value').then((items)=> {return items.val()});
  }
}
