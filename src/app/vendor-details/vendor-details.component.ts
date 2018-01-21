import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../core/database.service';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  vendor;
  items = [];
  cartItems = [];
  vendorId;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private data: DatabaseService,
    private cart: CartService) { }

  ngOnInit() {
    this.vendorId = this.route.snapshot.queryParams['vendor'];
    if (this.vendorId) {
      this.data.getVendorById(this.vendorId).then((vendor) => {
        this.vendor = vendor;
      })
      this.data.getItemsByVendorId(this.vendorId).then(items => {
        this.items = items;
      })
    }
    let items = this.cart.getCartItems();
    if(items[this.vendorId]){
      for (let item of items[this.vendorId]) {
        this.cartItems.push(item.id);
      }
    }
    this.cart.cartItemsChanged.subscribe(items=>{
      for (let item of items) {
        this.cartItems.push(item.id);
      }
    });
  }

  updateCart(item) {
    const index = this.cartItems.indexOf(item.id)
    if (index == -1) {
      this.cartItems.push(item.id);
      this.cart.pushItem(item,this.vendorId);
    } else {
      this.cartItems.splice(index, 1);
      this.cart.removeItem(index,this.vendorId);
    }
  }

  changeQty(item, up) {
    item.quantity = item.quantity ? item.quantity : 0;
    if (up)
      item.quantity++;
    else {
      if (item.quantity > 1)
        item.quantity--;
    }
  }

}
