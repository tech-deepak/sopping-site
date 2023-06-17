import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallback } from '../api-callback';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	loginForm: any;
	constructor(
		public apiService: ApiService,
		public router: Router,
		public activatedRoute: ActivatedRoute
	) { }

	ngOnInit(): void {
		if (localStorage.getItem('token')) {
			if (location.pathname === '/admin/login') {
				this.router.navigate(['/admin/product-list']);
			} else {
				this.router.navigate(['/']);
			}
		}
	}

	login(data: any) {
		let endpoint = ApiCallback.LOGIN;
		if (location.pathname === '/admin/login') {
			endpoint = ApiCallback.LOGIN_ADMIN
		}
		this.apiService.post(endpoint, data.form.value).subscribe(response => {
			localStorage.setItem('token', JSON.stringify(response));
			if (location.pathname === '/admin/login') {
				localStorage.setItem('isAdmin', JSON.stringify(true));
			} else {
				localStorage.setItem('isLogged', JSON.stringify(true));
			}
			location.reload();
		}, error => {
			console.log(error);
			if (error.text) {
				localStorage.setItem('token', JSON.stringify(error.text));
				if (location.pathname === '/admin/login') {
					localStorage.setItem('isAdmin', JSON.stringify(true));
				} else {
					localStorage.setItem('isLogged', JSON.stringify(true));
				}
			}
			location.reload();
		})
	}

}
