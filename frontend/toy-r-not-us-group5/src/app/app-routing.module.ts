import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToyDetailComponent } from './toy-detail/toy-detail.component';
import { ToysListComponent } from './toys-list/toys-list.component';
import { CartPageComponent } from './cart-page/cart-page.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
