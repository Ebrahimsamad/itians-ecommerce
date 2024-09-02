import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CategoryNavigationComponent } from '../category-navigation/category-navigation.component';
import { ProductGridComponent } from '../product-grid/product-grid.component';

@Component({
  selector: 'app-trending-products',
  standalone: true,
  imports: [CategoryNavigationComponent, ProductGridComponent],
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.css']
})
export class TrendingProductsComponent {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {

    this.fetchProducts('beauty');
  }

  fetchProducts(categoryId: string) {
     this.productService.getProductsByCategory(categoryId).subscribe((data: any) => {
      console.log('Received data:', data);
      if (Array.isArray(data)) {
        this.products = data.slice(0, 6);
      } else if (data && Array.isArray(data.products)) {
        this.products = data.products.slice(0, 6);
      } else {
        console.error('Unexpected data format:', data);
      }
    });
  }

  onCategorySelected(categoryId: string) {
    this.fetchProducts(categoryId);
  }
}
