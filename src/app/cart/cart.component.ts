import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../core/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

import { DatabaseService } from '../core/database.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @ViewChild('paymentModal') paymentModal: ModalDirective;
  items = {};
  vendors;
  state = 0;

  constructor(public cart: CartService,
    private data: DatabaseService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService) { }

  ngOnInit() {
    this.items = this.cart.getCartItems();
    this.cart.cartItemsChanged.subscribe((items) => {
      this.items = items;
    });
    this.data.getAllVendors().then((vendors) => {
      this.vendors = vendors;
    });
  }

  getTotal(vendorId) {
    let total = 0;
    if (vendorId) {
      for (const item of this.items[vendorId]) {
        total += item.price * item.quantity;
      }
    }else {
      const vendorIds = Object.keys(this.items);
      total = 0;
      for (const id of vendorIds) {
        for (const item of this.items[id]) {
          total += item.price * item.quantity;
        }
      }
      total += total * 5 / 100;
    }
    return total;
  }

  getGst() {
    const vendorIds = Object.keys(this.items);
    let total = 0;
    for (const vendorId of vendorIds) {
      for (const item of this.items[vendorId]) {
        total += item.price * item.quantity;
      }
    }
    return total * 5 / 100;
  }

  placeOrder() {
    if (this.state === 0) {
      if (!this.auth.isLoggedIn) {
        this.router.navigate(['login']);
        return;
      }
      this.state = 1;
      this.router.navigate(['checkout'], {
        relativeTo: this.route
      });
    }else if (this.state === 1) {
      this.paymentModal.show();
    } else {

    }
  }
  makePayment() {
    this.paymentModal.hide();
    this.data.saveOrder(this.items, this.cart.address).then(() => {
      this.router.navigate(['cart', 'order-placed']);
      this.cart.clearCart();
    });
  }
}
