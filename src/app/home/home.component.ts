import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatabaseService } from '../core/database.service';
import { ToastNotificationComponent } from '../toast-notification/toast-notification.component'
import { CoreService } from '../core/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public settingForHyd: any;
  @ViewChild("toast") toast: ToastNotificationComponent;
  categories: string[];
  insertedPlace: string = "";

  constructor(private data: DatabaseService,
    private core: CoreService,
    private router: Router) {
    this.settingForHyd = {
      showRecentSearch: false,
      geoCountryRestriction: ['in'],
      geoLocation: [17.387140, 78.491684],
      geoRadius: 20,
      inputString: ''
    }
  }

  ngOnInit() {
    this.data.getAllCategories().then(categories =>
      this.categories = categories
    );
  }
  setFocus(){
    document.getElementById('search_places').focus();
  }

  setRoute(i: number){
    if(this.insertedPlace == ''){
      this.setFocus();
    } else{
      this.router.navigate(['/vendor', i ]);
    }
  }

  autoCompleteCallback1(selectedData: any) {
    //console.log(document.getElementById('search_places').Value);
    this.insertedPlace = selectedData.data.formatted_address;
    let arr: string[] = selectedData.data.formatted_address.split(",");
    let city: string = arr[arr.length - 2].split(" ")[1];
    console.log(city.toLowerCase());
    if (city.toLowerCase() != 'hyderabad') {
      this.toast.error('Home', 'Place must be of hyderabad only.');
    }
  }
  
}
