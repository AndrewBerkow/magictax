import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalComponent } from './portal/portal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TaxReturnComponent } from './tax-return/tax-return.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AboutComponent } from './about/about.component';
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
import {MatSelectModule} from '@angular/material/select';
import {MatRippleModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { RefundComponent } from './refund/refund.component';
// import {MatGridTiletModule} from '@angular/material/grid-';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    PortalComponent,
    NavigationComponent,
    TaxReturnComponent,
    CreateAccountComponent,
    AboutComponent,
    LinksComponent,
    LoginComponent,
    TermsComponent,
    RefundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    MatSelectModule,
    MatGridListModule,
    MatDividerModule
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
