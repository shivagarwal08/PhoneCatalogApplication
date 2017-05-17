import { Component, OnInit, Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators, FormControl, FormControlName } from '@angular/forms';
import { Candidate } from '../shared/candidate.model';
import { AppStateHRM } from '../shared/reducers';
import { CandidateActions } from '../shared/candidate.actions';

@Component({
    moduleId: 'pcEditCandidate',
    selector: 'pc-edit-candidate',
    templateUrl: 'edit-candidate.component.html'
})
export class EditCandidateComponent implements OnInit {
    public candidate: Candidate;
    public addForm: FormGroup;
    constructor(private fb: FormBuilder, private store: Store<AppStateHRM>,
                private actions: CandidateActions, private router: Router) {
        console.log('EditCandidateComponent');
    }
    public ngOnInit() {
        console.log('EditCandidateComponent ngOnInit');
        this.store.subscribe(
            (store) => {
                console.log('store>>>>>>>>>>>>=======', store);
                this.candidate = Object.assign({}, store.candidate);
                this.createForm();
            });
    }
    public createForm() {
        this.addForm = this.fb.group({
            panCard: [this.candidate.panCard, Validators.required],
            email: [this.candidate.email, Validators.required],
            phone: [this.candidate.phone, Validators.required],
            firstName: [this.candidate.firstName],
            middleName: [this.candidate.middleName],
            lastName: [this.candidate.lastName]
        });
    }

    public updateCandidate() {
        console.log('update candidate', this.addForm.value);
        this.store.dispatch(this.actions.updateCandidate(this.addForm.value));

    }

    public scheduleInterview() {
        console.log('scheduleInterview', this.candidate._id);
        this.router.navigate(['./hrm/interview', '59116876f36d282be892cd2b']);
    }
}
