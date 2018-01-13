import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../core/database.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  vendor;
  items = [];
  cartItems = [];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private data: DatabaseService,
    private core: CoreService) { }

  ngOnInit() {
    let vendorId = this.route.snapshot.queryParams['vendor'];
    if (vendorId) {
      this.data.getVendorById(vendorId).then((vendor) => {
        this.vendor = vendor;
      })
      this.data.getItemsByVendorId(vendorId).then(items => {
        this.items = items;
      })
    }
    for (let item of this.core.getCartItems()) {
      this.cartItems.push(item.id);
    }
    // this.core.clearCart();
  }

  updateCart(item) {
    const index = this.cartItems.indexOf(item.id)
    if (index == -1) {
      this.cartItems.push(item.id);
      this.core.pushItem(item)
    } else {
      this.cartItems.splice(index, 1);
      this.core.removeItem(index);
    }
  }

}
