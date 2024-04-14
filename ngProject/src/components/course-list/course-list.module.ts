import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiIconModule, TuiTitleModule } from '@taiga-ui/experimental';
import { TuiBadgeModule, TuiIslandModule, TuiLineClampModule, TuiMarkerIconModule } from '@taiga-ui/kit';
import { TimeFormatPipe } from '../../pipes/time-format.pipe';
import { SearchSectionModule } from '../search-section/search-section.module';
import { BorderHighLighterDirective } from '../../directives/border-high-lighter.directive';


@NgModule({
  declarations: [CourseListComponent,TimeFormatPipe,BorderHighLighterDirective],
  imports: [CommonModule, TuiButtonModule, TuiIconModule, TuiBadgeModule, TuiIslandModule, TuiBadgeModule, TuiLineClampModule, TuiIslandModule,SearchSectionModule, TuiMarkerIconModule, TuiTitleModule],
  exports: [CourseListComponent]
})
export class CourseListModule { }
