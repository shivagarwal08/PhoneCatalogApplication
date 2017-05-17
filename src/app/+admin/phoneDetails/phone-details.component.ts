import { Component, OnInit, Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneStore, CartItem, ShoppingCartService } from '../../+shoppingCart/shared';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStateAdmin } from '../phoneReducers';
import { PhoneActions } from '../phoneActions';

@Component({
    moduleId: 'pcPhonesDetails',
    selector: 'pc-phones-details',
    templateUrl: 'phone-details.component.html',
    styleUrls: ['phone-details.style.scss']
})
export class PhoneDetailsComponent implements OnInit {
    public phone: any;
    constructor(private route: ActivatedRoute) {
        console.log('PhoneDetailsComponent');
    }
    public ngOnInit() {
        console.log('PhoneDetailsComponent ngOnInit');
        this.phone = this.route.snapshot.data['phone'];
    }
}
