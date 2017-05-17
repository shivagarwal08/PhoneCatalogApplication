import { AdminComponent } from './admin.component';
import { PhonesComponent } from './phones';
import { PhoneDetailsComponent } from './phoneDetails';
import { PhoneResolver } from '../+shoppingCart/shared';
import { PhoneAddComponent } from './phoneAdd';
export const routes = [
  {
    path: '', component: AdminComponent, children: [
    { path: '', component: PhonesComponent },
    { path: 'phones/:id', component: PhoneDetailsComponent, resolve: { phone: PhoneResolver} },
    { path: 'add', component: PhoneAddComponent}
      // { path: 'admin', loadChildren: './+admin#AdminModule' }
    ]
  }
];
