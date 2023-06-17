import { Component, OnInit } from '@angular/core';
import { ApiCallback } from '../api-callback';
import { ApiService } from '../api.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-view-cart',
	templateUrl: './view-cart.component.html',
	styleUrls: ['./view-cart.component.css']
})

export class ViewCartComponent implements OnInit {

	products: any = [];
	bashUrl = environment.bashUrl;

	constructor(
		public apiService: ApiService,
		public router: Router
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

	placeOrder() {
		this.apiService.post(ApiCallback.MAKE_ORDER_POST, {}).subscribe((res) => {
			this.router.navigate(['/'])
		})
	}


}
