import { Component } from '@angular/core';

@Component({
    moduleId: 'sample-content-projection-child',
    selector: 'sample-content-projection-child',
    templateUrl: 'sample-content-projection-child.component.html',
    styleUrls: ['sample-content-projection-child.component.scss']
})
export class SampleContentProjectionChildComponent {
    title: string = 'title in child component';
    message: string = 'message in child';

    updateMessage() {
        console.log('updateMessage child');
        this.message = 'message in child updated';
    }

}
