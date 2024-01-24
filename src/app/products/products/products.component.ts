import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['code', 'name', 'description', 'price'];

  constructor(private productsService: ProductsService) {

   }

  ngOnInit(): void {
    this.products = this.productsService.listAllProducts();
  }

}
