import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { HeaderModule } from '../header/header.module';
import { TuiButtonModule, TuiErrorModule, TuiHintModule, TuiLoaderModule } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    HeaderModule, FormsModule, CommonModule, TuiButtonModule, TuiInputPasswordModule, TuiInputModule, ReactiveFormsModule,TuiLoaderModule, TuiHintModule,TuiErrorModule
  ],
  exports: [LoginPageComponent]
})
export class LoginPageModule { }
