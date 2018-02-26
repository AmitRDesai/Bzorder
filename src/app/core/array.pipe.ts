import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'array'
})
export class ArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const array = new Array<any>();
      const keys = Object.keys(value);
      for (let i = 0; i < keys.length; i++) {
        const temp = value[keys[i]];
        temp.id = keys[i];
        array.push(temp);
      }
      return array;
    }
    return null;
  }

}
