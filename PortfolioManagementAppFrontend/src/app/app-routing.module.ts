import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyStocksPageComponent } from './buy-stocks-page/buy-stocks-page.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buystocks', component: BuyStocksPageComponent},
  { path: 'orderHistory', component: OrderHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
