import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UsersService} from '../../../shared/services/users/users.service';
import {Subscription} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {IUser} from '../../../shared/models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  @Output() newUser = new EventEmitter<FormGroup>();
  form: FormGroup;
  editMode = false;
  id: number | string;

  subscription: Subscription = new Subscription();

  constructor(private usersService: UsersService,
              private snackBar: MatSnackBar,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.id) {
        this.id = params.id;
        this.editMode = true;
        this.fetchUser();
      }
    });

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

  private updateForm(user: IUser): void {
    this.form.patchValue(user);
  }

  private fetchUser(): void {

    const request = { path: '/' + this.id };

    this.subscription.add(
        this.usersService.read(request).subscribe(response => {
          this.updateForm(response);
        })
    );
  }

  private createUser(): void {
    const body = this.form.value;

    this.subscription.add(this.usersService.create(body).subscribe(() => {
      this.snackBar.open('User created successfully', 'Success', { duration: 2000 });
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    }));
  }

  private updateUser(): void {
    const body = this.form.value;

    const request = {
      path: '/' + this.id,
      body
    };

    this.subscription.add(this.usersService.update(request).subscribe(() => {
      this.snackBar.open('User updated successfully', 'Success', { duration: 2000 });
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    }));
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    if (this.editMode) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

  validateEmail(): string {
    if (this.form.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.form.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  deleteUser(): void {
    const request = {
      path: '/' + this.id
    };

    this.subscription.add(this.usersService.delete(request).subscribe(() => {
      this.snackBar.open('User deleted successfully', 'Success', { duration: 2000 });
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    }));
  }
}
