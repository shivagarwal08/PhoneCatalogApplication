import { HRMComponent } from './hrm.component';
import { AddCandidateComponent } from './addCandidate';
import { EditCandidateComponent } from './editCandidate';
import { ScheduleInterviewComponent } from './scheduleInterview';
import { CandidatesComponent } from './candidates';
import { CandidateResolver } from './shared/candidate.resolver';

export const routes = [
  {
    path: '', component: HRMComponent,
    children: [
      { path: '', component: CandidatesComponent },
      { path: 'add', component: AddCandidateComponent },
      { path: 'candidates/:_id', component: EditCandidateComponent,
       resolve: {CandidateResolver} },
       { path: 'interview/:_id', component: ScheduleInterviewComponent}
    ]
  }
];
