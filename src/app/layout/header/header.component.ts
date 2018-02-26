import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pushRightClass = 'push-right';

  constructor(public auth: AuthService,
    public router: Router,
    public cart: CartService) { }

  ngOnInit() {
  }

  onLoggedout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
