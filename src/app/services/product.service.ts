import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  initialProducts: Product[] = [
    {
      id: 1,
      name: 'Eye Cream',
      price: 399,
      category: 'face',
      img: 'https://honasa-mamaearth-production.imgix.net/b/y/bye_bye_blemishes_2_2.jpg?auto=compress&fit=scale&w=400&h=400',
      description: 'Reduces Dark Circles | Nourishes Under Eye Skin',
    },

    {
      id: 2,
      name: 'Vitamin C Fash Wash',
      price: 399,
      category: 'face',
      img: 'https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_foaming_face_wash_1.jpg?auto=compress&fit=scale&w=400&h=400',
      description: 'Deeply Cleanses | Brightens Skin | Makes Skin Glow',
    },

    {
      id: 3,
      name: 'Onion Shampoo and Onion Conditioner Combo',
      price: 698,
      category: 'hair',
      img: 'https://honasa-mamaearth-production.imgix.net/o/n/onion-shampooconditoner1200x1200_8kx6kfmkik30g8fq.jpg?auto=compress&fit=scale&w=400&h=400',
      description: 'Reduces Hair Fall | Strengthens Hair |Softens Hair',
    },

    {
      id: 4,
      name: 'Onion Hair Oil',
      price: 399,
      category: 'hair',
      img: 'https://honasa-mamaearth-production.imgix.net/_/o/_onion-oil-150ml_.jpg?auto=compress&fit=scale&w=400&h=400',
      description: 'Boosts Hair Growth | Adds Strength & Shine',
    },

    {
      id: 5,
      name: 'Onion Shampoo',
      price: 349,
      category: 'hair',
      img: 'https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-shampoo-250ml-with-ingredient_2.jpg?auto=compress&fit=scale&w=400&h=400',
      description: 'Reduces Hair Fall | Strengthens Hair |Softens Hair',
    },

    {
      id: 6,
      name: 'Ubtan Face Wash with Turmeric',
      price: 249,
      category: 'face',
      img: 'https://honasa-mamaearth-production.imgix.net/u/b/ubtan-face-wash_1_1_1.jpg?auto=compress&fit=scale&w=400&h=400',
      description: 'Removes Tan | Repairs Sun Damage | Brightens Skin',
    },

    {
      id: 7,
      name: 'Face Cream',
      price: 449,
      category: 'face',
      img: 'https://honasa-mamaearth-production.imgix.net/b/y/bye_bye_blemishes_1_1.jpg?auto=compress&fit=scale&w=400&h=400',
      description: 'Reduces Dark Circles | Nourishes Under Eye Skin',
    },

    {
      id: 8,
      name: 'Body Lotion with Vitamin C',
      price: 399,
      category: 'body',
      img: 'https://honasa-mamaearth-production.imgix.net/v/i/vitamin_c_body_lotion_1_1.jpg?auto=compress&fit=scale&w=400&h=400',
      description: 'Deep Hydration | Non-Greasy | Makes Skin Glow',
    },
    {
      id: 9,
      name: 'Ubtan Body Wash with Turmeric',
      price: 299,
      category: 'body',
      img: 'https://honasa-mamaearth-production.imgix.net/u/b/ubtan-body-wash-1_c7usn1sqjckdbdg5.jpg?auto=compress&fit=scale&w=400&h=400',
      description: 'Deeply Cleanses | Unveils Glow | Gently Exfoliates',
    },
    {
      id: 10,
      name: 'Ubtan Nourishing Bathing Soap',
      price: 375,
      category: 'body',
      img: 'https://honasa-mamaearth-production.imgix.net/u/b/ubtan-soap-1.jpg?auto=compress&fit=scale&w=400&h=400',
      description: 'Removes Tan | 76% TFM for Extra Moisturization',
    },
  ];
  constructor(private http: HttpClient) {}

  getAllProducts() {
    // return this.initialProducts;
    return this.http.get(`http://localhost:9085/api/mamaearth/get/all`);
  }

  addProduct(product: Product) {
    // this.initialProducts.push({
    //   id: this.initialProducts.length + 1,
    //   name: product.name,
    //   price: product.price,
    //   category: product.category,
    //   img: product.img,
    //   description: product.description,
    // });
    return this.http.post(`http://localhost:9085/api/mamaearth/add`,product);
  }

  updateProduct(product: Product) {
    return this.http.put(`http://localhost:9085/api/mamaearth/update`,product);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:9085/api/mamaearth/delete/${id}`);
  }
}
