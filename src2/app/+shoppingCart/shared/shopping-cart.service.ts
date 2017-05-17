import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CartItem } from './';
import { CheckoutParameters } from './checkout-parameter';
declare var $: any;

@Injectable()
export class ShoppingCartService {
    public checkoutParameters: any = {};
    public items: any[];
    public clearCart: any;
    constructor() {
        if (localStorage.getItem('shopping-cart') == null) {
            this.items = [];
        } else {
            this.items = JSON.parse(localStorage.getItem('shopping-cart'));
        }
        console.log('ShoppingCartService constructor');
        console.log('adding checkout parameters');
        this.addCheckoutParameters('PayPal', 'shivpaypal@abc.com', '');
        this.addCheckoutParameters('Google', '500640663394527', {
            ship_method_name_1: 'UPS Next Day Air',
            ship_method_price_1: '20.00',
            ship_method_currency_1: 'USD',
            ship_method_name_2: 'UPS Ground',
            ship_method_price_2: '15.00',
            ship_method_currency_2: 'USD'
        });
    }
    public getItems(): any[] {
        return this.items;
    }
    public clearItems(): any[] {
        this.items = [];
        localStorage.setItem('shopping-cart', JSON.stringify(this.items));
        return this.items;
    }
    public addItem(cartItem: CartItem): void {
        if (+cartItem.quantity !== 0) {
            // update quantity for existing item
            let itemPresent = false;
            for (let i = 0; i < this.items.length && !itemPresent; i++) {
                let item = this.items[i];
                if (item.sku === cartItem.sku) {
                    itemPresent = true;
                    /*if (+cartItem.quantity > 1) {
                         item.quantity = +cartItem.quantity;
                     } else {
                         item.quantity = +item.quantity + (+cartItem.quantity);
                     }*/
                    item.quantity = +item.quantity + (+cartItem.quantity);
                    if (item.quantity <= 0) {
                        this.items.splice(i, 1);
                    }
                }
            }
            // new item, add now
            if (!itemPresent) {
                this.items.push(cartItem);
            }
            localStorage.setItem('shopping-cart', JSON.stringify(this.items));
        }
    }
    public removeItem(cartItem: CartItem): void {
        console.log(this.items);
        let index = this.items.findIndex((item) => item.sku === cartItem.sku);
        console.log(index);
        if (index > -1) {
            this.items.splice(index, 1);
            localStorage.setItem('shopping-cart', JSON.stringify(this.items));
        }
        console.log(this.items);
    }
    public getTotalPrice(): number {
        let totalPrice = 0;
        this.items.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    }
    public getTotalItemsCount(sku?: string): number {
        let total = 0;
        if (sku == null) {
            this.items.forEach((item) => {
                total += item.quantity;
            });
        } else {
            if (this.items.length > 0) {
                this.items.forEach((item) => {
                    if (item.sku === sku) {
                        total = item.quantity;
                    }
                });
            }
        }
        return total;
    }

    public addCheckoutParameters(serviceName, merchantID, options) {
        // check parameters
        if (serviceName !== 'PayPal' && serviceName !== 'Google') {
            throw 'serviceName must be \'PayPal\' or \'Google\'.';
        }
        if (merchantID == null) {
            throw 'A merchantID is required in order to checkout.';
        }

        // save parameters
        this.checkoutParameters[serviceName] = new CheckoutParameters(serviceName, merchantID, options);
    }

    public checkout(serviceName, clearCart) {
        // select serviceName if we have to
        if (serviceName == null) {
            let p = this.checkoutParameters[Object.keys(this.checkoutParameters)[0]];
            serviceName = p.serviceName;
        }
        // sanity
        if (serviceName == null) {
            throw 'Use the \'addCheckoutParameters\' method to define at least one checkout service.';
        }

        // go to work
        let parms = this.checkoutParameters[serviceName];
        if (parms == null) {
            throw 'Cannot get checkout parameters for ' + serviceName + '.';
        }
        switch (parms.serviceName) {
            case 'PayPal':
                this.checkoutPayPal(parms, clearCart);
                break;
            case 'Google':
                this.checkoutGoogle(parms, clearCart);
                break;
            default:
                throw 'Unknown checkout service: ' + parms.serviceName;
        }
    }

