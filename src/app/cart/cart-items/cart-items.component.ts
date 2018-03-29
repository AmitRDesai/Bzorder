import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../core/database.service';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  items = {};

  constructor(private cart: CartService,
    private data: DatabaseService) { }

  ngOnInit() {
    this.items = this.cart.getCartItems();
    this.cart.cartItemsChanged.subscribe((items) => {
      this.items = items;
    });
  }

  onRemove(index, vendorId) {
    this.cart.removeItem(index, vendorId);
  }

  changeQty(item, up) {
    if (up) {
      item.quantity++;
    } else {
      if (item.quantity > 1) {
        item.quantity--;
      }
    }
  }

}
