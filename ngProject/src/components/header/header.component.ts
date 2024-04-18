import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent {
  getUserDisplayName!: string
  constructor(private authService: AuthService) { }

  async displayName() {
    if (this.authService.isAuthorized()) {
      const userLogin = this.authService.getUserInfo()
      if (userLogin) {
        const storedName = localStorage.getItem(userLogin)
        if (storedName) {
          this.getUserDisplayName = storedName
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
    return false
  }

  logout() {
    this.authService.logout()
    console.log('Logged out successfully')
  }

}
