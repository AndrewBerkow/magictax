import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PortalComponent } from './portal/portal.component';
import { TaxReturnComponent } from './tax-return/tax-return.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { LinksComponent } from './links/links.component';
import { LoginComponent } from './login/login.component';
import { TermsComponent } from './terms/terms.component';
import { RefundComponent } from './refund/refund.component';



const routes: Routes = [
  { path: '', redirectTo: '/portal', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'terms', component: TermsComponent},
  { path: 'portal', component: PortalComponent},
  { path: 'tax-return', component: TaxReturnComponent},
  { path: 'create-account', component: CreateAccountComponent},
  { path: 'about', component: AboutComponent},
  { path: 'help', component: HelpComponent},
  { path: 'links', component: LinksComponent},
  { path: 'refund', component: RefundComponent},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
