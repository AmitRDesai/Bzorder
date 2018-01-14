import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../core/database.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders = [];

  constructor(private data: DatabaseService) { }

  ngOnInit() {
    this.data.getOrders().then((orders)=>{
      this.orders = orders;
    })
  }

}
