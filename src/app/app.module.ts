import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';

@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    AppRoutingModule,
    Ng4GeoautocompleteModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
