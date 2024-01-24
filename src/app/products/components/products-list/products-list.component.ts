import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {

  @Input() products: Product[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['code', 'name', 'description', 'price', 'actions'];

  constructor(){

  }

  ngOnInit(): void {

  }

  onAdd(){
    this.add.emit(true);
  }

}
