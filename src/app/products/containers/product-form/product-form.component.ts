import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [AppMaterialModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  form = this.formBuilder.group({
    id: [0],
    code: [''],
    name: [''],
    description: [''],
    price: [0],
  });
  showPrefix: boolean = false;

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: ProductsService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const product: Product = this.route.snapshot.data['product'];
    this.form.setValue({
      id: product.id,
      code: product.code,
      name: product.name,
      description: product.description,
      price: product.price
    })
  }

  onSubmit() {
    this.service.saveProduct(this.form.value)
    .subscribe(data => this.onSucess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSucess(){
    this._snackBar.open('Produto salvo com sucesso', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar produto', '', { duration: 5000 });
  }
}
