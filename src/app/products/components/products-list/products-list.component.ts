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
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = ['code', 'name', 'description', 'price', 'actions'];

  constructor(){

  }

  ngOnInit(): void {

  }

  onAdd(){
    this.add.emit(true);
  }

  onEdit(product: Product){
    this.edit.emit(product);
  }

  onDelete(product: Product){
    this.delete.emit(product);
  }

}
