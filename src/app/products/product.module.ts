import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product_detail.component';
import { upperValuePipe } from './upperValue.pipe';
import { ProductFilterPipe } from './productFilter.pipe';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { RouterGuards } from '../products/products.gaurds';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'product', component:ProductsComponent },
            { path: 'product/:id', canActivate: [RouterGuards], component: ProductDetailComponent },
        ])
    ],
    declarations: [
        ProductsComponent,
        upperValuePipe,
        ProductFilterPipe,
        ProductDetailComponent
    ],
    providers: [
        ProductService,
        RouterGuards
    ]
})

export class ProductModule {

}
