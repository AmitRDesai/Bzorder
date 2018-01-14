import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DatabaseService } from './database.service';

@Injectable()
export class CartService {

  private cartItems = {};
  public cartItemsChanged = new Subject<any>();
  public itemCount = 0;
  public address = {};
  public isValidAddress;

  constructor(private data: DatabaseService) {
  }

  init() {
    this.data.getCart().then((cartItems) => {
      this.cartItems = cartItems ? cartItems : {};
      this.itemCount = this.getCount();
      this.setQuantity();
      this.cartItemsChanged.next(this.cartItems);
    });
  }

  clearCart() {
    this.cartItems = {};
    this.refresh();
  }

  pushItem(item, vendorId) {
    if (!this.cartItems[vendorId])
      this.cartItems[vendorId] = [];
    this.cartItems[vendorId].push(item);
    this.refresh();
  }

  removeItem(index, vendorId) {
    this.cartItems[vendorId].splice(index, 1);
    this.refresh();
  }

  refresh() {
    this.itemCount = this.getCount();
    this.clearEmpty();
    this.data.saveCart(this.cartItems);
    this.setQuantity();
    this.cartItemsChanged.next(this.cartItems);
  }

  setQuantity() {
    let vendorIds = Object.keys(this.cartItems);
    for (let vendorId of vendorIds) {
      for (let item of this.cartItems[vendorId]) {
        item['quantity'] = item['quantity'] ? item['quantity'] : 1;
      }
    }
  }

  getCount() {
    let count = 0;
    let vendorIds = Object.keys(this.cartItems);
    for (let vendorId of vendorIds) {
      count += this.cartItems[vendorId].length;
    }
    return count;
  }

  getCartItems() {
    return { ...this.cartItems };
  }

  clearEmpty(){
    
  }
}
