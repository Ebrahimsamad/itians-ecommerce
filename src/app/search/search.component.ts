import { Component } from '@angular/core';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterComponent } from './filter/filter.component';
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-search',
  standalone: true,
 
  imports: [
    SearchHeaderComponent,
    ProductListComponent,
    FilterComponent,
    SearchHeaderComponent,
    HeroComponent
],
    templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
