import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription.component';
import {RouterModule, Routes} from "@angular/router";
import {CardModule} from "../../shared/card/card.module";
import {FormModule} from "../form/form.module";
import {PipesModule} from "../../core/pipes/pipes.module";
import {SummaryModule} from "../summary/summary.module";

const routes : Routes = [
  {path: "", component: SubscriptionComponent}
  ]

@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    FormModule,
    SummaryModule
  ]
})
export class SubscriptionModule { }
