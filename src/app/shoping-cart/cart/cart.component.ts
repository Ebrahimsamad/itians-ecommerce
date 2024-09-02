import { Component, OnInit } from '@angular/core';
// import { CounterService } from '../counter.service';
import { NgFor } from '@angular/common';
import { FormsModule} from '@angular/forms';
// import { LoginComponent } from '../login/login.component';
import { CarselComponent } from '../carsel/carsel.component';
// import { CarsouelComponent } from '../carsouel/carsouel.component';
// import { HeaderSearchComponent } from '../header-search/header-search.component';
import { CartService } from '../../../service/cart.service';




@Component({
  selector: 'app-cart',
  standalone: true,
  imports:[NgFor,FormsModule,CarselComponent],
    // ,CarsouelComponent,HeaderSearchComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',


})
export class CartComponent implements OnInit {
  counter = 0;
  id?: string;
  productDetail: any;
  cartItems: any[] = [];
  carts: any[] = [];
  voucherCode: string = '';
  discountRate: number = 0.50;
  shippingRate: number = 0.10;
  shippingCost: number = 0;
   constructor(private cartService: CartService) {}


   ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  increaseQuantity(id: string): void {
    const item = this.cartItems.find(c => c._id === id);
    if (item && item.stock > 0) {
      item.stock += 1;
      this.cartService.addProduct(item, 1); 
    }
  }

  decreaseQuantity(id: string): void {
    const item = this.cartItems.find(c => c._id === id);
    if (item && item.stock > 1) {
      item.stock -= 1;
      this.cartService.addProduct(item, 0); 
    }
  }

  removeItem(id: any) {
    this.carts = this.carts.filter((c) => c.id !== id);
    // this.CounterService.setCartArray(this.carts);
  }
  getSubtotal() {
    return Math.round(
      this.carts.reduce((total, cart) => total + cart.price * cart.quantity, 0) * 100
    ) / 100;
  }

  getShippingCost() {


      return this.voucherCode == 'AK'
        ? Math.round(this.getSubtotal() * this.shippingRate * 100) / 100
        : 0;
    }



  getTotalPrice() {
    const subtotal = this.getSubtotal();
    const discount = this.voucherCode === 'AK' ? subtotal * this.discountRate : 0;
    const shipping = this.getShippingCost();
    console.log(`Subtotal: ${subtotal}`);
    console.log(`Discount: ${discount}`);
    console.log(`Shipping: ${shipping}`);
    console.log(`Total Price: ${subtotal - discount + shipping}`);
    return Math.round((subtotal - discount ) * 100) / 100;
  }
  applyVoucher() {


  }




}



