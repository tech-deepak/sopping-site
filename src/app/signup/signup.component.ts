import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallback } from '../api-callback';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	signupForm: any;
	clicked = false;

	constructor(
		public apiService: ApiService,
		public router: Router
	) { }

	ngOnInit(): void {
		this.signupForm = new FormGroup({
			uname: new FormControl('', [Validators.required]),
			uemail: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
			umobile: new FormControl('', [Validators.required, Validators.pattern(/[0-9]/)]),
			upassword: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(8)
			])),
			confirmpassword: new FormControl('', [Validators.required])
		}, {
			validators: this.passwordMatchValidator
		});
	}

	passwordMatchValidator(g: any) {
		return g.get('upassword').value === g.get('confirmpassword').value
			? null : { 'mismatch': true };
	}

	signup() {
		this.clicked = true;
		console.log(this.signupForm)
		if(this.signupForm.status === 'VALID') {
			this.apiService.post(ApiCallback.SING_UP, this.signupForm.value).subscribe((res) => {
				localStorage.setItem('isLogged', JSON.stringify(true));
				this.router.navigate(['login'])
			})
		}
	}
} 
