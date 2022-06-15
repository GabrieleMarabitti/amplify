import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription, Subscriptions} from "../../core/model/subscription";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() subscriptions : Subscriptions =  []
  @Output() subEmitter : EventEmitter<Subscription> = new EventEmitter<Subscription>()

  constructor() { }

  ngOnInit(): void {
  }


  sendSub(sub: Subscription) {
    this.subEmitter.emit(sub)
  }
}
