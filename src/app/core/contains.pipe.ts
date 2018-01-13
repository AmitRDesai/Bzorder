import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contains'
})
export class ContainsPipe implements PipeTransform {

  transform(array: Array<any>, value?: any): any {
    console.log(value, array);
    return array.indexOf(value) != -1;
  }

}
