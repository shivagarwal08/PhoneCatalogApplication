import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Candidate } from './candidate.model';

@Injectable()
export class CandidateService {
    constructor(public http: Http) {
    }
    public getCandidates(): Observable<Candidate[]> {
        return this.http.get('http://localhost:4200/api/hrm/candidates').map(
            (response) => {
                console.log('getCandidates service:', response.json());
                return Candidate.fromJsonList(response.json());
        });
    }

    public getCandidate(_id: string): Observable<Candidate> {
         return this.http.get(`http://localhost:4200/api/hrm/candidates/${_id}`).map(
           (response) => {
            console.log('getCandidate service:', response.json());
            return Candidate.fromJson(response.json());
        });
    }

    public addCandidate(candidate: Candidate): Observable<Candidate> {
         return this.http.post(`http://localhost:4200/api/hrm/candidates`, candidate).map(
           (response) => {
            console.log('addCandidate', response.json());
            return Candidate.fromJson(response.json());
        });
    }

    public updateCandidate(candidate: Candidate): Observable<Candidate> {
         return this.http.put(`http://localhost:4200/api/hrm/candidates/${candidate.panCard}`, candidate).map(
           (response) => {
            console.log('addCandidate', response.json());
            return Candidate.fromJson(response.json());
        });
    }

    public schedule(){
        console.log('service'); 
         return this.http.get(`http://localhost:4200/api/hrm/candidates/schedule`).map(
           (response) => {
            console.log('getCandidate service:', response.json());
            return Candidate.fromJson(response.json());
        }).subscribe(res =>{
            console.log(res);
        });

    }
}
