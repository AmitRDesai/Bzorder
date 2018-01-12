import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../core/database.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  vendor;
  items = [];

  constructor(private router:Router,
    private route: ActivatedRoute,
    private data: DatabaseService) { }

  ngOnInit() {
    let vendorId = this.route.snapshot.queryParams['vendor'];
    this.data.getVendorById(vendorId).then((vendor)=>{
      this.vendor = vendor;
    })
    this.data.getItemsByVendorId(vendorId).then(items => {
      this.items = items;
    })
  }

}
