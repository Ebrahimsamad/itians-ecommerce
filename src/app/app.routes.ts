import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


import { AdminListComponent } from './admin-page/admin-list/admin-list.component';
import { ProductListComponent } from './admin-page/product-list/product-list.component';
import { CategoryListComponent } from './admin-page/category-list/category-list.component';

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
  { path: 'admin', component: AdminListComponent,canActivate: [AuthGuard] },
  { path: 'product', component: ProductListComponent },
  { path: 'category', component: CategoryListComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/login' },
    // Add a default route or other routes as needed
    // { path: '', redirectTo: '/admin', pathMatch: 'full' },
  ];
  
  export { routes };