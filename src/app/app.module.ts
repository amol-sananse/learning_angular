import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { upperValuePipe } from './products/upperValue.pipe';
import { ProductFilterPipe } from './products/productFilter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';

import { MusicComponent } from './music/music.component';
import { MusicService } from './music/music.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ProductsComponent,
    upperValuePipe,
    ProductFilterPipe,
    StarComponent,
    MusicComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    ProductService,
    MusicService,
  ]
})
export class AppModule { }
