import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Phone, StoreService } from '../shared';

@Injectable()
export class PhoneResolver implements Resolve<Phone> {

  constructor(private storeService: StoreService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Phone> {
    return this.storeService.getPhone(route.params.id);
  }
}
