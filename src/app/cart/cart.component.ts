import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/core.service';
import { DatabaseService } from '../core/database.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];

  constructor(private core: CoreService,
    private data: DatabaseService) { }

  ngOnInit() {
    this.items = this.core.getCartItems(true);
    for(let item of this.items){
      item['quantity'] = 1;
    }
  }

  getTotal(){
    let total = 0;
    for(let item of this.items){
      total += item.price * item.quantity;
    }
    return total;
  }

  onRemove(index){
    this.core.removeItem(index);
  }

  placeOrder(){
    this.data.saveOrder(this.items);
  }

}
