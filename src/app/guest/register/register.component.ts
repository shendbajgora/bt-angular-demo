import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {UsersService} from '../../shared/services/users/users.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  form: FormGroup;

  subscription: Subscription = new Subscription();

  constructor(private usersService: UsersService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('Rexhep', [Validators.required]),
      surname: new FormControl('Rexhepi', [Validators.required]),
      username: new FormControl('sultan_suleiman_rexhepi', [Validators.required]),
      password: new FormControl('12345678', [Validators.required])
    });
  }

  private register(): void {
    const request = {
      body: this.form.value
    };

    this.subscription = this.usersService.create(request).subscribe(() => {
      this.snackBar.open('User registered successfully', 'Success', { duration: 2000 });
      this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.register();
  }
}
