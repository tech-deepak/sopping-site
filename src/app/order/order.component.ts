import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ApiCallback } from '../api-callback';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

	products: any = [];
	constructor(
		public apiService: ApiService
	) { }

	ngOnInit(): void {
		this.apiService.get(ApiCallback.ORDER_GET).subscribe((res) => {
			console.log(res);
			this.products = res
		})
	}
}
