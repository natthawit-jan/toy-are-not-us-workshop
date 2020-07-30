import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToysListComponent } from './toys-list/toys-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToyDetailComponent } from './toy-detail/toy-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ToysListComponent,
    ToyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
