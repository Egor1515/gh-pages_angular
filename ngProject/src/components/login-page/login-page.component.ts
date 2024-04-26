import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.less'
})
export class LoginPageComponent {

  constructor(private readonly auth: AuthService, private readonly router: Router) { }

  testForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  disabled = !this.testForm.get('email')?.value || !this.testForm.get('password')?.value
  email: string | null | undefined = ''
  password: string | null | undefined = ''
  showLoader!: boolean

  onLogin(event?: Event) {
    if (event) {
      event.preventDefault()
    }
    if (this.testForm.invalid) {
      return
    }

    this.email = this.testForm.value.email;
    this.password = this.testForm.value.password;

    this.auth.login(this.email)

    if (this.auth.isAuthorized()) {
      this.showLoader = true
      //Добавил для себя, для визуального эффекта - сейчас хочу сделать лоадер для имитации
      //Cейчас есть самый простой лоадер в login-page
      setTimeout(() => {
        this.router.navigate(['/courses'])
        console.log('Logged in successfully')
      }, 3000);
    }
  }

  showErrorMesage() {

  }
}
