import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   canActivate: [AuthGuard],
  // },
  { path: 'forgetPassword', component: ForgotPasswordComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },

  {
    path: '',
    component: HomepageComponent
  },
  {
    path:"product",
    component:SearchComponent
  },
  {
    path:"favourite",
    component:FavoritesComponent
  }
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login' },
    // Add a default route or other routes as needed
    // { path: '', redirectTo: '/admin', pathMatch: 'full' },
  ];

  export { routes };
