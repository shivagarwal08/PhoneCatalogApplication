import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PhoneStore, Phone } from '../+shoppingCart/shared';

@Injectable()
export class PhoneService {
    constructor(public http: Http) {
    }
    public getPhones(): Observable<PhoneStore[]> {
        /*return this.http.get('http://localhost:4200/api/phones/phonelist').map(
            (response) => {
                console.log('getPhones', response.json());
                return PhoneStore.fromJsonList(response.json());
            });*/
        return this.http.get('/assets/json/phones/phones.json').map(
            (response) => {
                console.log('getPhones', response.json());
                return PhoneStore.fromJsonList(response.json());
            }
        );
    }

    public getPhone(id: string): Observable<Phone> {
        return this.http.get(`/assets/json/phones/${id}.json`).map(
            (response) => {
                return Phone.fromJson(response.json());
            }
        );
         /*return this.http.get('http://localhost:4200/api/phones/${id}').map(
           (response) => {
            console.log('getPhone', response.json());
            return Phone.fromJson(response.json());
        });*/
    }
}
