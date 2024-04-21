import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { TuiAlertModule, TuiButtonModule, TuiRootModule } from '@taiga-ui/core';
import { TuiIconModule, TuiTitleModule } from '@taiga-ui/experimental';
import { TuiAvatarModule, TuiBadgeModule, TuiIslandModule, TuiLineClampModule, TuiPromptModule } from '@taiga-ui/kit';
import { TimeFormatPipe } from '../../pipes/timeFormat.pipe';
import { SearchSectionModule } from '../search-section/search-section.module';
import { BorderHighLighterDirective } from '../../directives/border-high-lighter.directive';
import { TuiMoneyModule } from '@taiga-ui/addon-commerce';

@NgModule({
  declarations: [
    CourseListComponent,
    BorderHighLighterDirective,
    TimeFormatPipe
  ],
  imports: [
    TuiRootModule,
    CommonModule,
    TuiButtonModule,
    TuiIconModule,
    TuiBadgeModule,
    TuiIslandModule,
    TuiBadgeModule,
    TuiLineClampModule,
    TuiIslandModule, SearchSectionModule,
    TuiTitleModule, TuiAvatarModule,
    TuiMoneyModule,
    TuiPromptModule,
    TuiAlertModule
  ],
  exports: [CourseListComponent],
})
export class CourseListModule { }
