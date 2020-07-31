import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToyDetailComponent } from './toy-detail/toy-detail.component';
import { ToysListComponent } from './toys-list/toys-list.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { from } from 'rxjs';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ThankPageComponent } from './thank-page/thank-page.component';

const routes: Routes = [
  { path: '', component: ToysListComponent },
  {
    path: 'toy-detail/:id',
    component: ToyDetailComponent,
  },
  {
    path: 'cart',
    component: CartPageComponent,
  },
  {
    path: 'ship',
    component: ShippingAddressComponent,
  },
  {
    path: 'payment',
    component: PaymentPageComponent,
  },

  {
    path: 'thank',
    component: ThankPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
