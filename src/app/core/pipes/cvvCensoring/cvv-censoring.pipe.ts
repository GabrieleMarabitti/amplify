import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cvvCensoring'
})
export class CvvCensoringPipe implements PipeTransform {

  transform(value: number | undefined): string {
    if(value == undefined){
      return ""
    }
    let cvv : string | undefined = value?.toString()
    return "**" + cvv?.charAt(2)
  }

}
