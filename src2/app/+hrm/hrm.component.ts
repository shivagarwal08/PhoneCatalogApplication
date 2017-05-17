import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateHRM } from './shared/reducers';
import { CandidateActions } from './shared/candidate.actions';
console.log('`HRM` component loaded asynchronously');

@Component({
  selector: 'pc-hrm',
  templateUrl: 'hrm.component.html',
})
export class HRMComponent implements OnInit {
  public title: string = 'HRM Section';
  constructor(private actions: CandidateActions, private store: Store<AppStateHRM>) { }

  public ngOnInit() {
    console.log('ngOnOnit `HRM` component');
    this.store.dispatch(this.actions.loadCandidates());
  }
}
