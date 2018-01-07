import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private auth: AuthService){}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAeaih3MuZwomQ2VUbVI3rOiYV9RVNd0P0",
      authDomain: "bzorder07.firebaseio.com"
    });
  }
  
}
