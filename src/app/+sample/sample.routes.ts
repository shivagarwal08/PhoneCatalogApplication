import { SampleComponent } from './sample.component';
import { SampleFormComponent } from './sample-form';
import { SampleModalComponent } from './sample-modal';
import { SampleTabsComponent } from './sample-tabs';

export const routes = [
      {
            path: '', component: SampleComponent, children: [
                  { path: '', component: SampleFormComponent },
                  { path: 'form', component: SampleFormComponent },
                  { path: 'modal', component: SampleModalComponent },
                   { path: 'tabs', component: SampleTabsComponent }
            ]
      }
];
