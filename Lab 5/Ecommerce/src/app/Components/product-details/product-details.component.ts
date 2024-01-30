import { Component, Input } from '@angular/core';
import { Product } from '../../interface/product';
import { ProductsRequestsService } from '../../services/products-requests.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
@Input() id! : number;
productDetails! : Product;

constructor(private productsRequests : ProductsRequestsService, private cartService : CartService){}

ngOnInit(){
  this.productsRequests.getProductDetails(this.id).subscribe( (res : any) => this.productDetails = res)
}

addToCart(){
  this.cartService.addToCart(this.productDetails)
}

}