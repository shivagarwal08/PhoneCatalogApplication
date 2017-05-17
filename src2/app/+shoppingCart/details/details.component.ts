import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService, StoreService } from '../shared';
import { Phone, CartItem } from '../shared';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
    moduleId: 'details',
    selector: 'pc-details',
    templateUrl: 'details.component.html',
    styleUrls: ['details.styles.scss'],
    // providers: [ {provide: CarouselConfig, useValue: {interval: 2000, noPause: true}} ]
})
export class DetailsComponent implements OnInit {
    public phone: Phone;
    private dvaCaption: any[];
    private dvaRange: any[];
    constructor(private route: ActivatedRoute, private storeService: StoreService,
                public shoppingCartService: ShoppingCartService) {
            // this.dvaCaption = storeService.dvaCaption;
            // this.dvaRange = storeService.dvaRange;
    }
    public ngOnInit() {
        this.route.params.subscribe((params) => {
            this.loadDetailsById(params['id']);
        });
    }
    public loadDetailsById(id: string): void {
        this.phone = this.route.snapshot.data['phone'];
    }
    public addPhone() {
        let item = new CartItem(this.phone.id, this.phone.name, this.phone.price, 1);
        this.shoppingCartService.addItem(item);
    }
    public removePhone() {
        let item = new CartItem(this.phone.id, this.phone.name, this.phone.price, 1);
        this.shoppingCartService.removeItem(item);
    }
}
