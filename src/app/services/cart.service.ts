import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartSubject = new Subject<any>();
  carts: Cart[] = [];
  constructor() {}
  addToCart(product: Product) {
    for (let cart of this.carts) {
      if (cart.productName === product.name) {
        cart.quantity++;
        return;
      }
    }
    this.carts.push({
      username: localStorage.getItem('username'),
      productName: product.name,
      quantity: 1,
      price: product.price,
    });
  }

  updateProductQuantity(productName: string, quantity: number) {
    this.carts = this.carts.map((cart) => {
      if (productName === cart.productName) {
        return {
          username: cart.username,
          productName: cart.productName,
          quantity: quantity,
          price: cart.price,
        };
      }
      return cart;
    });
  }

  showCarts() {
    return this.carts;
  }

  deteteProduct(productName: string) {
    this.carts = this.carts.filter(
      (cart) => productName !== cart.productName
    );
  }

  getCount() {
    return this.carts.length;
  }
}
