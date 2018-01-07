import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loading = false;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login(user){
    this.loading = true;
    setTimeout(function() {
      //this.ng4LoadingSpinnerService.hide();
    }.bind(this), 4000);
    this.auth.login(user.value);
    
  }

}
