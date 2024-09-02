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
import { AboutUsComponent } from './about-us/about-us.component';
// import { ContactUSComponent } from './contact-us/contact-us.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ContactUSComponent } from './contact-us/contact-us.component';

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
    component: HomepageComponent,
  },
  {
    path: 'product',
    component: SearchComponent,
  },
  {
    path: 'favourite',
    component: FavoritesComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },

  {
    path:"contact-us",
    component:ContactUSComponent
  },

  {
    path:"UserProfile",
    component:UserProfileComponent
  },
  {
    path:"Favourite",
    component:FavoritesComponent
  },
  {
    path:"Favourite",
    component:FavoritesComponent
  },
  {
    path:"details/:id",
    component:ProductdetailsComponent
  }
  // {
  //   path:"cart",
  //   component:CartComponent
  // }





  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login' },
  // Add a default route or other routes as needed
  // { path: '', redirectTo: '/admin', pathMatch: 'full' },
];

export { routes };
