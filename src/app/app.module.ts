import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component'
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product_detail.component';
import { upperValuePipe } from './products/upperValue.pipe';
import { ProductFilterPipe } from './products/productFilter.pipe';
import { MusicFilterPipe } from './music/musicFilter.pipe';
import { StarComponent } from './shared/star.component';
import { NotFoundComponent } from './shared/notfound.component';
import { ProductService } from './products/product.service';

import { MusicComponent } from './music/music.component';
import { MusicService } from './music/music.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'product', component: ProductsComponent},
      {path: 'product/:id', component:ProductDetailComponent},
      {path: 'home', component: HomeComponent},
      {path: 'order', component: OrderComponent},
      {path: 'music', component: MusicComponent},
      {path: '', redirectTo: 'product', pathMatch: 'full'},
      {path: '**', component: NotFoundComponent}
      
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    ProductsComponent,
    ProductDetailComponent,
    upperValuePipe,
    ProductFilterPipe,
    MusicFilterPipe,
    StarComponent,
    NotFoundComponent,
    MusicComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    ProductService,
    MusicService,
  ]
})
export class AppModule { }
