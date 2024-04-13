import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiIconModule } from '@taiga-ui/experimental';
import { TuiBadgeModule, TuiIslandModule, TuiLineClampModule } from '@taiga-ui/kit';
import { TimeFormatPipe } from '../time-format.pipe';

@NgModule({
  declarations: [CourseListComponent,TimeFormatPipe],
  imports: [CommonModule, TuiButtonModule, TuiIconModule, TuiBadgeModule, TuiIslandModule, TuiBadgeModule, TuiLineClampModule, TuiIslandModule],
  exports: [CourseListComponent]
})
export class CourseListModule { }
