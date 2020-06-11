import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
    this.product = new Product();
  }

  onSubmit() {
    this.productService.save(this.product).subscribe(result => this.gotoProductList());
  }

  gotoProductList() {
    this.router.navigate(['/products']);
  }
}
