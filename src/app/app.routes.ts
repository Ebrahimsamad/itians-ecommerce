import { Routes } from '@angular/router';
import { AdminListComponent } from './admin-page/admin-list/admin-list.component';
import { ProductListComponent } from './admin-page/product-list/product-list.component';
import { CategoryListComponent } from './admin-page/category-list/category-list.component';

export const routes: Routes = [
    { path: 'admin', component: AdminListComponent },
    { path: 'product', component: ProductListComponent },
    { path: 'category', component: CategoryListComponent },
    // Add a default route or other routes as needed
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
];
