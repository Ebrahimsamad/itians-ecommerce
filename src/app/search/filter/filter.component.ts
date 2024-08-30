import { Component, OnInit } from '@angular/core';
import { NgxSliderModule, Options, LabelType } from '@angular-slider/ngx-slider';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgxSliderModule,NgClass,NgFor],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  categories: string[] = ['Category 1', 'Category 2', 'Category 3'];
  brands: string[] = ['Brand A', 'Brand B', 'Brand C'];
  minPrice: number = 0;
  maxPrice: number = 1000;

  selectedCategory: string = '';
  selectedBrand: string = '';
  selectedStock: boolean | null = null;

  optionsPrice: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      return '' + value;
    }
  };

  ngOnInit(): void {
    // Initialize component state
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
  }

  onBrandChange(brand: string): void {
    this.selectedBrand = brand;
  }

  onStockChange(stock: boolean): void {
    this.selectedStock = stock;
  }
}
