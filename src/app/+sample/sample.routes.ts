import { SampleComponent } from './sample.component';
import { SampleFormComponent } from './sample-form';
import { SampleModalComponent } from './sample-modal';
import { SampleTabsComponent } from './sample-tabs';
import { SampleContentProjectionComponent } from './sample-content-projection';
import { SampleLifeCycleComponent } from './sample-life-cycle';
import { SampleAngularApisComponent } from './sample-angular-apis';

export const routes = [
      {
            path: '', component: SampleComponent, children: [
                  { path: '', component: SampleFormComponent },
                   { path: 'apis', component: SampleAngularApisComponent },
                  { path: 'lifeCycle', component: SampleLifeCycleComponent },
                  { path: 'form', component: SampleFormComponent },
                  { path: 'modal', component: SampleModalComponent },
                  { path: 'tabs', component: SampleTabsComponent },
                  { path: 'contentProjection', component: SampleContentProjectionComponent}
            ]
      }
];
