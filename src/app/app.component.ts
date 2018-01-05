import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private auth:AuthService){}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDYfW2u4id0eA4b8vnWRrg7UMYzEMlAwRo",
      authDomain: "ng-recipe-book-58494.firebaseapp.com"
    });
  }
}
