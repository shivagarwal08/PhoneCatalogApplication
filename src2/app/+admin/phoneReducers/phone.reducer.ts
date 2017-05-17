import { Action, ActionReducer } from '@ngrx/store';
import { Phone } from '../../+shoppingCart/shared';
import { PhoneActions } from '../phoneActions';

export type PhoneState = Phone;
const initialState: PhoneState = Phone.getBlankPhone();

export default function (state = initialState, action: Action): PhoneState {
    switch (action.type) {
        case PhoneActions.RESET_BLANK_PHONE: {
            return initialState;
        }
        case PhoneActions.GET_PHONE_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
