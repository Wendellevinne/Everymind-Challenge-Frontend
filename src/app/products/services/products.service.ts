import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {}

  listAllProducts(): Product[]{
    return [
      { code: '00001', name: 'Tênis Adidas', description: 'Tênis Adidas', price: 350}
    ]
  }
}
