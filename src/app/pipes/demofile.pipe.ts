import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demofile'
})
export class DemofilePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.split('/')[1];
  }

}
