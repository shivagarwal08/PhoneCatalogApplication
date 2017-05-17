import { Action, ActionReducer } from '@ngrx/store';
import { Candidate } from './candidate.model';
import { CandidateActions } from './candidate.actions';

export type CandidateState = Candidate;
const initialState: Candidate = Candidate.getBlankCandidate();

export default function (state = initialState, action: Action): CandidateState {
    console.log('Action came in candidate reducer! ' + action.type);
    switch (action.type) {
        case CandidateActions.RESET_BLANK_CANDIDATE: {
            return initialState;
        }
        case CandidateActions.GET_CANDIDATE_SUCCESS: {
            console.log('>>>>>===============<<<<<<<<<', action.payload);
            return action.payload;
        }
        case CandidateActions.ADD_CANDIDATE_SUCCESS: {
            return action.payload;
        }
        case CandidateActions.UPDATE_CANDIDATE_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
