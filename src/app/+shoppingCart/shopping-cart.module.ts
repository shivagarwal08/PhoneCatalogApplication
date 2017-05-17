import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './shopping-cart.routes';
import { ShoppingCartComponent } from './shopping-cart.component';
import { StoreComponent } from './store';
import { DetailsComponent } from './details';
import { ItemFilterPipe, PhoneResolver, StoreService, ShoppingCartService } from './shared';
import { CartComponent } from './cart';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SharedModule } from '../sharedModule';

console.log('`ShoppingCart` bundle loaded asynchronously');

@NgModule({
  declarations: [
    ItemFilterPipe,
    CartComponent,
    StoreComponent,
    DetailsComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule,
    CarouselModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [ PhoneResolver, StoreService, ShoppingCartService ]
})
export class ShoppingCartModule {
  public static routes = routes;
}
