import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountBadgePipe } from '../pipe/discount-badge.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { CartService } from '../../service/cart.service';
import { Product,Review } from '../../model/Product';
import { error } from 'jquery';
import { Input } from 'hammerjs';
import { ReviewFormComponent } from '../review-form/review-form.component';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule, FormsModule, DiscountBadgePipe,ReviewFormComponent,NgFor ],
  templateUrl:'./productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
  product: any;
  quantity: number = 1;
  selectedImage: string = '';
  isAddedToCart = false;
  reviewsStart: number = 1;
  reviewsEnd: number = 0;
  showQuantityControls = false;
  favorites: Product[] = [];
  newReviewContent: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (res: any) => {
          this.product = res.product;
          this.selectedImage = res.product.image;
        },
        error: (err: any) => {
          console.error('Error fetching product details:', err);
        }
      });
    } else {
      console.error('No product ID found in the route.');
    }
  }

  handleReviewSubmission(newReview: Review) {
    if (newReview && this.newReviewContent.trim() && newReview.rating) {
      this.product.reviews.push(newReview);
  
      this.productService.addReview(newReview).subscribe({
        next: (review: Review) => {
          console.log('Review submitted successfully:', review);
          this.product.reviews[this.product.reviews.length - 1] = review;
          this.showMessage("Your review has been submitted successfully!");
        },
        error: (error: any) => {
          console.error('Error submitting review:', error);
          this.showMessage("There was an issue submitting your review. Please try login.");
        }
      });
    } else {
      this.showMessage("Please ensure that your review has content and a rating.");
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
    return this.favorites.some(fav => fav._id === this.product._id);
  }
  

  toggleFavorite(product: any): void {
    const index = this.favorites.findIndex(fav => fav._id === product.id);
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
    if (this.product) {
        if (this.quantity < this.product.stock) {
            this.quantity++;
            console.log("hello",this.product)
            this.showMessage('Increased quantity');
        } else {
            this.showMessage('Maximum quantity reached');
        }
    } else {
        this.showMessage('Product not available');
    }
}

decreaseQuantity(): void {
  if (this.quantity === 0) {
    this.showMessage('Cannot decrease below 0');
    this.showQuantityControls = false;
  } else {
    this.quantity--;
    console.log("it decreased", this.product);
    this.showMessage('Decreased quantity');

    if (this.quantity === 0) {
      this.showQuantityControls = false;
    }
  }
}
addToCart(): void {
  if (this.product) {

    this.cartService.addProduct(this.product, this.quantity);
    console.log("hello  add cart",this.product)
    this.showQuantityControls = true;

  }
}

  showMessage(message: string): void {
    const snackbar = document.getElementById("snackbar");
    if (snackbar) {
        snackbar.textContent = message;
        snackbar.className = "show";
        setTimeout(() => {
            snackbar.className = snackbar.className.replace("show", "");
        }, 2000);
    }
}

  getDiscountedPrice(): number {
    return this.product.price * (1 - this.product.discountPercentage / 100);
  }

  // addToCart(): void {
  //   console.log('Product added to cart:', this.product);
  //   console.log('Quantity:', this.quantity);
  // }

 
  onSelectProduct(product: Product): void {
    this.product = product;
    this.selectedImage = product.images[0];
    this.quantity = 1;
  }
  
}
