import { Component, OnInit, Directive } from '@angular/core';
import { StoreService, PhoneStore, CartItem, ShoppingCartService } from '../shared';

@Component({
    moduleId: 'pc-store',
    selector: 'pc-store',
    templateUrl: 'store.component.html',
    styleUrls: ['store.style.scss']
})
export class StoreComponent implements OnInit {
    public search: string = '';
    public phones: PhoneStore[] = [];
    constructor(private storeService: StoreService, public shoppingCartService: ShoppingCartService) {
        console.log('StoreComponent');
    }

    public ngOnInit() {
        this.storeService.getPhones().subscribe(
            (response) => {
                this.phones = response;
            }
        );
    }

    public addPhone(phone: PhoneStore) {
        let item = new CartItem(phone.id, phone.name, phone.price, 1);
        this.shoppingCartService.addItem(item);
    }
}
