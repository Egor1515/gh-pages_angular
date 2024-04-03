import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSectionComponent } from './search-section.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiIconModule } from '@taiga-ui/experimental';


@NgModule({
  declarations: [SearchSectionComponent],
  imports: [
    CommonModule,
    TuiInputModule,
    TuiButtonModule,
    TuiIconModule
  ],
  exports: [SearchSectionComponent]
})
export class SearchSectionModule { }
