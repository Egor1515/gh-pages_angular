import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSectionComponent } from './search-section.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiHintModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiIconModule } from '@taiga-ui/experimental';


@NgModule({
  declarations: [SearchSectionComponent],
  imports: [
    CommonModule,
    TuiInputModule,
    TuiButtonModule,
    TuiIconModule,
    TuiHintModule,
    TuiTextfieldControllerModule
  ],
  exports: [SearchSectionComponent]
})
export class SearchSectionModule { }
