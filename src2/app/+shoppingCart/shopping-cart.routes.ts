import { ShoppingCartComponent } from './shopping-cart.component';
import { StoreComponent } from './store';
import { DetailsComponent } from './details';
import { CartComponent } from './cart';
import { PhoneResolver } from './shared';
export const routes = [
  {
    path: '', component: ShoppingCartComponent, children: [
      { path: '', component: StoreComponent },
      { path: 'phones/:id', component: DetailsComponent, resolve: { phone: PhoneResolver } },
      { path: 'cart', component: CartComponent }
    ]
  }
];
