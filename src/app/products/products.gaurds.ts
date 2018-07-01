import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()

export class RouterGuards implements CanActivate {
    constructor(private __router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot):boolean {
        let id = +route.url[1].path;
        if(isNaN(id) || id < 1) {
            alert('Invalid URL');
            this.__router.navigate['/product'];
            return false;
        }
        return true;
    }
}
