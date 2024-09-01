import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DiscountBadgePipe } from '../pipe/discount-badge.pipe';
import { DiscountPipe } from '../pipe/discount.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf, DiscountBadgePipe, DiscountPipe],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() product: any;
  favoriteProducts: any[] = [];
  cartProducts: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadFavoriteProducts();
    this.loadCartProducts();
  }

  loadFavoriteProducts(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.favourite) {
      this.favoriteProducts = user.favourite;
    }
  }

  loadCartProducts(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.cart) {
      this.cartProducts = user.cart;
    }
  }

  isFavorite(): boolean {
    return this.favoriteProducts.some((fav) => fav._id === this.product._id);
  }

  toggleFavorite(): void {
    const productId = this.product._id;

    this.authService.toggleFavourite(productId).subscribe({
      next: (response) => {
        this.favoriteProducts = response.favourites;
        localStorage.setItem(
          'user',
          JSON.stringify({
            ...JSON.parse(localStorage.getItem('user') || '{}'),
            favourite: response.favourites,
          })
        );
      },
      error: (err) => console.error('Error toggling favorite:', err),
    });
  }

  getIconClass(): string {
    return this.isFavorite() ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  }

  addToCart(): void {
    if (
      !this.cartProducts.some((cartItem) => cartItem._id === this.product._id)
    ) {
      this.cartProducts.push(this.product);

      localStorage.setItem(
        'user',
        JSON.stringify({
          ...JSON.parse(localStorage.getItem('user') || '{}'),
          cart: this.cartProducts,
        })
      );

      console.log('Product added to cart:', this.product);
    } else {
      console.log('Product already in cart:', this.product);
    }
  }
}
