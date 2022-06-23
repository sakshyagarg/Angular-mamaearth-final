import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  count!: number;
  carts: Cart[] = [];
  cartDto!: Cart[];
  total: number = 0;
  quantity: number = 1;
  constructor(
    private cartService: CartService,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.carts = this.showCarts();
    this.getTotal();
  }

  showCarts() {
    return this.cartService.showCarts();
  }

  noItemsInCart() {
    this.router.navigate(['']);
  }

  deleteProduct(productName: string) {
    this.cartService.deteteProduct(productName);
    this.count = this.cartService.getCount();
    this.cartService.cartSubject.next(this.count);
    this.carts = this.showCarts();
    this.getTotal();
  }

  onChange(quantity: number, productName: string) {
    this.cartService.updateProductQuantity(productName, quantity);
    this.getTotal();
  }

  getTotal() {
    this.total = 0;
    for (let cart of this.carts) {
      this.total += cart.price * cart.quantity;
    }
  }

  createOrder() {
    this.orderService.createOrder().subscribe({
      next: (response: any) => {
        this.router.navigate(['/payment']);
      },
      error: (error: any) => console.log(error),
    });
  }
}
