import { Component, OnInit } from '@angular/core';
import { ApiCallback } from '../api-callback';
import { ApiService } from '../api-other.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

	category: any = [];
	productForm: any = [];
	file: any;

	constructor(
		public apiService: ApiService,
		public router: Router
	) {
		this.productForm = new FormGroup({
			pname: new FormControl('', [Validators.required]),
			pDescription: new FormControl('', [Validators.required]),
			pCategory: new FormControl('', [Validators.required]),
			pQuantity: new FormControl('', [Validators.required]),
			pPrice: new FormControl('', [Validators.required]),
			pDiscount: new FormControl(''),
			pSpecification: new FormControl('', [Validators.required]),
		});
	}

	ngOnInit(): void {
		this.apiService.get(ApiCallback.CATEGORY_GET).subscribe((res) => {
			this.category = res;
			console.log(res);
		})

	}

	onFileAdded(event: any) {
		console.log(event);
		this.file = event.target.files[0]

	}

	addOrUpdate() {
		console.log(this.productForm.value);

		console.log(this.productForm.value)
		let form = new FormData();

		form.append('pname', this.productForm.value.pname);
		form.append('pDescription', this.productForm.value.pDescription);
		form.append('pCategory', this.productForm.value.pCategory);
		form.append('pQuantity', this.productForm.value.pQuantity);
		form.append('pPrice', this.productForm.value.pPrice);
		form.append('pDiscount', this.productForm.value.pDiscount);
		form.append('pSpecification', this.productForm.value.pSpecification);
		form.append('pImage', this.file);


		this.apiService.post(ApiCallback.PRODUCT_POST, form).subscribe((res) => {
			this.router.navigate(['/admin/product-list']);
		})
	}

}
