import { Component, OnInit, DoCheck } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
import { DatabaseService } from './core/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{

  height;

  constructor(private auth: AuthService, private data: DatabaseService){}

  ngOnInit(){

    firebase.initializeApp({
      apiKey: "AIzaSyAeaih3MuZwomQ2VUbVI3rOiYV9RVNd0P0",
      authDomain: "bzorder07.firebaseio.com",
      databaseURL: 'bzorder07.firebaseio.com'
    });
    this.data.init();
    window.onresize = this.ngDoCheck;
  }

  ngDoCheck(){
    console.log(window.innerHeight);
    this.height = window.innerHeight - 110;
  }
  
}
