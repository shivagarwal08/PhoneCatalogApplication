import { Component, ContentChild, ContentChildren, QueryList, OnInit, AfterContentInit } from '@angular/core';
import { SampleHelloComponent } from './sample-hello.component';

@Component({
    selector: 'sample-hello-list',
    template: `
        <p>Projected Content:</p>
        <div>
            <ng-content></ng-content>
        </div>
        <button (click)="onClickAll()"> Randomize Hello Colors</button>
        <button (click)="onClickLast()"> Randomize Last Hello Color</button>
    `
})
export class SampleHelloListComponent implements OnInit, AfterContentInit {
    @ContentChildren(SampleHelloComponent) helloChildren: QueryList<SampleHelloComponent>;
    @ContentChild('last') lastChild: SampleHelloComponent;

    constructor() {
        console.log('constructor() SampleHelloListComponent');
    }

    ngOnInit() {
        console.log('ngOnInit SampleHelloListComponent');        
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit SampleHelloListComponent');
        this.onClickAll();

    }

    onClickAll() {
        this.helloChildren.forEach(child => child.randomizeColor());
    }
    onClickLast() {
        this.lastChild.randomizeColor();
    }
}