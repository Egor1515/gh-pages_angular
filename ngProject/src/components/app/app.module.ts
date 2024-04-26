import { TuiButtonModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListModule } from '../course-list/course-list.module';
import { FormsModule } from '@angular/forms';
import { LoginPageModule } from '../login-page/login-page.module';
import { CoursesPageModule } from '../CoursesPage/CoursesPage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseListModule,
    BrowserAnimationsModule,
    TuiRootModule,
    CoursesPageModule,
    FormsModule,
    TuiButtonModule,
    LoginPageModule,
    TuiDialogModule,
    TuiRootModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
