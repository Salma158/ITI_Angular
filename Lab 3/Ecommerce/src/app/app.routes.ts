import { Routes } from '@angular/router';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [
    {
        path:"",
        component: ProductsListComponent,
        title: "Products list"
    },
    {
        path: "product-details/:id",
        component: ProductDetailsComponent,
        title: "Product details"
    },
    {
        path: "cart",
        component: CartComponent,
        title: "Products cart"
    },
    {
        path: "user-register",
        component: RegisterComponent,
        title: "Register"
    },
    {
        path: "user-login",
        component: LoginComponent,
        title: "Login"
    },
    {
        path: "**",
        component: NotFoundComponent,
        title: "not found"
    }
];
