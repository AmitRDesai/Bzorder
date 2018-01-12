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
  loading = true;

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
      authDomain: "bzorder01.firebaseapp.com",
      databaseURL: "https://bzorder01.firebaseio.com",
      projectId: "bzorder01",
      storageBucket: "bzorder01.appspot.com",
      messagingSenderId: "1032338270823"
    });
    this.auth.init();
    this.data.init();
    window.onresize = this.ngDoCheck;
    this.core.loading.subscribe((loading)=>{
      setTimeout(()=>{this.loading = loading;}, 50);
    })
  }

  ngDoCheck(){
    this.height = window.innerHeight - 110;
  }
  
}
