import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UsersService} from '../../../shared/services/users/users.service';
import {Subscription} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  @Output() newUser = new EventEmitter<FormGroup>();
  form: FormGroup;

  subscription: Subscription = new Subscription();

  constructor(private usersService: UsersService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.value;

    this.subscription = this.usersService.create({body: formValue}).subscribe(() => {
      this.newUser.emit(formValue);
      this.snackBar.open('User created successfully', 'Success', { duration: 2000 });
    });
  }

  validateEmail(): string {
    if (this.form.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.form.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

}
