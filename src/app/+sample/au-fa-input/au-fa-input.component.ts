import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'au-fa-input',
    templateUrl: 'au-fa-input.component.html',
    styleUrls: ['au-fa-input.component.scss', 'au-fa-input-red-theme.scss']
})
export class AuFaInputComponent implements OnInit{
    @Input()
    icon: string;

    @Input()
    placeholder = '';

    constructor() {

    }

    ngOnInit() {

    }

    get classes() {
        const cssClasses = {};
        if(this.icon) {
            cssClasses['fa-' + this.icon] = true;
        }
        return cssClasses;
    }


}
