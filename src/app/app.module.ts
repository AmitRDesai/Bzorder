import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth/auth.service';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './auth/auth.guard';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { UserService } from './auth/user.service';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { CartItemsComponent } from './cart/cart-items/cart-items.component';
import { OrderPlacedComponent } from './cart/order-placed/order-placed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignInComponent,
    ToastNotificationComponent,
    SignInComponent,
    SingUpComponent,
    VendorListComponent,
    VendorDetailsComponent,
    MyProfileComponent,
    CartComponent,
    CheckoutComponent,
    CartItemsComponent,
    OrderPlacedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    Ng4GeoautocompleteModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    LoadingModule,
    CoreModule,
    SimpleNotificationsModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
