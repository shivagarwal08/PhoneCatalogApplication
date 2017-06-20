import { SampleComponent } from './sample.component';
import { SampleFormComponent } from './sample-form';
import { SampleModalComponent } from './sample-modal';
import { SampleTabsComponent } from './sample-tabs';
import { SampleContentProjectionComponent } from './sample-content-projection';
import { SampleLifeCycleComponent } from './sample-life-cycle';

export const routes = [
      {
            path: '', component: SampleComponent, children: [
                  { path: '', component: SampleFormComponent },
                  { path: 'lifeCycle', component: SampleLifeCycleComponent },
                  { path: 'form', component: SampleFormComponent },
                  { path: 'modal', component: SampleModalComponent },
                  { path: 'tabs', component: SampleTabsComponent },
                  { path: 'contentProjection', component: SampleContentProjectionComponent}
            ]
      }
];
