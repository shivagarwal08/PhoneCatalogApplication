import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class CandidateActions {
    public static LOAD_CANDIDATES = '[Candidates] Load Candidates';
    public static LOAD_CANDIDATES_SUCCESS = '[Candidates] Load Candidates Success';
    public static GET_CANDIDATE = '[Candidate] Get Candidate';
    public static GET_CANDIDATE_SUCCESS = '[Candidate] Get Candidate Success';
    public static RESET_BLANK_CANDIDATE = '[Candidate] Reset Blank Candidate';
    public static ADD_CANDIDATE = '[Candidate] Add Candidate';
    public static ADD_CANDIDATE_SUCCESS = '[Candidate] Add Candidate Success';
    public static UPDATE_CANDIDATE = '[Candidate] Update Candidate';
    public static UPDATE_CANDIDATE_SUCCESS = '[Candidate] Update Candidate Success';

    public loadCandidates(): Action {
        return {
            type: CandidateActions.LOAD_CANDIDATES
        };
    }
    public loadCandidatesSuccess(candidates): Action {
        return {
            type: CandidateActions.LOAD_CANDIDATES_SUCCESS,
            payload: candidates
        };
    }
    public getCandidate(_id): Action {
        return {
            type: CandidateActions.GET_CANDIDATE,
            payload: _id
        };
    }

    public getCandidateSuccess(candidate): Action {
        return {
            type: CandidateActions.GET_CANDIDATE_SUCCESS,
            payload: candidate
        };
    }
    public resetBlankCandidate(): Action {
        return {
            type: CandidateActions.RESET_BLANK_CANDIDATE
        };
    }
    public addCandidate(candidate): Action {
        return {
            type: CandidateActions.ADD_CANDIDATE,
            payload: candidate
        };
    }
    public addCandidateSuccess(candidate): Action {
        return {
            type: CandidateActions.ADD_CANDIDATE_SUCCESS,
            payload: candidate
        };
    }
    public updateCandidate(candidate): Action {
        return {
            type: CandidateActions.UPDATE_CANDIDATE,
            payload: candidate
        };
    }
    public updateCandidateSuccess(candidate): Action {
        return {
            type: CandidateActions.UPDATE_CANDIDATE_SUCCESS,
            payload: candidate
        };
    }

}
