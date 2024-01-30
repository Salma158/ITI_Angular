import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Array<{ product: Product, quantity: number }> = [];
  private cartCount = new BehaviorSubject<number>(0);

  constructor() {}

  addToCart(product: Product) {
    const existingCartItem = this.items.find(item => item.product.id === product.id);

    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }

    this.updateCartCount();
  }

  removeFromCart(productId: number) {
    const indexToRemove = this.items.findIndex(item => item.product.id === productId);

    if (indexToRemove !== -1) {
       this.items.splice(indexToRemove, 1);
    } else {
        console.error(`Item with ID ${productId} not found in the cart.`);
    }

    this.updateCartCount();
  }

  increaseQuantity(productId: number) {
    const index = this.items.findIndex(item => item.product.id === productId);

    if (index !== -1) {
      this.items[index].quantity++;
      this.updateCartCount();
    }
  }

  decreaseQuantity(productId: number) {
    const index = this.items.findIndex(item => item.product.id === productId);

    if (index !== -1 && this.items[index].quantity > 1) {
      this.items[index].quantity--;
      this.updateCartCount();
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.updateCartCount();
    return this.items;
  }

  private updateCartCount() {
    const count = this.items.reduce((total, item) => total + item.quantity, 0);
    this.cartCount.next(count);
  }

  getCartCount() {
    return this.cartCount.asObservable();
  }

}
