import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { StoreService, ShoppingCartService } from './shared';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  templateUrl: 'app.component.html',
  providers: []
})
export class AppComponent implements OnInit {
  public angularclassLogo = '';
  public name: string = 'Phone Catalog';
  public url = '';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
