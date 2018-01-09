import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, AfterViewInit {

  phone : string = '+91';
  code : number;
  state : number = 0;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    
  }

  onSend(){
    switch(this.state){
      case 0:
        this.auth.sendCode(this.phone);
        this.state = 1;
        break;
      case 1:
      this.auth.verifyCode(this.code);
        break;
      case 2:
        break;
    }
  }

}
