import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highligth'
})
export class HighligthPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    args = args[0];
    if (!args || args === '') { return value; }
    return value.replace(new RegExp(args, 'gi'), `<b>${args}</b>`);
  }

}
