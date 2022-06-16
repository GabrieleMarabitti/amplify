import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumberCensoring'
})
export class CardNumberCensoringPipe implements PipeTransform {

  transform(value: number | undefined): string {
    if(value == undefined){
      return ""
    }
    let numb : string | undefined = value?.toString().substring(12)
    return "**** \xa0 **** \xa0 **** \xa0 " + numb
  }

}
