import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SummaryModule} from "../summary/summary.module";



@NgModule({
    declarations: [
        FormComponent
    ],
    exports: [
        FormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SummaryModule
    ]
})
export class FormModule { }
