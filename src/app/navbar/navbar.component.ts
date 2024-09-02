import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserImageService } from '../user-image.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, NgClass, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userImage: string = '';
  searchActive = false;
  navbarVisible = false;
  searchTerm: string = '';
  isAuthenticated: boolean = false;

  constructor(private router: Router, private userImageService: UserImageService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userImageService.userImage$.subscribe((imageSrc) => {
      this.userImage = imageSrc;
    });

    this.authService.isAuthenticated$.subscribe((status) => {
      this.isAuthenticated = status;
    });

    this.router.events.subscribe(() => {
      this.searchActive = false;
    });
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const searchContainer = document.querySelector('.search-container');
    if (this.searchActive && searchContainer && !searchContainer.contains(event.target as Node)) {
      this.closeSearch();
    }
  }

  toggleSearch() {
    this.searchActive = !this.searchActive;
    if (this.searchActive) {
      this.navbarVisible = false;
    }
  }

  closeSearch() {
    this.searchActive = false;
  }

  toggleNavbar() {
    this.navbarVisible = !this.navbarVisible;
  }

  performSearch() {
    if (this.searchTerm.trim()) {
      console.log('Navigating to search with term:', this.searchTerm);
      this.router.navigate(['/search'], {
        queryParams: { q: this.searchTerm },
      });
      this.searchActive = false;
      this.searchTerm = '';
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
