import { Component, OnInit } from '@angular/core';
import { ApiCallback } from '../api-callback';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: any;
  constructor(
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(data: any){
    console.log("1111111111111", data)
    this.apiService.post(ApiCallback.SING_UP, data.form.value).subscribe((res) => {
      
    })
  }

} 
