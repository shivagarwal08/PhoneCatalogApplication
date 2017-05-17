import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PhoneStore, Phone } from '../shared';

/*export const products = [
    new Product('PC1', 'Iphone 6S', 'Apple', 'New phone from Apple', 10, 'iphone6s.jpeg'),
    new Product('PC2', 'Iphone 6', 'Apple', 'Model 2014', 20, 'iphone6.jpeg'),
    new Product('PC3', 'Some element', 'LG', 'Some very awesome description', 25, 'lgv10.jpeg'),
    new Product('PC4', 'Galaxy S7', 'Samsung', 'New phone from Samsung on Android', 30, 'samsungs6.jpeg')
];
*/
/*export const dvaCaption = [
    'Negligible',
    'Low',
    'Average',
    'Good',
    'Great'
];
export const dvaRange = [
    'below 5%',
    'between 5 and 10%',
    'between 10 and 20%',
    'between 20 and 40%',
    'above 40%'
];*/

@Injectable()
export class StoreService {
    // public dvaCaption: any[];
    // public dvaRange: any[];
    constructor(public http: Http) {
        //  this.dvaCaption = dvaCaption;
        //  this.dvaRange = dvaRange;
    }
    public getPhone(id: string): Observable<Phone> {
        return this.http.get(`/assets/json/phones/${id}.json`).map(
            (response) => {
                return Phone.fromJson(response.json());
            }
        );
        /*return this.http.get(`http://localhost:4200/api/phones/${id}`).map(
           (response) => {
            console.log('getPhone', response.json());
            return Phone.fromJson(response.json());
        });*/
    }
    public getPhones(): Observable<PhoneStore[]> {
        return this.http.get('/assets/json/phones/phones.json').map(
            (response) => {
                console.log('getPhones');
                return PhoneStore.fromJsonList(response.json());
            }
        );
       /* return this.http.get('http://localhost:4200/api/phones/phonelist').map(
           (response) => {
            console.log('getPhones', response.json());
            return PhoneStore.fromJsonList(response.json());
        });*/
    }
}
