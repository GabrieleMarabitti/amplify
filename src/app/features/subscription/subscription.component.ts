import { Component, OnInit } from '@angular/core';
import {Subscription, Subscriptions} from "../../core/model/subscription";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  subscriptions : Subscriptions = [
    {id: 1, subName: "Base", subPrice: 9.99, subDescription: "Base plan"},
    {id: 2, subName: "Premium", subPrice: 14.99, subDescription: "Premium plan"},
    {id: 3, subName: "Diamond", subPrice: 19.99, subDescription: "Diamond plan"}
  ]

  subscription : Subscription | undefined

  isSubscribe : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  openForm($event: Subscription) {
    this.subscription = {...$event}
    this.isSubscribe = true
  }
}
