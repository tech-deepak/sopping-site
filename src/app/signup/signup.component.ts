import { Component, OnInit } from '@angular/core';
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
	errorMessage = '234234';
	clicked = false;
	constructor(
		public apiService: ApiService
	) { }

	ngOnInit(): void {
		this.signupForm = new FormGroup({
			fullName: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
			phonenumber: new FormControl('', [Validators.required, Validators.pattern(/[0-9]/)]),
			password: new FormControl('', Validators.compose([
				Validators.required,
				Validators.minLength(8)
			])),
			confirmpassword: new FormControl('', [Validators.required])
		}, {
			validators: this.passwordMatchValidator
		});
	}

	passwordMatchValidator(g: any) {
		return g.get('password').value === g.get('confirmpassword').value
			? null : { 'mismatch': true };
	}

	signup() {
		this.clicked = true;
		console.log(this.signupForm)
		// console.log("1111111111111", data)
		if(this.signupForm.status === 'VALID') {
			this.apiService.post(ApiCallback.SING_UP, this.signupForm.value).subscribe((res) => {
				localStorage.setItem('isLogged', JSON.stringify(true));
				location.reload()
			})
		}
	}
} 
