import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {path: "", component: InfoComponent}
]

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InfoModule { }
