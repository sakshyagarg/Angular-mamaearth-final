import { Product } from "./product";

export interface Cart {
    username: string | null;
    productName: string;
    quantity: number;
    price: number;
}