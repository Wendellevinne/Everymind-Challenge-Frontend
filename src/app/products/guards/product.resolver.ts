import { Inject, Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from "rxjs";
import { Product } from "../models/product";
import { ProductsService } from "../services/products.service";

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {

  constructor(private service: ProductsService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>{
    if(route.params && route.params['id']){
      return this.service.loadProductById(route.params['id']);
    }
    return of({id: 0, code: '', name: '', description: '', price: 0})
  }
};
