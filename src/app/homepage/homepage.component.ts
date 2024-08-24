import { Component } from '@angular/core';
import { CatogerysliderComponent } from "../catogeryslider/catogeryslider.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CatogerysliderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
