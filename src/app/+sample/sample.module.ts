import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './sample.routes';
import { SampleComponent } from './sample.component';
import { SampleFormComponent, AuFaInputComponent } from './sample-form';
import { SampleModalComponent, AuModalModule } from './sample-modal';
import { SampleTabsComponent, AuTabComponent, AuTabPanelComponent } from './sample-tabs';

console.log('`Sample` bundle loaded asynchronously');

@NgModule({
  declarations: [
    AuFaInputComponent,
    SampleFormComponent,
    SampleModalComponent,
    AuTabComponent,    
    AuTabPanelComponent, 
    SampleTabsComponent,
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
