import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import products from '../../../assets/products.json';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products : Array<Product> = products;
  constructor() {
    console.log(products);
   }
}
