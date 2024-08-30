import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { OrderCompleteComponent } from "./order-complete/order-complete.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { LoaderComponent } from './loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, OrderCompleteComponent, FavoritesComponent,LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'itians-ecommerce';
}
