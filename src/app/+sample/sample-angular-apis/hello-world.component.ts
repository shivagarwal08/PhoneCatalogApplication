import { Component, ElementRef,  TemplateRef, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'hello-world',
    template: `Hello World!`
})
export class HelloWorldComponent {
    constructor() {
        console.log('HelloWorldComponent');
    }
}
