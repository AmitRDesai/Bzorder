import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import { CoreService } from './core.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DatabaseService {

  private rootRef: firebase.database.Reference;
  private itemsRef: firebase.database.Reference;
  private vendorsRef: firebase.database.Reference;
  private usersRef: firebase.database.Reference;
  private categoriesRef: firebase.database.Reference;
  private orderRef: firebase.database.Reference;

  private categories;

  constructor(private http: HttpClient,
    private core: CoreService) {
  }

  init() {
    this.rootRef = firebase.database().ref();
    this.itemsRef = this.rootRef.child('items');
    this.vendorsRef = this.rootRef.child('vendors');
    this.usersRef = this.rootRef.child('users');
    this.categoriesRef = this.rootRef.child('categories');
    this.orderRef = this.rootRef.child('orders');
    this.getVendorsByCategoryId(1);
    this.getItemsByVendorId('-L2aHUROXKhizmimuwaD')
  }

  getAllItems() {
    this.core.setLoading(true);
    return this.itemsRef.once('value').then((items) => {
      this.core.setLoading(false);
      return items.val();
    });
  }

  getVendorsByCategoryId(categoryId) {
    this.core.setLoading(true);
    return this.vendorsRef.orderByChild('category_id').equalTo(categoryId)
      .once('value').then((vendors) => {
        this.core.setLoading(false);
        return vendors.val();
      });
  }

  getItemsByVendorId(vendorId) {
    this.core.setLoading(true);
    return this.itemsRef.orderByChild('vendor_id').equalTo(vendorId)
      .once('value').then((items) => {
        this.core.setLoading(false);
        return items.val();
      });
  }

  getVendorById(vendorId) {
    this.core.setLoading(true);
    return this.vendorsRef.child(vendorId)
      .once('value').then((vendor) => {
        this.core.setLoading(false);
        return vendor.val();
      });
  }

  getUserById(uid: string) {
    this.core.setLoading(true);
    return this.usersRef.child(uid).once('value').then((user) => {
      this.core.setLoading(false);
      return user.val();
    });
  }

  getAllCategories() {
    if (this.categories)
      return Promise.resolve(this.categories);
    this.core.setLoading(true);
    return this.categoriesRef.once('value').then((categories) => {
      this.core.setLoading(false);
      this.categories = categories.val();
      return categories.val();
    });
  }

  saveOrder(items){
    let order = {
      'user_id': firebase.auth().currentUser.uid
    };
    
    order['items'] = [];
    for(let item of items)
      order['items'].push({
        'id': item.id,
        'quantity': item.quantity
      });

    this.core.setLoading(true);
    this.orderRef.push(order).then(() => {
      this.core.setLoading(false);
    })
  }
}
