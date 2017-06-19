import { Component, Input } from '@angular/core';

@Component({
    moduleId: 'au-modal',
    selector: 'au-modal',
    templateUrl: 'au-modal.component.html',
    styleUrls: ['au-modal.component.scss']
})
export class AuModalComponent {
    @Input() body;

}
