import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];

  constructor(private core: CoreService) { }

  ngOnInit() {
    this.items = this.core.cartItems;
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

}
