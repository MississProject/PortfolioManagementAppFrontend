import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FrontendService } from '../frontend.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks!: Array<Stock>;

  constructor(private frontendService: FrontendService) {
  }

  ngOnInit(): void {
    this.frontendService.getAllStocks().subscribe({
      next: (data:any) => {
        this.stocks = data, console.log(data)
      },
      error: (err:any) => console.log("Error")
  });
  }

}
