import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    { code: '00001', name: 'Tênis Adidas', description: 'Tênis Adidas', price: 350}
  ];
  displayedColumns = ['code', 'name', 'description', 'price']

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
