import { Component, OnInit } from '@angular/core';
import { ApiCallback } from '../api-callback';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-view-cart',
	templateUrl: './view-cart.component.html',
	styleUrls: ['./view-cart.component.css']
})

export class ViewCartComponent implements OnInit {

	products: any = [{}];
	constructor(
		public apiService: ApiService
	) { }

	ngOnInit(): void {
		this.apiService.get(ApiCallback.GET_CART_GET).subscribe((response) => {
			this.products = response
		})
	}

	addRemove(index: number, type: string) {
		switch (type) {
			case 'ADD':

				break;
			case 'REMOVE':

				break;

			default:
				break;
		}
	}


}
