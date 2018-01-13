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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SignInComponent },
  { path: 'sign-up', component: SingUpComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'vendor/:catogry-id', component: VendorListComponent, canActivate: [AuthGuard] },
  { path: 'vendor-detail', component: VendorDetailsComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'about-us', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'partner-with-us', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'support', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
