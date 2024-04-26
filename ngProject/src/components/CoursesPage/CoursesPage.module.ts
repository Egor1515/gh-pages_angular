import { NgModule } from "@angular/core";
import { CoursesPageComponent } from "./CoursesPage.component";
import { CommonModule } from "@angular/common";
import { FooterModule } from "../footer/footer.module";
import { HeaderModule } from "../header/header.module";
import { SearchSectionModule } from '../search-section/search-section.module';
import { CourseListModule } from "../course-list/course-list.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [CoursesPageComponent],
    imports: [
        CommonModule,
        RouterModule,
        FooterModule,
        HeaderModule,
        SearchSectionModule,
        CourseListModule,
    ],
    exports: [CoursesPageComponent]
})
export class CoursesPageModule {

}