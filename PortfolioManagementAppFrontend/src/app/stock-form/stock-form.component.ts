import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { FrontendService } from '../frontend.service';
import { NgForm } from '@angular/forms';
import { StockOrder } from '../stock-order';
import { Router } from "@angular/router"

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stocks!: Array<Stock>;
  selectedStock!: Stock;
  numOfShares!: number;
  newOrder!: StockOrder;

  constructor(private frontendService: FrontendService, private router: Router) {
  }

  ngOnInit(): void {
    this.frontendService.getAllStocks().subscribe({
      next: (data:any) => {
        this.stocks = data, console.log(data)
      },
      error: (err:any) => console.log("Error")
  });
  }

  purchase(form: NgForm) {
    this.newOrder = new StockOrder(0, this.numOfShares, 
    this.selectedStock.stock_symbol, "abc@gmail.com");
    console.log(this.selectedStock)
    this.frontendService.buyStock(this.newOrder).subscribe({
      next: (data:any) => {
        console.log(data)
      },
      error: (err:any) => console.log("Error")
    })
    form.reset();
    this.router.navigate(['/']);
  }
}
