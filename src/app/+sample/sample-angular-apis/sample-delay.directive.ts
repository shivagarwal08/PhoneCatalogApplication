import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sampleDelay]'
})
export class SampleDelayDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  
  @Input()set sampleDelay(time: number) {
    setTimeout(
      () => {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      },
      time);    
  }
}