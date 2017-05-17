import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AdminComponent } from './admin.component';
import { routes } from './admin.routes';
import phoneReducers from './phoneReducers';
import { PhoneActions } from './phoneActions';
import { PhoneService } from './phone.service';
import { PhoneEffects } from './phoneEffects';
import { PhonesComponent } from './phones';
import { PhoneDetailsComponent } from './phoneDetails';
import { PhoneAddComponent } from './phoneAdd';
import { SharedModule } from '../sharedModule';
import { ItemFilterPipe, PhoneResolver, StoreService, ShoppingCartService } from '../+shoppingCart/shared';

console.log('`Admin` bundle loaded asynchronously');

@NgModule({
  declarations: [
    AdminComponent,
    PhoneDetailsComponent,
    PhonesComponent,
    PhoneAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.provideStore(phoneReducers),
    EffectsModule.run(PhoneEffects)
  ],
  providers: [PhoneActions, PhoneService, PhoneResolver, StoreService, ShoppingCartService]
})
export class AdminModule {
  public static routes = routes;
}