    // check out using PayPal
    // for details see:
    // www.paypal.com/cgi-bin/webscr?cmd=p/pdn/howto_checkout-outside
    public checkoutPayPal = (parms, clearCart) => {
        // global data
        let data = {
            cmd: '_cart',
            business: parms.merchantID,
            upload: '1',
            rm: '2',
            charset: 'utf-8'
        };

        // item data
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            let ctr = i + 1;
            data['item_number_' + ctr] = item.sku;
            data['item_name_' + ctr] = item.name;
            data['quantity_' + ctr] = item.quantity;
            data['amount_' + ctr] = item.price.toFixed(2);
        }

        // build form
        let form = $('<form/></form>');
        // form.attr('action', 'https://www.paypal.com/cgi-bin/webscr');
        form.attr('action', 'https://www.sandbox.paypal.com/cgi-bin/webscr');
        form.attr('method', 'POST');
        form.attr('style', 'display:none;');
        this.addFormFields(form, data);
        this.addFormFields(form, parms.options);
        $('body').append(form);

        // submit form
        this.clearCart = clearCart == null || clearCart;
        form.submit();
        form.remove();
    }
    public checkoutGoogle = (parms, clearCart) => {
        // global data
        let data = {};
        // item data
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            let ctr = i + 1;
            data['item_name_' + ctr] = item.sku;
            data['item_description_' + ctr] = item.name;
            data['item_price_' + ctr] = item.price.toFixed(2);
            data['item_quantity_' + ctr] = item.quantity;
            data['item_merchant_id_' + ctr] = parms.merchantID;
        }

        // build form
        let form = $('<form/></form>');
        // NOTE: in production projects, use the checkout.google url below;
        // for debugging/testing, use the sandbox.google url instead.
        // form.attr("action", "https://checkout.google.com/api/checkout/v2/merchantCheckoutForm/Merchant/" + parms.merchantID);
        form.attr('action', 'https://sandbox.google.com/checkout/api/checkout/v2/checkoutForm/Merchant/' + parms.merchantID);
        form.attr('method', 'POST');
        form.attr('style', 'display:none;');
        this.addFormFields(form, data);
        this.addFormFields(form, parms.options);
        $('body').append(form);

        // submit form
        this.clearCart = clearCart == null || clearCart;
        form.submit();
        form.remove();
    }

    public addFormFields = (form, data) => {
        if (data != null) {
            $.each(data, (name, value) => {
                if (value != null) {
                    let input = $('<input></input>').attr('type', 'hidden').attr('name', name).val(value);
                    form.append(input);
                }
            });
        }
    }
}

/*
export class ShoppingCartService {
    public total$ = new Subject<number>();
    private cart: Item[] = [];
    private discount: Discount;

    public addItem(item: Item) {
        this.cart.push(item);
        this.total$.next(this.getTotalPrice());
    }
    public deleteItem(item: Item) {
        this.cart = this.cart.filter( (cartItem) => cartItem.id !== item.id);
        this.total$.next(this.getTotalPrice());
    }
    public clearCart() {
        this.cart = [];
        this.total$.next(this.getTotalPrice());
    }
    public getCart(): Item[] {
        return this.cart;
    }
    public applyDiscount(code: string) {
        this.discount = discounts.filter( (discount) => discount.code === code)[0];
    }

    public getTotalPrice() {
        let totalPrice = this.cart.reduce((sum, cartItem) => {
            return sum += cartItem.price, sum;
        }, 0);
        if (this.discount) {
            totalPrice -= totalPrice = this.discount.amount;
        }
        return totalPrice;
    }
}
*/
