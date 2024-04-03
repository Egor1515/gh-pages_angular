import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ALL_TAIGA_UI_MODULES } from '../all-taiga-modules';
import { TuiButtonModule } from '@taiga-ui/core';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TuiButtonModule
  ]
  , exports: [HeaderComponent]
})
export class HeaderModule { }
