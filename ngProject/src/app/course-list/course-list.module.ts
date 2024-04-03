import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiIconModule } from '@taiga-ui/experimental';
import { TuiBadgeModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule, TuiButtonModule, TuiIconModule,TuiBadgeModule
  ],
  exports: [CourseListComponent]
})
export class CourseListModule { }
