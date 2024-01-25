import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly API = 'api/v1/nunessports';

  constructor(private httpClient: HttpClient) {}

  listAllProducts() {
    return this.httpClient.get<Product[]>(`${this.API}/products`).pipe(
      first(),
      tap((products) => console.log(products))
    );
  }

  loadProductById(id: string) {
    return this.httpClient.get<Product>(`${this.API}/product/${id}`);
  }

  saveProduct(product: Partial<Product>) {
    if(product.id){
      return this.updateProduct(product);
    }
    return this.createProduct(product);
  }

  private createProduct(product: Partial<Product>){
    return this.httpClient.post<Product>(`${this.API}/registerProduct`, product);
  }

  private updateProduct(product: Partial<Product>){
    return this.httpClient.put<Product>(`${this.API}/updateProduct/${product.id}`, product);
  }

  removeProduct(id: number){
    return this.httpClient.delete(`${this.API}/deleteProduct/${id}`);
  }
}
