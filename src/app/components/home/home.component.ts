import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  initialProducts!: Product[];
  products: Product[] = [];
  currentRoute: string = '';
  title: string = '';
  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (response: any) => {
        console.log(response);
        this.initialProducts = response;
        this.currentRoute = this.router.url.replace('/', '');
    if (this.currentRoute === '') {
      this.title = 'Bestseller';
      this.products = this.initialProducts.slice(0, 6);
    } else if (
      this.currentRoute === 'hair' ||
      this.currentRoute === 'face' ||
      this.currentRoute === 'body'
    ) {
      this.title =
        this.currentRoute[0].toUpperCase() +
        this.currentRoute.substring(1).toLowerCase();
      this.products = this.initialProducts.filter(
        (product) => product.category === this.currentRoute
      );
    }
      },
      error: (error: any) => console.log(error),
    });
  }
}
