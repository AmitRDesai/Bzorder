import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'array'
})
export class ArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      let array = new Array<any>();
      let keys = Object.keys(value);
      for (let i = 0; i < keys.length; i++) {
        let temp = value[keys[i]];
        temp.id = keys[i];
        array.push(temp);
      }
      return array;
    }
    return null;
  }

}
