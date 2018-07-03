import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <a class="navbar-brand">Edureka</a>
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['/home']">Home</a></li>
                        <li><a [routerLink]="['/order']">Orders</a></li>
                        <li><a [routerLink]="['/product']">Products</a></li>
                        <li><a [routerLink]="['/music']">Music</a></li>
                        <li><a [routerLink]="['/employee']">Employee</a></li>
                    </ul>
                </div>
            </nav>
            <div>
                <router-outlet></router-outlet>
            </div>
            <div class="row text-center" style="height:100px; margin-top:100px;">
                <a [routerLink]="['/home']">Home</a>&nbsp;|&nbsp;<a [routerLink]="['/orders']">Orders</a>&nbsp;|&nbsp;<a [routerLink]="['/product']">Products</a>&nbsp;|&nbsp;<a [routerLink]="['/music']">Music</a>
            </div>
        </div>
    `
})
export class AppComponent { }
