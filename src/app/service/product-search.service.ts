import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {
    private allProducts = [
      {
        id: 2,
        title: "Z-bock",
        image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
        price: 24000,
        discountPercentage: 7
      },
      {
        id: 2,
        title: "Z-bock",
        image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
        price: 9.99,
        discountPercentage: 7.17
      },
      {
        id: 2,
        title: "Z-bock",
        image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
        price: 9.99,
        discountPercentage: 7.17
      },{
        id: 2,
        title: "Z-bock",
        image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
        price: 9.99,
        discountPercentage: 7.17
      },{
        id: 2,
        title: "Z-bock",
        image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
        price: 9.99,
        discountPercentage: 7.17
      },{
        id: 2,
        title: "Z-bock",
        image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
        price: 9.99,
        discountPercentage: 7.17
      },{
        id: 2,
        title: "Z-bock",
        image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
        price: 9.99,
        discountPercentage: 7.17
      }
    ];
  constructor() { }
  getProducts(): Observable<any> {
    const paginatedProducts = this.allProducts

    return of({
      products: paginatedProducts,
    });
  }
}
