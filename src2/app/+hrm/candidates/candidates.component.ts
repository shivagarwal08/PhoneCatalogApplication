import { Component, OnInit, Directive } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Candidate } from '../shared/candidate.model';
import { AppStateHRM } from '../shared/reducers';
import { CandidateActions } from '../shared/candidate.actions';

@Component({
    moduleId: 'pcCandidates',
    selector: 'pc-candidates',
    templateUrl: 'candidates.component.html'
})
export class CandidatesComponent implements OnInit {
    public candidates: Candidate[] = [];
    constructor(private store: Store<AppStateHRM>, private router: Router,
                private actions: CandidateActions, ) {
        console.log('CandidatesComponent');
    }
    public ngOnInit() {
        console.log('CandidatesComponent ngOnInit');
        this.store.subscribe(
            (store) => {
                console.log('store', store);
                this.candidates = store.candidates;
            }
        );
    }
    public candidateDetails(_id) {
        console.log('navigate to candidate edit page:', _id);
        this.router.navigate(['./hrm/candidates',  _id]);

    }
}
