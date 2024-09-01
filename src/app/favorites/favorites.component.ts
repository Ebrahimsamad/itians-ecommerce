import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favoriteProducts: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loadFavoriteProducts();
  }

  private loadFavoriteProducts(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user?.favourite) {
      this.favoriteProducts = user.favourite;
    }
  }

  toggleFavorite(product: any): void {
    this.authService.toggleFavourite(product._id).subscribe({
      next: (response) => {
        this.favoriteProducts = response.favourites;
        this.updateLocalStorage(response.favourites);
      },
      error: (err) => console.error('Error toggling favorite:', err),
    });
  }

  private updateLocalStorage(favourites: any[]): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    localStorage.setItem(
      'user',
      JSON.stringify({ ...user, favourite: favourites })
    );
  }
}
