import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	isLogged: any = localStorage.getItem('isLogged');
	isAdmin: any = localStorage.getItem('isAdmin');
	token: any = localStorage.getItem('token');
	user: any

	constructor() { }

	ngOnInit(): void {
		console.log(this.isLogged, this.isAdmin);
		if(this.token) {
			let data: any = jwt_decode(this.token);
			console.log(data)
			this.user = data.Name
		}
	}

	signOut() {
		localStorage.clear();
		window.location.href = "/login";
		// location.reload();
	}

}
