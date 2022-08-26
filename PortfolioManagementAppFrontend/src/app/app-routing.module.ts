import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyStocksPageComponent } from './buy-stocks-page/buy-stocks-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'buystocks', component: BuyStocksPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
