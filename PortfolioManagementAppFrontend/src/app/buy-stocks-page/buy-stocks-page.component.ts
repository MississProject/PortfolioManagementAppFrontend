import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../frontend.service';
import { User } from '../user';

@Component({
  selector: 'app-buy-stocks-page',
  templateUrl: './buy-stocks-page.component.html',
  styleUrls: ['./buy-stocks-page.component.css']
})
export class BuyStocksPageComponent implements OnInit {

  user!: User;

  constructor(private frontendService: FrontendService) { }

  ngOnInit(): void {
    this.frontendService.getUserByEmail("abc@gmail.com").subscribe(
      (data:any) => {
        this.user = data, console.log(data)
      },
      (err:any) => console.log("Error")
      
    );
  }

}
