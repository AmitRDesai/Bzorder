import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor(private userService: UserService,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  signUp(form) {
    this.userService.updateProfile(form.value).then(() => {
      this.userService.updatePassword(form.value.password).then(() => {
        this.userService.updateEmail(form.value.email).then(() => {
          this.auth.refresh();
          this.auth.isLoggedIn = true;
          this.router.navigate(['home']);
        });
      });
    })
  }

}
