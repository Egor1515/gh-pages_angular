import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListModule } from './course-list/course-list.module';
import { ALL_TAIGA_UI_MODULES } from "./all-taiga-modules";
import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from "./header/header.module";
import { SearchSectionModule } from "./search-section/search-section.module";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseListModule,
    BrowserAnimationsModule,
    FooterModule, 
    HeaderModule,
     SearchSectionModule,
    ALL_TAIGA_UI_MODULES
  ],
  providers: [
    provideClientHydration(),
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
