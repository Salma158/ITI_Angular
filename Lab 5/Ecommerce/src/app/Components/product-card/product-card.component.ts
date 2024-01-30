import { Component, Input } from '@angular/core';
import { Product } from '../../interface/product';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() productItem!: Product;

  constructor(private cartService : CartService){}

  addToCart(){
    this.cartService.addToCart(this.productItem)
  }
}
