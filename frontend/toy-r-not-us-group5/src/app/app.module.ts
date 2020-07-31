import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToysListComponent } from './toys-list/toys-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToyDetailComponent } from './toy-detail/toy-detail.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ToysListComponent,
    ToyDetailComponent,
    CartPageComponent,
    ShippingAddressComponent,
    PaymentPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
