import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routes } from './hrm.routes';

import { HRMComponent } from './hrm.component';
import { CandidatesComponent } from './candidates';
import { AddCandidateComponent } from './addCandidate';
import { EditCandidateComponent } from './editCandidate';
import { ScheduleInterviewComponent } from './scheduleInterview';
import candidateReducers from './shared/reducers';
import { CandidateResolver } from './shared/candidate.resolver';
import { CandidateService } from './shared/candidate.service';
import { CandidateActions } from './shared/candidate.actions';
import { CandidateEffects } from './shared/candidate.effects';
console.log('`HRM` bundle loaded asynchronously');

@NgModule({
  declarations: [
    CandidatesComponent,
    AddCandidateComponent,
    EditCandidateComponent,
    ScheduleInterviewComponent,
    HRMComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.provideStore(candidateReducers),
    EffectsModule.run(CandidateEffects)
  ],
  providers: [ CandidateActions, CandidateService, CandidateResolver ]
})
export class HRMModule {
  public static routes = routes;
}
