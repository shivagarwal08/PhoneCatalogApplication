import { Component, ViewChild, ContentChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { SampleContentProjectionChildComponent } from '../sample-content-projection-child';

@Component({
    moduleId: 'sample-content-projection',
    selector: 'sample-content-projection',
    templateUrl: 'sample-content-projection.component.html',
    styleUrls: ['sample-content-projection.component.scss']
})
export class SampleContentProjectionComponent implements AfterContentInit, AfterViewInit {
    @ViewChild(SampleContentProjectionChildComponent) childComponent: SampleContentProjectionChildComponent;
    @ContentChild('section') contentChild;

    title: string = 'title in parent component';
    message: string = 'message in parent';

    updateMessage() {
        console.log('updateMessage Parent');
        this.childComponent.updateMessage();
        this.message = 'message in parent updated';
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit');
        console.log(this.contentChild);
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        console.log(this.contentChild);
    }

    tabNumber: number = -1;
    tabs = [{ title: 'Tab 1', content: 'Tab content 1', tabIndex: 1 },
            { title: 'Tab 2', content: 'Tab content 2', tabIndex: 2 },
            { title: 'Tab 3', content: 'Tab content 3', tabIndex: 3 }
            ];

    setTab(num: number) {
        this.tabNumber = num;
    }

    isSelected(num: number) {
        return this.tabNumber === num;
    }

    shouldDisplay:boolean =  true;

}
