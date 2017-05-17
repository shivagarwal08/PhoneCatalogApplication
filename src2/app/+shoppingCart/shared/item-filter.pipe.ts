import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myItemFilter' })
export class ItemFilterPipe implements PipeTransform {
    public transform(items: any[], args: string): any {
        let filter = args ? args.toLocaleLowerCase() : '' ;
        return filter ? items.filter(
            (item) => item.name.toLocaleLowerCase().indexOf(filter) !== -1) : items;
    }
}
