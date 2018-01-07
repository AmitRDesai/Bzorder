import { Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from '../core/database.service';
import { ToastNotificationComponent } from '../toast-notification/toast-notification.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public settingForHyd: any;
  @ViewChild( "toast" ) toast: ToastNotificationComponent;

  categories: string[];

  constructor(private data:DatabaseService) { 
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

  autoCompleteCallback1(selectedData:any) {
    let arr: string[] = selectedData.data.formatted_address.split(",");
    let city: string = arr[arr.length-2].split(" ")[1];
    console.log(city.toLowerCase());
    if(city.toLowerCase() != 'hyderabad'){
      this.toast.error('Home','Place must be of hyderabad only.');
    }

  }

}
