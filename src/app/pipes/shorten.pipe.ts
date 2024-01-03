import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(text: string, nbCharsToRemove = 3): string {

    return text.substring(0,nbCharsToRemove)+'...';
  }

}
