import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-navigation.component.html',
  styleUrl: './category-navigation.component.css'
})
export class CategoryNavigationComponent {
  categories = [
    { name: 'Beauty', id: 'beauty' },
    { name: 'fragrances', id: 'fragrances' },
    { name: 'camera', id: 'camera' },
    { name: 'speaker', id: 'speaker' },
    { name: 'screen', id: 'screen' },
    { name: 'labtop', id: 'labtop' }
  ];

  @Output() categorySelected = new EventEmitter<string>();

  onCategorySelect(categoryId: string) {
    console.log('Category selected:', categoryId); // Check if category ID is being emitted
    this.categorySelected.emit(categoryId);
  }
}
