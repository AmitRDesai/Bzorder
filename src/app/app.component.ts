import { Component, OnInit, DoCheck } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
import { DatabaseService } from './core/database.service';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{

  height;

  constructor(public auth: AuthService, 
    public data: DatabaseService,
    public core:CoreService){}

  ngOnInit(){

    firebase.initializeApp({
      apiKey: "AIzaSyAK3W-9RTSSVJw579ZJaC0F7ZkxJZo7x2Y",
      authDomain: "bzorder01.firebaseapp.com",
      databaseURL: "https://bzorder01.firebaseio.com",
      projectId: "bzorder01",
      storageBucket: "bzorder01.appspot.com",
      messagingSenderId: "1032338270823"
    });
    this.auth.init();
    this.data.init();
    window.onresize = this.ngDoCheck;
  }

  ngDoCheck(){
    this.height = window.innerHeight - 110;
  }
  
}
