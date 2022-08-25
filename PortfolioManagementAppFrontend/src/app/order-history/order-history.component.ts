import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../frontend.service';
import { StockOrder } from '../stockOrder';
import { User } from '../user';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  user?: User;
  stockOrder?: StockOrder;

  constructor(private frontendService: FrontendService) { }

  ngOnInit(): void {

    this.frontendService.getOrderHistory().subscribe(
      (data:any) => {
        this.stockOrder = data, console.log(data)
      },
      (err:any) => console.log("Error")
      
    );
  }

}
