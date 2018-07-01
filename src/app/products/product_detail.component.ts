import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './products.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'prod--detail-comp',
    templateUrl: './product_detail.component.html',
    styleUrls: ['./product_detail.component.css']
})

export class ProductDetailComponent implements OnInit {
    productTitle:string = 'Product Details';
    product: IProduct;

    constructor(private __route: ActivatedRoute, private __router: Router){}

    ngOnInit(): void {
        this.__route.queryParams.subscribe((params) => {
            this.product = {
                "_id": params['id'],
                "productId": params['productId'],
                "productName": params['productName'],
                "productCode": params['productCode'],
                "releaseDate": params['releaseDate'],
                "description": params['description'],
                "price": params['price'],
                "starRating": params['starRating'],
                "imageUrl": params['imageUrl']
            };    
        });
    }
}