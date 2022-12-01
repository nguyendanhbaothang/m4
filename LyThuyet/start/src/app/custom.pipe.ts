import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
    public transform(value: any) :any {
    return value.toUpperCase();

    }
  }


