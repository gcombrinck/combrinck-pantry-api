import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs/Observable';
import {map} from "rxjs/operators";

@Injectable()
export class ProductService {

  private readonly productsUrl: string;

  constructor(private http: HttpClient) {
    this.productsUrl = 'http://localhost:8080/products';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(map(result=>result['_embedded'].productList))
  }

  public save(product: Product) {
    return this.http.post<Product>(this.productsUrl, product);
  }
}
