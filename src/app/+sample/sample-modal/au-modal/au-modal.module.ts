// Angular Imports
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This Module's Components
import { AuModalComponent } from './au-modal.component';
import { AuModalOpenOnClickDirective } from './au-modal-open-on-click.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AuModalComponent, AuModalOpenOnClickDirective
    ],
    exports: [
        AuModalComponent, AuModalOpenOnClickDirective
    ]
})
export class AuModalModule {

}
