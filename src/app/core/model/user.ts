import {Subscription} from "./subscription";

export interface User {
    firstName : string
    lastName : string
    email : string
    cardNumber : string
    cvv : number
    subscription? : Subscription
}