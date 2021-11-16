import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  items: Product[] = [];

    addToCart(product: Product) {
      this.items.push(product);
      console.log(this.items);
    }
  
    getItems() {
      return this.items;
    }
  
  public getItemsNumber(): number  {
    return this.items.length;
  }
  
    clearCart() {
      this.items = [];
      return this.items;
    }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}

