import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import {RouterModule, Routes } from '@angular/router';

//List of Pages for Web App
const appRoutes: Routes = [
  {path: '', component: HomeComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <- For Debugging
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
