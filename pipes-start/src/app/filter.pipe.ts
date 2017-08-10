import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value === 0 || filterString === '') {
      console.log(value);
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString ) {
        console.log(item[propName]);
        console.log(item);
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
