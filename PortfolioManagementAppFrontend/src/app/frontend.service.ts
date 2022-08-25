import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
<<<<<<< HEAD
import { StockOrder } from './stockOrder';
=======
import { Stock } from './stock';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { StockOrder } from './stock-order';
>>>>>>> c056c10df533d8b574b9016e71c423d6cf27b098

@Injectable({
  providedIn: 'root'
})
export class FrontendService {

  private baseUrl = 'http://localhost:8080/'

  //private baseUrl = 'http://portfolio-rest-api-portfolio-rest-api.openshift38.conygre.com/'


  constructor(private http:HttpClient) { }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get(`${this.baseUrl}portfolio/${email}`) as Observable<User>;
  }

  getAllStocks(): Observable<Array<Stock>> {
    return this.http.get(`${this.baseUrl}stock`) as Observable<Array<Stock>>;
  }

  buyStock(stockOrder: StockOrder): Observable<StockOrder> {
    return this.http.post(`${this.baseUrl}stockorders`, stockOrder) as Observable<StockOrder>;
  }

  getOrderHistory(): Observable<StockOrder[]> {
      return this.http.get(`${this.baseUrl}stockorders`) as Observable<StockOrder[]>;
      }

  getStockBySymbol(stockSymbol: string): Observable<StockOrder[]>{
    return this.http.get(`${this.baseUrl}/stock/${stockSymbol}`) as Observable<StockOrder[]>;
  }
}
