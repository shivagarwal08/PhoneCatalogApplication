import { Action, ActionReducer } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { PhoneStore } from '../../+shoppingCart/shared';
import { PhoneActions } from '../phoneActions';

export type PhoneListState = PhoneStore[];
const initialState: PhoneListState = [];

export default function (state = initialState, action: Action): PhoneListState {
    console.log('Action came in phone-list reducer! ' + action.type);
    switch (action.type) {
        case PhoneActions.LOAD_PHONES_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
