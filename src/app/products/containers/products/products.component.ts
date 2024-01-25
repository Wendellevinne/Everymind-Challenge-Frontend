import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> | null = null;

  constructor(
    public dialog: MatDialog,
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.products$ = this.productsService.listAllProducts().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar os produtos');
        return of([]);
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(product: Product) {
    this.router.navigate(['edit', product.id], { relativeTo: this.route });
  }

  onDelete(product: Product) {
    this.productsService.removeProduct(product.id).subscribe(
      () => {
        this.refresh();
        this._snackBar.open('Produto removido com sucesso', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      },
      () => this.onError('Erro ao tentar remover curso')
    );
  }
}
