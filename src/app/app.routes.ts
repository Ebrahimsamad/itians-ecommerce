import { Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoriesComponent } from './categories/categories.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/homepage',
        pathMatch: 'full'
      },
      {
        path: 'homepage',
        component: HomepageComponent
      },
      
    {
        path: 'products',
        component: ProductlistComponent,
        title: 'Products'
        },
        {
            path: 'product/:id',
            component: ProductdetailsComponent

        },
        { path: 'categories',
          component: CategoriesComponent},
       

];
