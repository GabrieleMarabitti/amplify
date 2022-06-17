import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import {PipesModule} from "../../core/pipes/pipes.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SummaryComponent
  ],
  exports: [
    SummaryComponent
  ],
    imports: [
        CommonModule,
        PipesModule,
        RouterModule
    ]
})
export class SummaryModule { }
