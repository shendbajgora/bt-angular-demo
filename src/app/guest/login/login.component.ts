import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth/auth.service';
import { IUser } from '../../shared/models/user';
import { Router } from '@angular/router';
import { Modules } from '../../shared/constants/general';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      username: new FormControl('admin', [Validators.required]),
      password: new FormControl('admin', [Validators.required])
    });
  }

  private login(): void {
    this.authService.login(this.form.value as IUser)
      .then((response: boolean) => {
        if (response) {
          this.router.navigateByUrl(`${Modules.account}`);
        }
      })
      .catch((errorMessage: string) => {
        this.snackBar.open(errorMessage, 'Error', { duration: 2000 });
      });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.login();
  }
}
