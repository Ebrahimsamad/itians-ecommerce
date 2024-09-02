import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-navigation.component.html',
  styleUrl: './category-navigation.component.css'
})
export class CategoryNavigationComponent {
  @Input() categories: any[] = [];

OnInit(){
  console.log(this.categories)
}

  @Output() categorySelected = new EventEmitter<string>();

  onCategorySelect(category: string) {
    console.log('Category selected:', category); 
    this.categorySelected.emit(category);
  }
}
