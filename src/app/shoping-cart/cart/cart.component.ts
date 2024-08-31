import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { NgFor } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { CarselComponent } from '../carsel/carsel.component';
import { CarsouelComponent } from '../carsouel/carsouel.component';
import { HeaderSearchComponent } from '../header-search/header-search.component';




@Component({
  selector: 'app-cart',
  standalone: true,
  imports:[NgFor,FormsModule,CarselComponent,CarsouelComponent,HeaderSearchComponent],
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
  constructor(private CounterService: CounterService) {}


  ngOnInit() {
    this.CounterService.getCartArray().subscribe((data) => {
      this.carts = data;
      console.log('Cart data:', this.carts);
    });
  }

  increaseQuantity(id: any) {
    const cartItem = this.carts.find((c) => c.id === id);
    if (cartItem && cartItem.quantity < cartItem.stock) {
      cartItem.quantity += 1;
      this.CounterService.setCartArray(this.carts);
    }
  }

  decreaseQuantity(id: any) {
    const cartItem = this.carts.find((c) => c.id === id);
    if (cartItem && cartItem.quantity > 0) {
      cartItem.quantity -= 1;
      this.CounterService.setCartArray(this.carts);
    }
  }

  removeItem(id: any) {
    this.carts = this.carts.filter((c) => c.id !== id);
    this.CounterService.setCartArray(this.carts);
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



