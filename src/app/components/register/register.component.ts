import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  userForm = {
    username: '',
    password: '',
    confirmPassword: '',
  };
  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  validate() {
    if (this.userForm.password === this.userForm.confirmPassword) {
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Password and Confirm Password did not match';
    }
  }

  isValid() {
    return this.errorMessage === '';
  }

  register() {
    this.authService.register(this.userForm).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
