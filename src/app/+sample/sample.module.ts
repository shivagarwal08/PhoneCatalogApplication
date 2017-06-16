import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './sample.routes';
import { SampleComponent } from './sample.component';
import { SampleFormComponent, AuFaInputComponent } from './sample-form';
import { SampleModalComponent, AuModalModule } from './sample-modal';

console.log('`Sample` bundle loaded asynchronously');

@NgModule({
  declarations: [
    AuFaInputComponent,
    SampleFormComponent,
    SampleModalComponent,
    SampleComponent  
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuModalModule,
    RouterModule.forChild(routes),
  ]
})
export class SampleModule {
 // public static routes = routes;
}
