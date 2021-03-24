import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
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

  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.register();
  }
}
