import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './sample.routes';
import { AuFaInputComponent } from './au-fa-input';
import { AuModalModule } from './au-modal';
import { AuTabPanelComponent } from './au-tab-panel';
import { AuTabComponent } from './au-tab';
import { SampleComponent } from './sample.component';
import { SampleFormComponent } from './sample-form';
import { SampleModalComponent } from './sample-modal';
import { SampleTabsComponent } from './sample-tabs';
import { SampleContentProjectionComponent } from './sample-content-projection';
import { SampleContentProjectionChildComponent } from './sample-content-projection-child';

import { SampleLifeCycleComponent, SampleHelloComponent, SampleHelloListComponent } from './sample-life-cycle';
import { SampleAngularApisComponent, SampleDelayDirective, HelloWorldComponent } from './sample-angular-apis';
import { SampleCardApiComponent  } from './sample-card-api';

console.log('`Sample` bundle loaded asynchronously');

@NgModule({
  declarations: [
    AuFaInputComponent,
    SampleFormComponent,
    SampleModalComponent,
    AuTabComponent,    
    AuTabPanelComponent, 
    SampleTabsComponent,
    SampleContentProjectionChildComponent,
    SampleContentProjectionComponent,    
    SampleLifeCycleComponent, SampleHelloComponent, SampleHelloListComponent,
    HelloWorldComponent, SampleAngularApisComponent, SampleCardApiComponent, SampleDelayDirective, 
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
