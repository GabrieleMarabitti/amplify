import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardNumberCensoringPipe } from './cardNumberCensoring/card-number-censoring.pipe';
import { CvvCensoringPipe } from './cvvCensoring/cvv-censoring.pipe';



@NgModule({
  declarations: [
    CardNumberCensoringPipe,
    CvvCensoringPipe
  ],
  exports: [
    CvvCensoringPipe,
    CardNumberCensoringPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
