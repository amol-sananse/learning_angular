import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component'
import { MusicFilterPipe } from './music/musicFilter.pipe';
import { NotFoundComponent } from './shared/notfound.component';
import { MusicComponent } from './music/music.component';
import { MusicService } from './music/music.service';
import { ProductModule } from './products/product.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'order', component: OrderComponent},
      {path: 'music', component: MusicComponent},
      {path: '', redirectTo: 'product', pathMatch: 'full'},
      {path: '**', component: NotFoundComponent}
      
    ]),
    ProductModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    MusicFilterPipe,
    NotFoundComponent,
    MusicComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    MusicService,
  ]
})
export class AppModule { }
