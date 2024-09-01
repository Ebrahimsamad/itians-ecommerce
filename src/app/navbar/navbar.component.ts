import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserImageService } from '../user-image.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, NgClass, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  userImage: string="";
  constructor(private router: Router,private userImageService: UserImageService) {}

  searchActive = false;
  navbarVisible = false;
  searchTerm: string = '';

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.searchActive = false;
      this.userImageService.userImage$.subscribe((imageSrc) => {
        this.userImage = imageSrc;
      });
    });
  }
  // @HostListener('document:click', ['$event'])
  // handleClickOutside(event: MouseEvent) {
  //   const searchContainer = document.querySelector('.search-container');
  //   if (this.searchActive && searchContainer && !searchContainer.contains(event.target as Node)) {
  //     this.closeSearch();

  // }

  // toggleSearch() {
  //   this.searchActive = !this.searchActive;
  //   if (this.searchActive) {
  //     this.navbarVisible = false;
  //   }
  // }

  // closeSearch() {
  //   this.searchActive = false;
  // }

  toggleNavbar() {
    this.navbarVisible = !this.navbarVisible;
  }

  performSearch() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/search'], {
        queryParams: { q: this.searchTerm },
      });
      this.searchActive = false;
      this.searchTerm = '';
    }
  }
}

