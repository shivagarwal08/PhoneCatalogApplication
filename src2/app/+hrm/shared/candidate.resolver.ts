import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Candidate } from './candidate.model';
import { CandidateService } from './candidate.service';
import { Store } from '@ngrx/store';
import { AppStateHRM } from './reducers';
import { CandidateActions } from './candidate.actions';

@Injectable()
export class CandidateResolver implements Resolve<any> {
  constructor(private candidateService: CandidateService,
              private actions: CandidateActions,
              private store: Store<AppStateHRM>) { }

  public resolve(route: ActivatedRouteSnapshot) {
    console.log('>>>>>>>>>>>>>>>>>> resolver:', route.params._id);
    this.store.dispatch(this.actions.getCandidate(route.params._id));
  }
}
