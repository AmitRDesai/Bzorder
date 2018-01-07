import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading = false;
  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    if(this.auth.isAuth()){
      this.router.navigate(['home']);
    }
  }

  login(form: NgForm){
    this.loading = true;
    this.auth.login(form.value);
  }

}
