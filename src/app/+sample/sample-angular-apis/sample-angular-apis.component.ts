import { Component, ElementRef,  TemplateRef, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HelloWorldComponent } from './hello-world.component';

@Component({
    moduleId: 'sample-angular-apis',
    selector: 'sample-angular-apis',
    templateUrl: 'sample-angular-apis.component.html',
    styleUrls: ['sample-angular-apis.component.scss']
})
export class SampleAngularApisComponent implements AfterViewInit {
   /* @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
    @ViewChild('tpl') tpl: TemplateRef<any>;

    ngAfterViewInit(): void {
        let view = this.tpl.createEmbeddedView(null);
        this.vc.insert(view);
    }*/
    ngAfterViewInit(): void {
    }

    /*myContext = {$implicit: 'World', localSk: 'Svet'};*/
    // HelloWorldComponent = HelloWorldComponent;


}
