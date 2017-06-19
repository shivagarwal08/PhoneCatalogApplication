import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'sample', pathMatch: 'full'},
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sample', loadChildren: './+sample#SampleModule' },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  // { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  // { path: 'hrm', loadChildren: './+hrm#HRMModule' },
  // { path: 'shopping-cart', loadChildren: './+shoppingCart#ShoppingCartModule' },
  // { path: 'admin', loadChildren: './+admin#AdminModule' },
  { path: '**',    component: NoContentComponent },
];
