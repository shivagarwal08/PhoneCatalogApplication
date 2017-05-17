import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AppStateAdmin } from './phoneReducers';
import { PhoneActions } from '../phoneActions';
import { PhoneService } from '../phone.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class PhoneEffects {
    @Effect() public loadPhones$ = this.update$
        .ofType(PhoneActions.LOAD_PHONES)
        .switchMap(() => this.svc.getPhones())
        .map( (phones) => this.phoneActions.loadPhonesSuccess(phones));

    @Effect() public getPhone$ = this.update$
        .ofType(PhoneActions.GET_PHONE)
        .map( (action) => action.payload)
        .switchMap( (id) => this.svc.getPhone(id))
        .map( (phone) => this.phoneActions.getPhoneSuccess(phone));
    constructor(
        private update$: Actions,
        private phoneActions: PhoneActions,
        private svc: PhoneService
    ) { }
}
