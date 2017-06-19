import { AfterContentInit, Component, ContentChildren, QueryList, Input, TemplateRef, ViewChild } from '@angular/core';
import { AuTabComponent } from '../au-tab';

@Component({
    selector: 'au-tab-panel',
    templateUrl: 'au-tab-panel.component.html',
    styleUrls: ['au-tab-panel.component.scss']
})
export class AuTabPanelComponent implements AfterContentInit {
    @ContentChildren(AuTabComponent) tabs: QueryList<AuTabComponent>;
    
    @Input()
    headerTemplate: TemplateRef<any>;

    ngAfterContentInit() {
        const selectedTab = this.tabs.find(tab => tab.selected);
        if(!selectedTab && this.tabs.first) {
            this.tabs.first.selected = true;
        }
    }

    selectTab(tab: AuTabComponent) {
        console.log('AuTabPanelComponent: selectTab() => AuTabComponent: ', tab);
        this.tabs.forEach(tab => tab.selected = false);
        tab.selectTab = true;
    }

    get tabsContext() {
        return {
            tabs: this.tabs
        }
    }

    constructor() {    }

    ngOnInit() {    }
}
