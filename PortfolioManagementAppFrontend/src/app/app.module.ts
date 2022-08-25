import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import { BuyStocksPageComponent } from './buy-stocks-page/buy-stocks-page.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockFormComponent } from './stock-form/stock-form.component';
>>>>>>> c056c10df533d8b574b9016e71c423d6cf27b098

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
<<<<<<< HEAD
    HomeComponent,
=======
    BuyStocksPageComponent,
    StockListComponent,
    StockFormComponent
>>>>>>> c056c10df533d8b574b9016e71c423d6cf27b098
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
