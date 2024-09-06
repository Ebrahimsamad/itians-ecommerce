import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  private apiUrl = 'https://e-commerce-api-fawn.vercel.app/api/payment'; 

  constructor(private http: HttpClient,private localStorageService:LocalStorageService) { }

  startCheckout(items: any[]): Observable<any> {
    this.localStorageService.removeItem("cart")
    return this.http.post(`${this.apiUrl}/checkout`, items);
  }
}
