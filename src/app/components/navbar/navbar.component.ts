import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  count: number = 0;
  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {
    this.cartService.cartSubject.subscribe((data) => (this.count = data));
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.count = this.cartService.getCount();
    this.isAdmin = this.authService.isAdmin();
  }

  logout() {
    this.authService.logout();
  }
}
