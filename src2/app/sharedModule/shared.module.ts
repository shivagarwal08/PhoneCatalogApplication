import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, ApplicationRef } from '@angular/core';

import { SharedComponent } from './shared.component';
import { CardComponent } from './card';
import { PhoneListComponent } from './phoneList';

@NgModule({
  bootstrap: [ SharedComponent ],
  declarations: [
    SharedComponent,
    CardComponent,
    PhoneListComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule,
    CommonModule
  ],
  providers: [ ],
  exports: [ CardComponent, PhoneListComponent ]
})
export class SharedModule {
}
