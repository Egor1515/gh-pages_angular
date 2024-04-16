import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListTestHostComponent } from './course-list.test-host.component';
import { CourseListModule } from './course-list.module';

@NgModule({
  declarations: [CourseListTestHostComponent],
  imports: [
    CommonModule, CourseListModule
  ],
  exports: [CourseListTestHostComponent]
})
export class CourseListTestHostModule { }
