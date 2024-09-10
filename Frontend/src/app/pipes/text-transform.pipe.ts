import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ToUpperCase',
  standalone: true
})
export class TextTransformPipe implements PipeTransform {

  transform(value: string ): string {
    return value.toString().toUpperCase();
  }

}
