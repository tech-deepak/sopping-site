import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallback } from '../api-callback';
import { ApiService } from '../api-other.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {


  category: any = [];
  productForm: any = [];
  file: any;
  pid: any;

  constructor(
    public apiService: ApiService,
    public routeActivated: ActivatedRoute,
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
    this.routeActivated.params.subscribe((param) => {
      console.log(param)
      this.pid = param.id;

      this.apiService.get(ApiCallback.PRODUCT_GET.replace(':id', param.id)).subscribe((res) => {
        this.productForm.get('pname').setValue(res.pname)
        this.productForm.patchValue({
          pname: res.pname,
          pDescription: res.pDescription,
          pCategory: res.pCategory,
          pQuantity: res.pQuantity,
          pPrice: res.pPrice,
          pDiscount: res.pDiscount,
          pSpecification: res.pSpecification,
        });
      })
    })

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

    this.apiService.put(ApiCallback.PRODUCT_PUT.replace(':id', this.pid), form).subscribe((res) => {
      this.router.navigate(['/admin/product-list']);
    })
  }
}
