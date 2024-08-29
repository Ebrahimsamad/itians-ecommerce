import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [ProductListComponent,AdminListComponent,CategoryListComponent,CommonModule,RouterModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
