import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToyDetailComponent } from './toy-detail/toy-detail.component';
import { ToysListComponent } from './toys-list/toys-list.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ShippingAddressComponent} from './shipping-address/shipping-address.component';
import { from } from 'rxjs';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
