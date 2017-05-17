import { Component, OnInit, Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators, FormControl, FormControlName } from '@angular/forms';
import { Candidate } from '../shared/candidate.model';
import { AppStateHRM } from '../shared/reducers';
import { CandidateActions } from '../shared/candidate.actions';
import  { CandidateService } from '../shared/candidate.service';

@Component({
    moduleId: 'pcEditCandidate',
    selector: 'pc-schedule-interview',
    templateUrl: 'schedule-interview.component.html'
})
export class ScheduleInterviewComponent implements OnInit{
    public details: any = {};
    constructor(private svc: CandidateService) {
        console.log('ScheduleInterviewComponent');
    }

    public ngOnInit() {
        this.details.candidateId = '59116876f36d282be892cd2b';
        this.details.candidateEmail = 'candidate1@gmail.com';
        this.details.profileType = 'PR101';
        this.details.interviewerId = '59116876f36d282be892cd2w';
        this.details.interviewerEmail = 'interviewer1@gmail.com';

    }

    public scheduleInterview(){
        this.svc.schedule();
    }

   
}
