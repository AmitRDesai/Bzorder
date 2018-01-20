import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../core/database.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders = [];

  constructor(private data: DatabaseService,
    private auth: AuthService) { }

  ngOnInit() {
    this.init();
    this.auth.onLoggedIn.subscribe(()=>{
      this.init();
    })
  }

  init(){
    this.data.getOrders().then((orders)=>{
      this.orders = orders;
    });
  }

}
