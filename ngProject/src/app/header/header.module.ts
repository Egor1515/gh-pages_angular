import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiIconModule } from '@taiga-ui/experimental';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, TuiButtonModule, TuiIconModule, TuiLinkModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
