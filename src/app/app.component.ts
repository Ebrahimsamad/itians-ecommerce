import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUSComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OurTeamComponent,ContactUSComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'itians-ecommerce';
}
