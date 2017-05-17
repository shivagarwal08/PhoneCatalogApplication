import { Action, ActionReducer } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Candidate } from './candidate.model';
import { CandidateActions } from './candidate.actions';

export type CandidatesState = Candidate[];
const initialState: CandidatesState = [];

export default function (state = initialState, action: Action): CandidatesState {
    console.log('Action came in candidates reducer! ' + action.type);
    switch (action.type) {
        case CandidateActions.LOAD_CANDIDATES_SUCCESS: {
            console.log('>>>>><<<<<<<<<', action.payload);
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
