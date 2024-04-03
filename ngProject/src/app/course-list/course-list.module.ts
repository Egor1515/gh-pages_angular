import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { SearchSectionModule } from '../search-section/search-section.module';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SearchSectionComponent } from '../search-section/search-section.component';



@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule, FooterModule, HeaderModule, SearchSectionModule
  ],
  exports: [CourseListComponent,FooterComponent,HeaderComponent,SearchSectionComponent]
})
export class CourseListModule { }
