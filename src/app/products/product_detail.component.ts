import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './products.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'prod--detail-comp',
    templateUrl: './product_detail.component.html',
    styleUrls: ['./product_detail.component.css']
})

export class ProductDetailComponent implements OnInit {
    productTitle:string = 'Product Details';
    id: number;
    product: IProduct;

    constructor(private __route: ActivatedRoute){}

    ngOnInit(): void {
        this.id = this.__route.snapshot.params['id'];
        this.product = {
            "_id":"5a05dacc734d1d68d42d31f3",
            "productId":1,
            "productName":"Leaf Rake",
            "productCode":"GDN-0011",
            "releaseDate":"March 19, 2016",
            "description":"Leaf rake with 48-inch wooden handle.",
            "price":19.95,
            "starRating":3.5,
            "imageUrl":"http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        };
    }
}