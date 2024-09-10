import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: true
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, args:any): string {
    let param = args || 20;

    if (value.length > param)
      return value.substring(0, param) + '...';
    return value;
  }

}
