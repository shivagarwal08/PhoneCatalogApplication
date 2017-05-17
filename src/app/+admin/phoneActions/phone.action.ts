import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Phone, PhoneStore } from '../../shared';

@Injectable()
export class PhoneActions {
    public static LOAD_PHONES = '[Phone] Load Phones';
    public static LOAD_PHONES_SUCCESS = '[Phone] Load Phones Success';
    public static GET_PHONE = '[Phone] Get Phone';
    public static GET_PHONE_SUCCESS = '[Phone] Get Phone Success';
    public static RESET_BLANK_PHONE = '[Phone] Reset Blank Phone';

    public loadPhones(): Action {
        return {
            type: PhoneActions.LOAD_PHONES
        };
    }
    public loadPhonesSuccess(phones): Action {
        return {
            type: PhoneActions.LOAD_PHONES_SUCCESS,
            payload: phones
        };
    }
    public getPhone(id): Action {
        return {
            type: PhoneActions.GET_PHONE,
            payload: id
        };
    }

    public getPhoneSuccess(phone): Action {
        return {
            type: PhoneActions.GET_PHONE_SUCCESS,
            payload: phone
        };
    }
    public resetBlankPhone(): Action {
        return {
            type: PhoneActions.RESET_BLANK_PHONE
        };
    }
}
