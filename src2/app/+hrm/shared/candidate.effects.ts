import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { CandidateActions } from './candidate.actions';
import { CandidateService } from './candidate.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class CandidateEffects {
    @Effect() public loadCandidates$ = this.update$
        .ofType(CandidateActions.LOAD_CANDIDATES)
        .switchMap(() => this.svc.getCandidates())
        .map( (candidates) => this.candidateActions.loadCandidatesSuccess(candidates));

    @Effect() public getCandidate$ = this.update$
        .ofType(CandidateActions.GET_CANDIDATE)
        .map( (action) => action.payload)
        .switchMap( (id) => this.svc.getCandidate(id))
        .map( (candidate) => this.candidateActions.getCandidateSuccess(candidate));

    @Effect() public addCandidate$ = this.update$
        .ofType(CandidateActions.ADD_CANDIDATE)
        .map( (action) => action.payload)
        .switchMap( (candidate) => this.svc.addCandidate(candidate))
        .map( (candidate) => this.candidateActions.addCandidateSuccess(candidate));

    @Effect() public updateCandidate$ = this.update$
        .ofType(CandidateActions.UPDATE_CANDIDATE)
        .map( (action) => action.payload)
        .switchMap( (candidate) => this.svc.updateCandidate(candidate))
        .map( (candidate) => this.candidateActions.updateCandidateSuccess(candidate));

    constructor(
        private update$: Actions,
        private candidateActions: CandidateActions,
        private svc: CandidateService
    ) { }
}
