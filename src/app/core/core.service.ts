import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CoreService {

  public loading = new Subject<boolean>();
  private cartItems = [];
  public itemCount = new Subject<number>();
  constructor() { }

  setLoading(loading: boolean){
    this.loading.next(loading);
  }

  clearCart(){
    this.cartItems = [];
    this.itemCount.next(0);
  }
  
  pushItem(item){
    this.cartItems.push(item);
    this.itemCount.next(this.cartItems.length);
  }

  removeItem(index){
    this.cartItems.splice(index, 1);
    this.itemCount.next(this.cartItems.length);
  }

  getCartItems(refrence?: boolean){
    return refrence ? this.cartItems : this.cartItems.slice();
  }

}
