import { Component, ElementRef, AfterContentInit } from '@angular/core';

@Component({
    moduleId: 'sample-life-cycle',
    selector: 'sample-life-cycle',
    templateUrl: 'sample-life-cycle.component.html',
    styleUrls: ['sample-life-cycle.component.scss']
})
export class SampleLifeCycleComponent implements AfterContentInit {
    node: string = 'intial value';
    constructor(private elementRef: ElementRef) {
    }
    ngAfterContentInit() {
        const tmp = document.createElement('div');
        const el = this.elementRef.nativeElement.cloneNode(true);
        tmp.appendChild(el);
        console.log('tmp', tmp);
        this.node = tmp.innerHTML; 

    }
    

}
