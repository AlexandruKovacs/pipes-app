import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFLyPipe implements PipeTransform {

  transform(canFly: boolean): string {
    return (canFly) ? 'Vuela' : 'No vuela';
  }

}
