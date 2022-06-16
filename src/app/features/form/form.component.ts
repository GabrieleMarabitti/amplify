import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormControlName, FormGroup} from "@angular/forms";
import {User} from "../../core/model/user";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm : FormGroup
  user : User
  @Output() userEmitter : EventEmitter<User> = new EventEmitter<User>()

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      email : new FormControl(),
      cardNumber : new FormControl(),
      cvv : new FormControl()
    })
  }

  onSubmit() {
    this.user = this.myForm.value
    this.userEmitter.emit(this.user)
  }
}
