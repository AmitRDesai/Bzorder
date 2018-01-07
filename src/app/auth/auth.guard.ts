import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private auth: AuthService){}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot){
        return this.auth.isAuth();
    }
}
