import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item =>
           item['filterKey'].toLowerCase().indexOf(filter) !== -1 ||
           item['filterKey'].indexOf(filter) !== -1);
  }
}
