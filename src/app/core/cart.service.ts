import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DatabaseService } from './database.service';

@Injectable()
export class CartService {

  private cartItems = [];
  public cartItemsChanged = new Subject<any>();
  public itemCount = 0;
  public address = {};
  public isValidAddress;

  constructor(private data: DatabaseService) {
  }

  init() {
    this.data.getCart().then((cartItems) => {
      this.cartItems = cartItems ? cartItems : [];
      this.itemCount = this.cartItems.length;
      for (let item of this.cartItems) {
        item['quantity'] = item['quantity'] ? item['quantity'] :  1;
      }
      this.cartItemsChanged.next(this.cartItems);
    });
  }

  clearCart() {
    this.cartItems = [];
    this.refresh();
  }

  pushItem(item) {
    this.cartItems.push(item);
    this.refresh();
  }

  removeItem(index) {
    this.cartItems.splice(index, 1);
    this.refresh();
  }

  refresh() {
    this.itemCount = this.cartItems.length;
    this.data.saveCart(this.cartItems);
    for (let item of this.cartItems) {
      item['quantity'] = item['quantity'] ? item['quantity'] :  1;
    }
    this.cartItemsChanged.next(this.cartItems);
  }

  getCartItems() {
    return this.cartItems.slice();
  }
}
