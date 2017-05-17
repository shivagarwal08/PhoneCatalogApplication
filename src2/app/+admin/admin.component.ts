import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateAdmin } from './phoneReducers';
import { PhoneActions } from './phoneActions';
console.log('`Admin` component loaded asynchronously');

@Component({
  selector: 'pc-admin',
  templateUrl: 'admin.component.html',
})
export class AdminComponent implements OnInit {
  public title: string = 'Admin Section';
  constructor(
    private phoneActions: PhoneActions,
    private store: Store<AppStateAdmin>
  ) { }

  public ngOnInit() {
    console.log('ngOnOnit `Admin` component');
    this.store.dispatch(this.phoneActions.loadPhones());
  }

}
