import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";
import {User} from "../../core/model/user";
import {Subscription} from "../../core/model/subscription";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm : FormGroup
  user : User
  @Input() subscription : Subscription | undefined
  @Output() userEmitter : EventEmitter<User> = new EventEmitter<User>()
  @Output() cancelVoidEmit : EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      email : new FormControl(),
      cardNumber : new FormControl(),
      cvv : new FormControl(),
      expiration : new FormControl()
    })
  }

  onSubmit() {
    this.user = this.myForm.value
    this.userEmitter.emit(this.user)
    this.myForm.reset()
  }

  cancelSubEmit() {
    this.cancelVoidEmit.emit()
  }

    modifySub() {
        this.myForm.patchValue(this.user)
    }
}
