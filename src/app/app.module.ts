import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ClientHeaderComponent } from './components/client/client-header/client-header.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { ClientHomeComponent } from './components/client/client-home/client-home.component';
import { ClientLoginPageComponent } from './components/client/client-login-page/client-login-page.component';
import { ClientSignUpComponent } from './components/client/client-sign-up/client-sign-up.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminLoginPageComponent } from './components/admin/admin-login-page/admin-login-page.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FoodListComponent } from './components/admin/food-list/food-list.component';
import { AdminAddfoodComponent } from './components/admin/admin-addfood/admin-addfood.component';
import { ClientCartComponent } from './components/client/client-cart/client-cart.component';
import { ClientOrderComponent } from './components/client/client-order/client-order.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AboutusComponent,
    HomePageComponent,
    ContactusComponent,
    ClientHeaderComponent,
    AdminHeaderComponent,
    ClientHomeComponent,
    ClientLoginPageComponent,
    ClientSignUpComponent,
    AdminHomeComponent,
    AdminLoginPageComponent,
    FoodListComponent,
    AdminAddfoodComponent,
    ClientCartComponent,
    ClientOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule



 
  ],
  providers: [
    DatePipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
