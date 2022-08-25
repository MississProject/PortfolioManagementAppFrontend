import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { StockOrder } from './stockOrder';

@Injectable({
  providedIn: 'root'
})
export class FrontendService {

  private baseUrl = 'http://localhost:8080/'

  constructor(private http:HttpClient) { }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get(`${this.baseUrl}portfolio/${email}`) as Observable<User>;
    }

  getOrderHistory(): Observable<StockOrder[]> {
      return this.http.get(`${this.baseUrl}stockorders`) as Observable<StockOrder[]>;
      }

  getStockBySymbol(stockSymbol: string): Observable<StockOrder[]>{
    return this.http.get(`${this.baseUrl}/stock/${stockSymbol}`) as Observable<StockOrder[]>;
  }
}
