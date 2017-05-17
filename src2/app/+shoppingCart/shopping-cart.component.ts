import {  Component,  OnInit } from '@angular/core';

console.log('`Shopping Cart` component loaded asynchronously');

@Component({
  selector: 'shopping-cart',
 templateUrl: 'shopping-cart.component.html',
  providers: [ ]
})
export class ShoppingCartComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `shopping cart` component');
  }
}
