import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HeadingComponent } from './heading/heading.component';
import { SearchComponent } from './search/search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ReviewComponent } from './review/review.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { TeacherUserComponent } from './teacher-user/teacher-user.component';
import { DirectoryComponent } from './directory/directory.component';
import { AdminStatsComponent } from './admin-stats/admin-stats.component';
import { RatingsComponent } from './ratings/ratings.component';
import { LoginComponent } from './login/login.component';


// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

// Firebase module
import {AngularFireModule} from 'angularfire2';

// Chart module
import {ChartsModule} from 'ng2-charts';
import { LogininlineComponent } from './logininline/logininline.component';
import { RedirectorComponent } from './redirector/redirector.component';

//List of Pages for Web App
const appRoutes: Routes = [
  //{path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search', component: SearchComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'course', component: CourseComponent},
  {path: 'login', component: LoginComponent},
  {path: 'redirector', component: RedirectorComponent},
  {path: 'student', component: StudentComponent},
  {path: 'directory', component: DirectoryComponent},
  {path: 'user/teacher/:id', component: TeacherUserComponent},
  {path: 'student', component: StudentComponent},
  {path: 'admin-stats', component: AdminStatsComponent}
];

const firebaseConfig = {
    apiKey: "AIzaSyD2kGVPn63jJrCgutx6xe-Wz6G7y0g3Zcg",
    authDomain: "eval-project-193719.firebaseapp.com",
    databaseURL: "https://eval-project-193719.firebaseio.com",
    projectId: "eval-project-193719",
    storageBucket: "eval-project-193719.appspot.com",
    messagingSenderId: "514918028527"
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    HeadingComponent,
    SearchComponent,
    SearchBarComponent,
    DirectoryComponent,
    ReviewComponent,
    CourseComponent,
    RatingsComponent,
    LoginComponent,
    StudentComponent,
    TeacherUserComponent,
    StudentComponent,
    DirectoryComponent,
    AdminStatsComponent,
    LogininlineComponent,
    RedirectorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <- For Debugging
    ),
    FormsModule,
    HttpClientModule,
    ChartsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
