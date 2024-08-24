import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';
interface Slide {
  image: string;
  title: string;
  items: string;
}
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CarouselModule,NgFor],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  
}
