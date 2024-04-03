import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ALL_TAIGA_UI_MODULES } from '../all-taiga-modules';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ALL_TAIGA_UI_MODULES
  ]
  , exports: [HeaderComponent]
})
export class HeaderModule { }
