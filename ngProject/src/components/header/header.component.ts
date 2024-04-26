import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  userDisplayName: string = ''
  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  ngOnInit(): void {
    this.displayName()
  }

  displayName() {
    if (!this.authService.isAuthorized()) {
      return false
    }

    const userLogin = this.authService.getUserInfo();
    if (!userLogin) {
      return false
    }

    const storedName = localStorage.getItem(userLogin);
    if (!storedName) {
      return false
    }
    this.userDisplayName = userLogin

    return this.userDisplayName
  }
  navigateHomePage(){
    return '/home'
  }

  logout() {
    this.authService.logout()
    this.userDisplayName = ''
    console.log('Logged out successfully')
  }

  getRouterLink() {
    if (this.userDisplayName) {
      return ''
    }
    return '/login'
  }
}
