import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallback } from '../api-callback';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	constructor(
		public apiService: ApiService,
		public activatedRoute: ActivatedRoute
	) { }

	ngOnInit(): void {
	}

	login(data: any) {
		let endpoint = ApiCallback.LOGIN;
		if(location.pathname === '/admin/login') {
			endpoint = ApiCallback.LOGIN_ADMIN
		}
		this.apiService.post(endpoint, data).subscribe(response => {
			
		})
	}

}
