import {Subscription} from "./subscription";

export interface User {
    firstName : string
    lastName : string
    email : string
    cardNumber : number
    cvv : number
    expiration : Date
    subscription? : Subscription
}