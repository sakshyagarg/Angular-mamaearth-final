import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  initialProducts!: Product[];
  id: number = 0;
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    category: 'face',
    img: '',
    description: '',
  };
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAllProducts();
  }

  addProduct() {
    if (this.id === 0) {
      this.productService.addProduct(this.product).subscribe({
        next: (response: any) => {
          console.log();
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    } else {
      this.productService.updateProduct(this.product).subscribe({
        next: (response: any) => {
          console.log();
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
    console.log(this.product);
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (response: any) => {
        this.initialProducts = response;
        for (let i = 0; i < this.initialProducts.length; i++) {
          if (this.initialProducts[i].id == this.id) {
            this.product = this.initialProducts[i];
          }
        }
        console.log(this.product);
      },
      error: (error: any) => console.log(error),
    });
  }
}
