import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CoreService {

  loading = new Subject<boolean>();
  cartItems = [];
  constructor() { }

  setLoading(loading: boolean){
    this.loading.next(loading);
  }

  clearCart(){
    this.cartItems = [];
  }
  
  pushItem(item){
    this.cartItems.push(item);
  }

  removeItem(index){
    this.cartItems.splice(index, 1);
  }

}
