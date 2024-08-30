import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from "./search/search.component";
import { OrderCompleteComponent } from "./order-complete/order-complete.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { LoaderComponent } from './loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdminPageComponent,
    RouterOutlet,
    LoginComponent,
    RegisterComponent,
    HttpClientModule,
    RouterOutlet, SearchComponent, OrderCompleteComponent, FavoritesComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
}
