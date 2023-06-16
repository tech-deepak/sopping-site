import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: any;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    console.log("1111111111111", data)
  }

} 
