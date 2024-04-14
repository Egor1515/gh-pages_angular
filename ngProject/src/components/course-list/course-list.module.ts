import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiIconModule } from '@taiga-ui/experimental';
import { TuiBadgeModule, TuiIslandModule, TuiLineClampModule } from '@taiga-ui/kit';
import { TimeFormatPipe } from '../../pipes/time-format.pipe';
import { SearchSectionModule } from '../search-section/search-section.module';


@NgModule({
  declarations: [CourseListComponent,TimeFormatPipe],
  imports: [CommonModule, TuiButtonModule, TuiIconModule, TuiBadgeModule, TuiIslandModule, TuiBadgeModule, TuiLineClampModule, TuiIslandModule,SearchSectionModule],
  exports: [CourseListComponent]
})
export class CourseListModule { }
