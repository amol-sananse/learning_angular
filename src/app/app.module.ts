import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { upperValuePipe } from './products/upperValue.pipe';
import { ProductFilterPipe } from './products/productFilter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ProductsComponent,
    upperValuePipe,
    ProductFilterPipe,
    StarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
