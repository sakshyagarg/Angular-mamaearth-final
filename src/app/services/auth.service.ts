import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // isLoginSubject = new Subject<boolean>();
  constructor(private router: Router, private http: HttpClient) {}

  login(user: any) {
    return this.http.post(`http://localhost:9085/api/auth/login`,user)
    // localStorage.setItem('username', user.email);
    // this.router.navigate(['']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('username') != null;
  }

  isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true'; 
  }

  logout() {
    // localStorage.removeItem('username');
    // localStorage.removeItem('isAdmin');
    // this.setLogin(false);
    this.router.navigate(['/logout']);
  }

  register(userForm: any) {
    return this.http.post(`http://localhost:9085/api/auth/register`,userForm);
  }

  // setLogin(b: boolean) {
  //   this.isLoginSubject.next(b);
  // }
}
