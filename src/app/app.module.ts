import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalComponent } from './portal/portal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TaxReturnComponent } from './tax-return/tax-return.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { LinksComponent } from './links/links.component';
import { LoginComponent } from './login/login.component';
import { TermsComponent } from './terms/terms.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';

import { ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PortalComponent,
    NavigationComponent,
    TaxReturnComponent,
    CreateAccountComponent,
    AboutComponent,
    HelpComponent,
    LinksComponent,
    LoginComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],

//   imports: [
//     MatButtonModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatRippleModule,
//  ]
//   exports: [
//     MatButtonModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatRippleModule,
//   ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
