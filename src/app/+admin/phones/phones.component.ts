import { Component, OnInit, Directive } from '@angular/core';
import { PhoneStore, CartItem, ShoppingCartService } from '../../+shoppingCart/shared';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStateAdmin } from '../phoneReducers';
import { PhoneActions } from '../phoneActions';

@Component({
    moduleId: 'pc-phones',
    selector: 'pc-phones',
    templateUrl: 'phones.component.html',
    styleUrls: ['phones.style.scss']
})
export class PhonesComponent implements OnInit {
    // public phones: Observable<any>;
    public phones: PhoneStore[] = [];
    public addingPhone = false;
    public selectedPhone;

    constructor(
        private store: Store<AppStateAdmin>,
        private phoneActions: PhoneActions,
        public shoppingCartService: ShoppingCartService) {
        console.log('PhonesComponent');
    }

    public ngOnInit() {
        console.log('PhonesComponent ngOnInit');
        this.store.subscribe(
            (store) => {
                console.log('store', store);
                this.phones = store.phones;
            }
        );
        // this.phones = this.store.select('phones');
    }

    public addPhone(phone: PhoneStore) {
        let item = new CartItem(phone.id, phone.name, phone.price, 1);
        this.shoppingCartService.addItem(item);
    }
}
