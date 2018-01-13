import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pushRightClass: string = 'push-right';
  count = 0;
  constructor(public auth: AuthService,public router: Router,
    private core: CoreService) { }

  ngOnInit() {
    this.core.itemCount.subscribe((count)=>{
      this.count = count;
    })
  }
  
  onLoggedout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }
  
}
