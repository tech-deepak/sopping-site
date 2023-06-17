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

	products: any = [{
		pname: 'asdfa',
		pDescription: 'jaksdfhakjdhfjkahj fha jkh kjasdhf kas',
		pPrice: 43,
		pImage : 'https://media.istockphoto.com/id/458105659/photo/heinz-ketchup-bottle-isolated.jpg?s=1024x1024&w=is&k=20&c=EqWRjTGNWMY9rPSXk4zVIrBch4fHP8j4z4n5yEHl4g8='
	},
	{
		pname: 'asdfa',
		pDescription: 'jaksdfhakjdhfjkahj fha jkh kjasdhf kas',
		pPrice: 43,
		pImage : 'https://media.istockphoto.com/id/458105659/photo/heinz-ketchup-bottle-isolated.jpg?s=1024x1024&w=is&k=20&c=EqWRjTGNWMY9rPSXk4zVIrBch4fHP8j4z4n5yEHl4g8='
	},
	{
		pname: 'asdfa',
		pDescription: 'jaksdfhakjdhfjkahj fha jkh kjasdhf kas',
		pPrice: 43,
		pImage : 'https://media.istockphoto.com/id/458105659/photo/heinz-ketchup-bottle-isolated.jpg?s=1024x1024&w=is&k=20&c=EqWRjTGNWMY9rPSXk4zVIrBch4fHP8j4z4n5yEHl4g8='
	}];

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
		this.route.navigate(['/product', 'asdf'])
	}

}
