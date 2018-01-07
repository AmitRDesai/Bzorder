import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../core/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: string[];

  constructor(private data:DatabaseService) { }

  ngOnInit() {
    this.data.getAllCategories().then(categories => 
      this.categories = categories
    );
  }

}
