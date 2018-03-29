import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CartComponent } from './cart/cart.component';
import { CartItemsComponent } from './cart/cart-items/cart-items.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { OrderPlacedComponent } from './cart/order-placed/order-placed.component';
import { UserInfoComponent } from './my-profile/user-info/user-info.component';
import { OrderListComponent } from './my-profile/order-list/order-list.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: SignInComponent },
  { path: 'sign-up', component: SingUpComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'vendor/:catogry-id', component: VendorListComponent, canActivate: [AuthGuard] },
  { path: 'vendor-detail', component: VendorDetailsComponent, canActivate: [AuthGuard] },
  {
    path: 'cart', component: CartComponent, children: [
      { path: '', component: CartItemsComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'order-placed', component: OrderPlacedComponent }
    ]
  },
  { path: 'about-us', component: AboutUsComponent, canActivate: [AuthGuard] },
  { path: 'partner-with-us', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'support', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'my-profile', component: MyProfileComponent, children: [
      { path: '', component: UserInfoComponent },
      { path: 'order-list', component: OrderListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
