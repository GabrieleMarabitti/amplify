import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import {PipesModule} from "../../core/pipes/pipes.module";



@NgModule({
  declarations: [
    SummaryComponent
  ],
  exports: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class SummaryModule { }
