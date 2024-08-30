import { Component } from '@angular/core';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountPricePipe } from '../discount-price.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule,FormsModule, DiscountPricePipe],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  product!: Product;
  quantity: number = 1;
  selectedImage: string = '';
  favorites: Product[] = [];

  constructor(private route: ActivatedRoute, private router: Router
    , private productService: ProductService, private cartService: CartService
  ) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(+id).subscribe(data => {
        this.product = data;
        if (this.product && this.product.images.length > 0) {
          console.log('Product loaded:', this.product);
          this.quantity = 1;
          this.selectedImage = this.product.images[0] ;
        } else {
          console.error('Product not found or no images available');
        }
      });
    }
}
get savedAmount(): number {
  const discount = (this.product.discountPercentage / 100) * this.product.price;
  return discount;
}
  selectImage(index: number) {
    this.selectedImage = this.product.images[index];
  }

  prevImage() {
    const currentIndex = this.product.images.indexOf(this.selectedImage);
    const prevIndex = (currentIndex === 0) ? this.product.images.length - 1 : currentIndex - 1;
    this.selectedImage = this.product.images[prevIndex];
  }
  nextImage() {
    const currentIndex = this.product.images.indexOf(this.selectedImage);
    const nextIndex = (currentIndex === this.product.images.length - 1) ? 0 : currentIndex + 1;
    this.selectedImage = this.product.images[nextIndex];
  }
  getStockStatus(): string {
    return this.product?.stock > 0 ? 'In Stock' : 'Out of Stock';
  }

  getStockStatusClass(): string {
    return this.product?.stock > 0 ? 'in-stock' : 'out-of-stock';
  }

  getStars(rating: number): { fullArray: number[], half: boolean } {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    return { fullArray: Array(fullStars).fill(0), half: halfStar };
  }

  isFavorite(): boolean {
    return this.favorites.some(fav => fav.id === this.product.id);
  }

  toggleFavorite(product: any): void {
    const index = this.favorites.findIndex(fav => fav.id === product.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
      console.log("notadded")

    } else {
      this.favorites.push(this.product);
      console.log("added")
    }
    // Handle back-end logic
  }

  getIconClass(): string {
    return this.isFavorite() ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  }

  increaseQuantity(): void {
    if (this.product && this.quantity < this.product.stock) {
      this.quantity++;
    }
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  getDiscountedPrice(): number {
    return this.product.price * (1 - this.product.discountPercentage / 100);
  }

  // addToCart(): void {
  //   console.log('Product added to cart:', this.product);
  //   console.log('Quantity:', this.quantity);
  // }

  addToCart(): void {
    if (this.product) {
      this.cartService.addProduct(this.product, this.quantity);
      this.router.navigate(['/cart']);
    }
  }

  onSelectProduct(): void {
    this.router.navigate(['/product', this.product.id]);
  }
}
