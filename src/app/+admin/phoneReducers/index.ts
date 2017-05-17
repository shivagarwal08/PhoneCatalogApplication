import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import phoneListReducer, * as fromPhoneList from './phone-list.reducer';
import phoneReducer, * as fromPhone from './phone.reducer';

export interface AppStateAdmin {
    phones: fromPhoneList.PhoneListState;
    phone: fromPhone.PhoneState;
};

export default compose(combineReducers)({
    phones: phoneListReducer,
    phone: phoneReducer
});
