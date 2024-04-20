import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.less'
})
export class LoginPageComponent {

  constructor(private auth: AuthService, private router: Router) { }

  email!: string
  password!: string
  showLoader!: boolean

  onLogin(event?: Event) {
    if(event){
      event.preventDefault()
    }
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
}
