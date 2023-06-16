import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  showDetail: boolean = false;
  isAdmin: boolean = false;
  quantity = 1;

  product =
    {
      name: 'Tomato Ketchup',
      description: 'fjaskdlfjasdkljfklasd jflkasdjf kjasf kljsadkfj has',
      price: 1323,
      image: 'https://www.kissan.in/sk-eu/content/dam/brands/kissan/india/2329670-kissan-fresh-tomato-500.png.rendition.767.767.png'
    }
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    this.quantity++;
  }

  remove() {
    if (this.quantity === 0) {
      return;
    }
    this.quantity--;
  }

}
