import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { OrderComponent } from './order/order.component';
import { AddProductComponent } from './add-product/add-product.component'

const routes: Routes = [
	{ path: "", component: ProductListComponent },
	{ path: "product/:id", component: ProductComponent },
	{ path: "login", component: LoginComponent },
	{ path: "signup", component: SignupComponent },
	{ path: "adminhome", component: AdminhomeComponent },
	{ path: "admin", component: AdminhomeComponent },
	{ path: "cart", component: ViewCartComponent },
	{ path: "order", component: OrderComponent },

	{ path: "admin", component: ProductListComponent },
	{ path: "admin/login", component: LoginComponent },
	{ path: "admin/product-list", component: ProductListComponent },
	{ path: "admin/add-product", component: AddProductComponent },
	{ path: "admin/edit-product", component: AddProductComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
