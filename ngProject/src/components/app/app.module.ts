import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TUI_SANITIZER, TuiButtonModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListModule } from '../course-list/course-list.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { SearchSectionModule } from '../search-section/search-section.module';
import { FormsModule } from '@angular/forms';
import { LoginPageModule } from '../login-page/login-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseListModule,
    BrowserAnimationsModule,
    FooterModule,
    HeaderModule,
    SearchSectionModule,
    TuiRootModule,
    FormsModule,
    TuiButtonModule,
    LoginPageModule,
    TuiDialogModule,
    TuiRootModule,
  ],
  providers: [provideClientHydration(), { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },],
  bootstrap: [AppComponent],
})
export class AppModule { }
