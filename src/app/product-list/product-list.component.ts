import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallback } from '../api-callback';
import { ApiService } from '../api.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
	showDetail: boolean = false;
	isAdmin = localStorage.getItem('isAdmin');
	bashUrl = environment.bashUrl;
	categories: any = [];
	products: any = [];

	constructor(
		public route: Router,
		public api: ApiService
	) { }

	ngOnInit(): void {
		this.api.get(ApiCallback.ALL_PRODUCT_GET).subscribe((data) => {
			this.products = data
		});

		this.api.get(ApiCallback.CATEGORY_GET).subscribe((data) => {
			this.categories = data
		});

	}

	openProduct(product: any) {
		this.route.navigate(['/product', product.pid])
	}

	onCategoryChange(event: any) {
		this.api.get(ApiCallback.PRODUCT_BY_CATEGORY_GET.replace(':catId', event.target.value)).subscribe((data) => {
			this.products = data
		});
	}

	searchProduct(event: any) {
		this.api.get(ApiCallback.PRODUCT_SEARCH_GET.replace(':query', event.target.value)).subscribe((data) => {
			this.products = data
		});
	}

	delete(pid: any) {
		this.api.delete(ApiCallback.PRODUCT_DELETE.replace(':id', pid)).subscribe((data) => {
			location.reload();
		})
	}

}
