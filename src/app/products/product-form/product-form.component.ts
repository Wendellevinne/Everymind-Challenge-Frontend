import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { ProductsService } from '../services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [AppMaterialModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;
  showPrefix: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private service: ProductsService,
    private _snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      code: [null],
      name: [null],
      description: [null],
      price: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.saveProduct(this.form.value)
    .subscribe(data => console.log(data), error => this.onError())
  }

  onCancel() {}

  onError() {
    this._snackBar.open('Erro ao salvar curso', '', { duration: 5000 })
  }
}
