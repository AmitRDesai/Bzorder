import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, AfterViewInit {

  @ViewChild('form') form: NgForm;

  constructor(private cart: CartService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.form.valueChanges.subscribe(value => {
      this.cart.address = value;
    });
    this.form.statusChanges.subscribe(valid => {
      console.log(valid);
      this.cart.isValidAddress = valid;
    })
  }

}
