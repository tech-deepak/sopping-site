import { Component, OnInit } from '@angular/core';
import { ApiCallback } from '../api-callback';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

	category: any = [];

	constructor(
		public apiService: ApiService
	) { }

	ngOnInit(): void {
		// this.apiService.get(ApiCallback.CATEGORY_GET).subscribe((res) => {
		// 	this.category = res;
		// 	console.log(res);
		// })
	}

	onSubmit(data: any) {
		console.log(data);
	}

	onFileAdded(event: any) {
		console.log(event);
	}

}
