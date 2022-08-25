import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FrontendService } from '../frontend.service';
import { User } from '../user';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  user?: User;

  constructor(private frontendService: FrontendService) {
    
  }

  ngOnInit(): void {
    this.frontendService.getUserByEmail("abc@gmail.com").subscribe(
      (data:any) => {
        this.user = data, console.log(data)
      },
      (err:any) => console.log("Error")
      
    );
  }

}
