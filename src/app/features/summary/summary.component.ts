import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../core/model/user";
import {Subscription} from "../../core/model/subscription";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() user : User | undefined
  @Input() subscription : Subscription | undefined
  @Output() voidEmitter : EventEmitter<void>  = new EventEmitter<void>()


  constructor() { }

  ngOnInit(): void {
  }

  cancelSubEmit() {
    this.voidEmitter.emit()
  }

  modifySub() {

  }
}
