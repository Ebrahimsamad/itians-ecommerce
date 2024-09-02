import { AuthService } from './../../services/auth.service';
import { LocalStorageService } from './../../service/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarselComponent } from '../carsel/carsel.component';
import { CartListService } from '../../service/cart-list.service';
import { PaymentServiceService } from '../../service/payment-service.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, FormsModule, CarselComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'], 
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
  subscription: any;

  constructor(
    private cartListService: CartListService,
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private paymentService: PaymentServiceService

  ) { }

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.cartListService.getCart().subscribe(cart => {
          this.carts = cart;
        });
      } else {
        this.subscription = this.localStorageService.getItem('cart');
        this.carts = this.subscription || [];
        console.log(this.carts);
      }
    });
  }

  increaseQuantity(id: any) {
    const cartItem = this.carts.find((c) => c.product.id === id);
    if (cartItem && cartItem.quantity < cartItem.productBody.stock) {
      cartItem.quantity += 1;
      this.localStorageService.updateQuantityInArray('cart', id, 1, cartItem.productBody);
    }
  }

  decreaseQuantity(id: any) {
    const cartItem = this.carts.find((c) => c.product.id === id);
    if (cartItem && cartItem.quantity > 1) { 
      cartItem.quantity -= 1;
      this.localStorageService.updateQuantityInArray('cart', id, -1, cartItem.productBody);
    } else if (cartItem && cartItem.quantity === 1) {
      this.removeItem(id);
    }
  }

  removeItem(id: any) {
    this.localStorageService.removeItemFromArray('cart', id);
    this.carts = this.carts.filter((item) => item.product.id !== id);
  }

  getSubtotal() {
    return Math.round(
      this.carts.reduce((total, cart) => total + cart.productBody.price * cart.quantity, 0) * 100
    ) / 100;
  }

  getShippingCost() {
    return Math.round(this.getSubtotal() * this.shippingRate * 100) / 100;
  }

  getTotalPrice() {
    const subtotal = this.getSubtotal();
    const discount = subtotal * this.discountRate;
    const shipping = this.getShippingCost();
    return Math.round((subtotal - discount + shipping) * 100) / 100;
  }

  applyVoucher() {
    console.log(`Voucher applied: ${this.voucherCode}`);
  }

  checkOut() {
    console.log(this.carts)
    const items = this.carts.map(item => ({
      product: {
        title: item.productBody.title,
        price: item.productBody.price
      },
      quantity: item.quantity
    }));
    
    this.paymentService.startCheckout(items).subscribe((response) => {
        window.location.href = response.url;
      }, (error) => {
        console.error('Error:', error);
      });
  }
    
 
}

