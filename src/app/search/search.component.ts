import { Component } from '@angular/core';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterComponent } from './filter/filter.component';
import { HeroComponent2 } from "./hero/hero.component";
import {HeroComponent as hero2} from'../hero/hero.component'
import { IconsComponent } from "../icons/icons.component";
@Component({
  selector: 'app-search',
  standalone: true,

  imports: [
    SearchHeaderComponent,
    ProductListComponent,
    FilterComponent,
    SearchHeaderComponent,
    HeroComponent2,
    hero2,
    IconsComponent
],
    templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
