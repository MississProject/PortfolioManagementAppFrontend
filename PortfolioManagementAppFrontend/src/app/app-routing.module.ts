import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyStocksPageComponent } from './buy-stocks-page/buy-stocks-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
<<<<<<< HEAD
  { path: '', component: HomeComponent }
=======
  { path: 'buystocks', component: BuyStocksPageComponent}
>>>>>>> c056c10df533d8b574b9016e71c423d6cf27b098
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
