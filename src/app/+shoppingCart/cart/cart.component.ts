import { Component, OnInit } from '@angular/core';
import { StoreService, ShoppingCartService } from '../shared';
import { Phone, CartItem } from '../shared';

@Component({
    moduleId: 'cart',
    selector: 'pc-cart',
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.styles.scss'],
    providers: []
})
export class CartComponent implements OnInit {
    public items: any[] = [];
    public itemsSortedByName: any[] = [];
    constructor(public shoppingCartService: ShoppingCartService,
                private storeService: StoreService) {
                    console.log('CartComponent');
    }

    public ngOnInit() {
        this.items = this.shoppingCartService.getItems();
        this.itemsSortedByName = this.items.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        });
    }
    public clearCart() {
        this.items = this.itemsSortedByName = this.shoppingCartService.clearItems();
    }
    public addItem(sku, name, price, quantity) {
        console.log('addItem', sku, name, price, quantity);
        let item = new CartItem(sku, name, price, quantity);
        this.shoppingCartService.addItem(item);
    }
    public checkout(service: string) {
        this.shoppingCartService.checkout(service, true);
    }
}
