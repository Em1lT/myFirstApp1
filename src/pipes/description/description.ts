import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DescriptionPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'description',
})
export class DescriptionPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    console.log(value);
    const pattern = '\\[f\\](.*?)\\[\\/f\\]';
    const re = new RegExp(pattern);
    // console.log(re.exec(value));
    try {

      return JSON.parse(re.exec(value)[1]);
    } catch (e) {
      return value;
    }
  }
}
