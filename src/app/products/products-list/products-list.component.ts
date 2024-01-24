import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {

  @Input() products: Product[] = [];
  readonly displayedColumns = ['code', 'name', 'description', 'price', 'actions'];

  constructor(private router: Router,
    private route: ActivatedRoute){

  }

  ngOnInit(): void {
    
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
