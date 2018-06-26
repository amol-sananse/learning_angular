import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './products.model';

@Component({
    selector: 'prod-comp',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
    productTitle:string = 'Product Listing';
    showImage:boolean = true;
    showProductListing:boolean = true;
    filterData:string;
    errorMessage:string;
    products:IProduct[];
    
    toggleImage(): void 
    {
        this.showImage = !this.showImage;
    }

    constructor(private _productService:ProductService){

    }

    ngOnInit():void {
        this._productService.getProducts()
            .subscribe((data) => this.products = data,
            (err) => this.errorMessage = err);
    }
}