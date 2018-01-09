import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private auth: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot){
        // if(!this.auth.isAuth())
        //     this.router.navigate(['login']);
        return this.auth.isAuth();
    }
}
