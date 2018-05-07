import { Pipe, PipeTransform } from '@angular/core';
import { Company } from '../company';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Company[], searchText: string): any[] {
    if (!items) {
        return [];
    }
    if (!searchText) {
        return items;
    }
searchText = searchText.toLowerCase();
return items.filter( it => {
          return it.Ticker.toLowerCase().includes(searchText);
    });
   }
}
