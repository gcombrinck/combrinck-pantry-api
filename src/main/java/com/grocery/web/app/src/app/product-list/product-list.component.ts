import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.findAll().subscribe(data => {
      console.log(data)
      this.products = data;
    });
  }

}
