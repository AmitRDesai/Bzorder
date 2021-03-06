import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../core/database.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors = [];
  category: string = null;
  category_id: number;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private data: DatabaseService) { }

  ngOnInit() {
    this.category_id = this.route.snapshot.params['catogry-id'];
    this.data.getAllCategories().then((categories) => {
      this.category = categories[this.category_id];
    });
    this.data.getVendorsByCategoryId(+this.category_id).then((vendors) => {
      this.vendors = vendors;
    });
  }
}
