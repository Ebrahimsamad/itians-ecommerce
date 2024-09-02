import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartListService {
  private cart: any[] = [];
  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.cart);
  private apiUrl = 'https://e-commerce-api-fawn.vercel.app/cart';

  constructor(private http: HttpClient, private authService: AuthService) {
    this.initializeCart();
  }

  private initializeCart(): void {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.fetchCart();
        this.mergeLocalCartWithServer(); 
      } else {
        const storedCart = localStorage.getItem('cart');
        this.cart = storedCart ? JSON.parse(storedCart) : [];
        this.cartSubject.next(this.cart);
      }
    });
  }

  getCart(): Observable<any[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(item: any): void {
    
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if(isAuthenticated){
        console.log("backend")
      }else{
      const existingItem = this.cart.find(cartItem => cartItem.item.id === item.id);
      
      this.cart.push({ item, quantity: 1 });
console.log(item);
      }})
      
  }

  removeFromCart(index: number): void {
    const removedItem = this.cart.splice(index, 1)[0];
    this.cartSubject.next(this.cart);

    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.http.delete(`${this.apiUrl}/${removedItem.item.id}`).subscribe(
          response => {
            console.log('Item removed from cart on server:', response);
          },
          error => {
            console.error('Error removing item from cart:', error);
          }
        );
      } else {
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    });
  }

  clearCart(): void {
    this.cart = [];
    this.cartSubject.next(this.cart);

    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.http.post(`${this.apiUrl}/clear`, {}).subscribe(
          response => {
            console.log('Cart cleared on server:', response);
          },
          error => {
            console.error('Error clearing cart:', error);
          }
        );
      } else {
        localStorage.removeItem('cart');
      }
    });
  }

  private fetchCart(): void {
    this.http.get<any[]>(`${this.apiUrl}`).subscribe(
      data => {
        this.cart = data;
        this.cartSubject.next(this.cart);
      },
      error => {
        console.error('Error fetching cart:', error);
      }
    );
  }

  private mergeLocalCartWithServer(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const localCart = JSON.parse(storedCart);

      if (localCart.length > 0) {
        localCart.forEach((localItem:any) => {
          const serverItem = this.cart.find(cartItem => cartItem.item.id === localItem.item.id);

          if (serverItem) {
            serverItem.quantity += localItem.quantity;
          } else {
            this.cart.push(localItem);
          }
        });

        this.http.post(`${this.apiUrl}/merge`, { cartItems: this.cart }).subscribe(
          response => {
            console.log('Local cart merged with server cart:', response);
            localStorage.removeItem('cart');
            this.fetchCart(); 
          },
          error => {
            console.error('Error merging local cart with server cart:', error);
          }
        );
      }
    }
  }
}
