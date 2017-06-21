import { Directive, TemplateRef, ViewContainerRef, Input, ElementRef } from '@angular/core';

@Directive({
    selector: '[auModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) {
    }
    @Input()
    set auModalOpenOnClick(els){
        console.log('auModalOpenOnClick Input set');
        let elements: HTMLBaseElement[];
        if(els.length) {
            elements = els;
        }else {
            elements = [els];
        }
        console.log('elements:', elements);
        elements.forEach(el => {
            el.addEventListener('click', () => {
                this.viewContainer.clear();
                this.viewContainer.createEmbeddedView(this.templateRef);
            });
        })       
    }
}
