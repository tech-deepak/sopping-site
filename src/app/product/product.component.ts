import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallback } from '../api-callback';
import { ApiService } from '../api.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	showDetail: boolean = false;
	isAdmin: boolean = false;
	quantity = 1;
	pid: any;
	product: any;
	bashUrl = environment.bashUrl;
	isLoggedIn = localStorage.getItem('token');

	constructor(
		public api: ApiService,
		public routeActivated: ActivatedRoute,
		public router: Router
	) {
		this.routeActivated.params.subscribe((param) => {
			this.pid = param.id
			console.log(param)
			this.getProduct(param.id)
		})
	}

	ngOnInit(): void {

	}

	getProduct(id: any) {
		this.api.get(ApiCallback.PRODUCT_GET.replace(':id', id)).subscribe((res) => {
			console.log(res)
			this.product = res;
		})
	}
	add() {
		this.quantity++;
	}

	remove() {
		if (this.quantity === 0) {
			return;
		}
		this.quantity--;
	}

	addToCart() {
		this.api.post(ApiCallback.ADD_TO_CART_POST, { pid: parseInt(this.pid), quantity: this.quantity }).subscribe((res) => {
			this.router.navigate(['/cart'])
		})
	}

}
