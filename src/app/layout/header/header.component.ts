import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pushRightClass: string = 'push-right';
  constructor(public auth: AuthService,private router: Router) { }

  ngOnInit() {
  }
  
  onLoggedout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }
  
}
