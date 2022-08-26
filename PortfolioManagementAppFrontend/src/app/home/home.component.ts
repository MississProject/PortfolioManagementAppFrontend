import { Component, OnInit } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { FrontendService } from '../frontend.service';
import { StockOrder } from '../stock-order';
import { User } from '../user';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Stock } from '../stock';
import { StockOrderWithCost } from '../stockOrderWithCost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DecimalPipe],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

user?: User;
stockOrder: StockOrder[] = [];
stock?: Stock;
stockOrderWithCost: StockOrderWithCost[] = [];

constructor(private frontendService: FrontendService) { }
 
  ngOnInit(): void {

    
    this.frontendService.getOrderHistory().subscribe(
      (data:any) => {
        this.stockOrder = data, console.log(data)
        let filtered = this.stockOrder.filter(order => order.orderStatus == 2);
        this.stockOrder=filtered;
        this.stockOrder?.forEach((order) => {
          let symb = order.stockSymbol;
          this.frontendService.getStockBySymbol(symb).subscribe(
            (data:any) => {
                console.log(data[0].stock_price);
                let totalPrice = data[0].stock_price * order.numOfShares;
                var obj = new StockOrderWithCost(order.orderID, order.orderStatus, order.numOfShares, order.stockSymbol, order.userEmail, totalPrice)
                  // 4. Add object to this.stockOrderWithcost
                  this.stockOrderWithCost.push(obj);
            },
            (err:any) => console.log("Error")
            
          );
        })

      },
      (err:any) => console.log("Error")
      
    );

    this.frontendService.getUserByEmail('abc@gmail.com').subscribe(
      (data:any) => {
        this.user = data, console.log(data)
      },
      (err:any) => console.log("Error")
      
    );

    
  }

}
