import { Component, Input } from '@angular/core';
import products from '../../../assets/products.json';
import { Product } from '../../interface/product';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
@Input() id? : number;
productDetails : any;
productsList : Array<Product> = products;


ngOnInit(){
  this.productDetails = this.productsList.find((product: Product) => this.id == product.id);
}
}
