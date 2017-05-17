import { Component,  OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-card',
  styles: [`
  `],
  templateUrl: 'card.component.html'
})
export class CardComponent implements OnInit {
  @Input() public details: any[];

  public ngOnInit() {
    console.log('Shared Card......');
  }
}
