import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { FrontendService } from '../frontend.service';
import { NgForm } from '@angular/forms';
import { StockOrder } from '../stock-order';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-funds-form',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class StockFormComponent implements OnInit {
  // stocks!: Array<Stock>;
  // selectedStock!: Stock;
  // numOfShares!: number;
  // newOrder!: StockOrder;
  closeResult = '';

  

  constructor(private paymentService: NgbModal) {
  }

  open(content: any) {
    this.paymentService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  //   this.paymentService.getAllStocks().subscribe({
  //     next: (data:any) => {
  //       // this.stocks = data, console.log(data)
  //     },
  //     error: (err:any) => console.log("Error")
  // });
  }

  // purchase(form: NgForm) {
  //   // this.newOrder = new StockOrder(0, this.numOfShares, 
  //   // this.selectedStock.stock_symbol, "abc@gmail.com");
  //   // console.log(this.selectedStock)
  //   this.frontendService.buyStock(this.newOrder).subscribe({
  //     next: (data:any) => {
  //       console.log(data)
  //     },
  //     error: (err:any) => console.log("Error")
  //   })
  //   form.reset();
  // }
}
