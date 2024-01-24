import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './containers/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from "./components/products-list/products-list.component";


@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        AppMaterialModule,
        SharedModule,
        ReactiveFormsModule,
        ProductsListComponent
    ]
})
export class ProductsModule { }
