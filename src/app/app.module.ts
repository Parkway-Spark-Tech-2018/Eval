import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import {RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { ProfileComponent } from './profile/profile.component';
import { HeadingComponent } from './heading/heading.component';

//List of Pages for Web App
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    HeadingComponent
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
