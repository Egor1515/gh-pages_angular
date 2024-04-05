import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, TuiButtonModule],
  exports: [FooterComponent],
})
export class FooterModule {}
