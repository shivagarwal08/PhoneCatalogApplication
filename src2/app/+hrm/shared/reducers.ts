import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import candidatesReducer, * as fromCandidates from './candidates.reducer';
import candidateReducer, * as fromCandidate from './candidate.reducer';

export interface AppStateHRM {
    candidates: fromCandidates.CandidatesState;
    candidate: fromCandidate.CandidateState;
};

export default compose(combineReducers)({
    candidates: candidatesReducer,
    candidate: candidateReducer
});
