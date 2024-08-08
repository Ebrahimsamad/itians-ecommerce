import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatogoreComponent } from "./catogore/catogore.component";
import { SliderComponent } from "./slider/slider.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CatogoreComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'itians-ecommerce';
}
