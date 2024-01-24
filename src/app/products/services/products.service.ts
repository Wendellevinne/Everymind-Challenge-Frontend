import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly API = 'http://localhost:8080/api/v1/nunessports/';

  constructor(private httpClient: HttpClient) {}

  listAllProducts() {
    return this.httpClient.get<Product[]>(this.API + 'products')
    .pipe(
      first(),
      delay(5000),
      tap(products => console.log(products))
    );
  }
}
