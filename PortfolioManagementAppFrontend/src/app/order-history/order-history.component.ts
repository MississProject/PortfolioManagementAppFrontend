import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../frontend.service';
import { Stock } from '../stock';
import { StockOrder } from '../stockOrder';
import { StockOrderWithCost } from '../stockOrderWithCost';
import { User } from '../user';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  user?: User;
  stockOrder?: StockOrder[];
  stock?: Stock[];
  stockOrderWithCost: StockOrderWithCost[] = [];

  constructor(private frontendService: FrontendService) { }

  ngOnInit(): void {

     this.frontendService.getOrderHistory().subscribe(
      (data:any) => {
        this.stockOrder = data;
        console.log(data);
        console.log(this.stockOrderWithCost);
        // ---------------------------------------------
        this.frontendService.getAllStocks().subscribe(
          (data:any) => {
            this.stock = data;
            console.log(data);
            this.stockOrder?.forEach((order) => {
              let curr_cost: number;
              let curr_stock_symbol : string = order.stockSymbol;
              let num_of_shares: number = order.numOfShares;
              // 1. Get price of stock by using stock symbol
              this.stock?.forEach((stock_item) => {
                if(stock_item.stock_symbol === curr_stock_symbol) {
                  // 2. Calculate total cost of order.
                  curr_cost = num_of_shares * stock_item.stock_price;
                  // 3. Create a new object with total cost
                  var obj = new StockOrderWithCost(order.orderID, order.orderStatus, order.numOfShares, order.stockSymbol, order.userEmail, curr_cost)
                  // 4. Add object to this.stockOrderWithcost
                  this.stockOrderWithCost.push(obj);
                }
              }) 
            })
            console.log(this.stockOrderWithCost);
          },
          (err:any) => console.log("Error")
          
        );
        // --------------------------------------------
      },
      (err:any) => console.log("Error")
      
    );


    
  }

}
