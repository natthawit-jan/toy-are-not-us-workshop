import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToyDetailComponent } from './toy-detail/toy-detail.component';
import { ToysListComponent } from './toys-list/toys-list.component';

const routes: Routes = [
  { path: '', component: ToysListComponent },
  {
    path: 'toy-detail/:id',
    component: ToyDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
