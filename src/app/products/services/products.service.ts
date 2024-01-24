import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly API = 'api/v1/nunessports/';

  constructor(private httpClient: HttpClient) {}

  listAllProducts() {
    return this.httpClient.get<Product[]>(this.API + 'products').pipe(
      first(),
      delay(5000),
      tap((products) => console.log(products))
    );
  }

  saveProduct(product: Partial<Product>){
    return this.httpClient.post<Product>(this.API + 'registerProduct', product)
  }
}
