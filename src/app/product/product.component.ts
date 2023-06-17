import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallback } from '../api-callback';
import { ApiService } from '../api.service';

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

	constructor(
		public api: ApiService,
		public routeActivated: ActivatedRoute,
	) {
		this.routeActivated.params.subscribe((param) => {
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
		this.api.post(ApiCallback.ADD_TO_CART_POST, { pid: this.pid, quantity: this.quantity }).subscribe((res) => {

		})
	}

}
