import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: '',
  };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.user).subscribe({
      next: (response: any) => {
        console.log(response);
        localStorage.setItem('username',response.username);
        localStorage.setItem('isAdmin',response.isAdmin);
        // this.authService.setLogin(true);
        this.router.navigate(['']);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
