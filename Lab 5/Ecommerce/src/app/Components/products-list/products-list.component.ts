import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../interface/product';
import { ProductsRequestsService } from '../../services/products-requests.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products! : Array<Product>;
  constructor(private productsRequests : ProductsRequestsService) {}

  ngOnInit(){
    this.productsRequests.getProductsList().subscribe((res : any) => this.products = res.products);
  }
}
