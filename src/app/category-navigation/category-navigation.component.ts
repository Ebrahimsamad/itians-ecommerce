import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-category-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-navigation.component.html',
  styleUrl: './category-navigation.component.css'
})
export class CategoryNavigationComponent {
  @Input() categories: any[] = [];



  @Output() categorySelected = new EventEmitter<string>();

  onCategorySelect(category: string) {
    console.log('Category selected:', category); // Check if category ID is being emitted
    this.categorySelected.emit(category);
  }
}
