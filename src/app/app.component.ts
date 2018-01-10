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
<<<<<<< HEAD
    private data: DatabaseService,
=======
    public data: DatabaseService,
>>>>>>> b8f522000bd31775a80d6a3767f6dab723af4ed5
    public core:CoreService){}

  ngOnInit(){

    firebase.initializeApp({
      apiKey: "AIzaSyAK3W-9RTSSVJw579ZJaC0F7ZkxJZo7x2Y",
      authDomain: "bzorder01.firebaseio.com",
      databaseURL: 'bzorder01.firebaseio.com'
    });
    this.auth.init();
    this.data.init();
    window.onresize = this.ngDoCheck;
  }

  ngDoCheck(){
    this.height = window.innerHeight - 110;
  }
  
}
