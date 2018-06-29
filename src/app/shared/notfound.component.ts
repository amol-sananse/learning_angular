import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'not-found-comp',
    templateUrl: './notfound.component.html',
    styleUrls: ['./notfound.component.css']
})

export class NotFoundComponent {
    
    constructor(private _router: Router) {

    }
    onClick(): void {
        this._router.navigate(['/home']);        
    }
}