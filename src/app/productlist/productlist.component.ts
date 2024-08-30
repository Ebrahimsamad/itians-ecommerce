import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data.products;
      },
      error: (err) => {
        console.error('Failed to load products', err);
      }
    });
  }

  onSelectProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }
}
