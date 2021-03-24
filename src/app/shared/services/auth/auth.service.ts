import { Injectable } from '@angular/core';
import { IUser } from '../../models/user';
import { Router } from '@angular/router';
import { Modules } from '../../constants/general';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(user: IUser): Promise<string | boolean> {
    return new Promise((resolve, reject) => {

      if (user.username !== 'admin' ||
          user.password !== 'admin') {
        reject('Invalid username or password');
      } else {
        localStorage.setItem('token', JSON.stringify(user));
        resolve(true);
      }
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUser(): IUser {
    return JSON.parse(localStorage.getItem('token'));
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl(`/${Modules.guest}/login`);
  }
}
