import { Component, OnInit, Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneStore, CartItem, ShoppingCartService, Phone } from '../../+shoppingCart/shared';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStateAdmin } from '../phoneReducers';
import { PhoneActions } from '../phoneActions';
import { FormGroup, FormBuilder, Validators, FormControl, FormControlName } from '@angular/forms';

import { remainingPhoneData } from './remaining-phone-data';

@Component({
    moduleId: 'pcPhonesAdd',
    selector: 'pc-phones-add',
    templateUrl: 'phone-add.component.html',
    styleUrls: ['phone-add.style.scss']
})
export class PhoneAddComponent implements OnInit {
    public phone: any;
    public addPhoneForm: FormGroup;
    public availabilityCG: any;
    constructor(private fb: FormBuilder) {
        console.log('PhoneAddComponent');
    }
    public ngOnInit() {
        console.log('PhoneAddComponent ngOnInit');
        this.createForm();
    }
    public createForm() {
        this.addPhoneForm = this.fb.group({
            id: ['dell-venue', Validators.required],
            name: ['Dell Venue', Validators.required],
            price: [220, Validators.required],
            description: ['Description here', Validators.required],
            additionalFeatures: ['Additional features here', Validators.required],
            addToStore: [false, Validators.required]
        });
    }

    public addPhone() {
        console.log('add phone');
        let addPhone = Object.assign({}, remainingPhoneData, this.addPhoneForm.value);
    }
}
