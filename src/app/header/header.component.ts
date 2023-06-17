import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	isLogged: any = localStorage.getItem('isLogged');
	isAdmin: any = localStorage.getItem('isAdmin');

	constructor() { }

	ngOnInit(): void {
		console.log(this.isLogged, this.isAdmin);
	}

	signOut() {
		localStorage.clear();
		location.reload();
	}

}
