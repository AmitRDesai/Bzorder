import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../core/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

import { DatabaseService } from '../core/database.service';
import { CheckoutComponent } from './checkout/checkout.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];
  state = 0;

  constructor(public cart: CartService,
    private data: DatabaseService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = this.cart.getCartItems();
    this.cart.cartItemsChanged.subscribe((items)=>{
      this.items = items;
    });
  }

  getTotal() {
    let total = 0;
    for (let item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  }

  onRemove(index) {
    this.cart.removeItem(index);
  }

  placeOrder() {
    if (this.state == 0){
      this.state = 1;
      this.router.navigate(['checkout'], {
        relativeTo: this.route
      });
    }
    else if(this.state == 1){
      this.data.saveOrder(this.items, this.cart.address).then(()=>{
        this.router.navigate(['cart','order-placed']);
      });
      this.cart.clearCart();
    }else{

    }
  }

}
