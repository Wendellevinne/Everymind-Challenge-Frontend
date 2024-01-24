import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [AppMaterialModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit{

  form: FormGroup;

  constructor( private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      code: [null],
      name: [null],
      description: [null],
      price: [null]
    })
  }

  ngOnInit(): void {

  }

  onSubmit(){

  }

  onCancel(){
    
  }

}
