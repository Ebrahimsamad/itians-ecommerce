import { Component } from '@angular/core';
import { ProductSearchService } from '../../service/product-search.service';
import { CardComponent } from '../../card/card.component';
import { NgFor,NgIf } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from "../../loader/loader.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CardComponent, NgFor, NgxPaginationModule, LoaderComponent,NgIf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [];
  p: number = 1;

  constructor(private productSearch: ProductSearchService){}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productSearch.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }
  onPageChange(page: number) {
    this.p = page;
  }
}
