import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneStore } from '../../+shoppingCart/shared';

@Component({
  selector: 'shared-phone-list',
  styles: [`
  `],
  templateUrl: 'phone-list.component.html'
})
export class PhoneListComponent implements OnInit, OnChanges {
  public flag: boolean = true;
  @Input() public phones: PhoneStore[];
  // public ngOnChanges(...args: any[]){
  public ngOnChanges(changes: SimpleChanges) {
    console.log('PhoneListComponent ngOnChanges');
    console.log('changes', changes);
  }
  public ngOnInit() {
    console.log('Shared PhoneList......');
  }
}
