import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HttpClientModule } from '@angular/common/http'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdminPageComponent,
    RouterOutlet,
    LoginComponent,
    RegisterComponent,
    HttpClientModule, 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
}
