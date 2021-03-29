import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../../shared/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Output() newUser = new EventEmitter<FormGroup>();
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl(''),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        zipcode: new FormControl(''),
      }),
      phone: new FormControl('', [Validators.required]),
      website: new FormControl(''),
      company: new FormGroup({
        name: new FormControl(''),
      }),
    });
  }

  onSubmit() {
    this.newUser.emit(this.form.value);
  }

  validateEmail() {    
    if (this.form.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.form.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

}
