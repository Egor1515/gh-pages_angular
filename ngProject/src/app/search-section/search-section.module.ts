import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSectionComponent } from './search-section.component';



@NgModule({
  declarations: [SearchSectionComponent],
  imports: [
    CommonModule
  ],
  exports:[SearchSectionComponent]
})
export class SearchSectionModule { }
