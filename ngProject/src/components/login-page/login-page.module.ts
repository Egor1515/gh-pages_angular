import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { HeaderModule } from '../header/header.module';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    HeaderModule,CommonModule, TuiButtonModule, TuiInputPasswordModule, TuiInputModule
  ], 
  exports: [LoginPageComponent]
})
export class LoginPageModule { }
