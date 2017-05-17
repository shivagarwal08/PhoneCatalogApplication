import { Component, OnInit, Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators, FormControl, FormControlName } from '@angular/forms';
import { Candidate } from '../shared/candidate.model';
import { AppStateHRM } from '../shared/reducers';
import { CandidateActions } from '../shared/candidate.actions';

@Component({
    moduleId: 'pcAddCandidate',
    selector: 'pc-add-candidate',
    templateUrl: 'add-candidate.component.html'
})
export class AddCandidateComponent implements OnInit {
    public addForm: FormGroup;
    constructor(private fb: FormBuilder, private actions: CandidateActions,
                private store: Store<AppStateHRM>, private router: Router) {
        console.log('AddCandidateComponent');
    }
    public ngOnInit() {
        console.log('AddCandidateComponent ngOnInit');
        this.createForm();
    }
    public createForm() {
        this.addForm = this.fb.group({
            panCard: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required]
        });
    }

    public addCandidate() {
        console.log('add candidate', this.addForm.value);
        let newCandidate = this.addForm.value;
        this.store.dispatch(this.actions.addCandidate(newCandidate));
        this.router.navigate(['']);
    }
}
