import { Component, OnInit } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { FrontendService } from '../frontend.service';
import { StockOrder } from '../stockOrder';
import { User } from '../user';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Stock } from '../stock';
import { StockOrderWithCost } from '../stockOrderWithCost';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DecimalPipe],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

countries = COUNTRIES;
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
