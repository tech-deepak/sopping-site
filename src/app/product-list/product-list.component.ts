import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallback } from '../api-callback';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
	showDetail: boolean = false;
	isAdmin: boolean = false;

	products: any = [];

	constructor(
		public route: Router,
		public api: ApiService
	) { }

	ngOnInit(): void {
		this.api.get(ApiCallback.ALL_PRODUCT_GET).subscribe((data) => {
			console.log(data);
			this.products = data
		})
	}

	openProduct(product: any) {
		this.route.navigate(['/product', product.name])
	}

}
