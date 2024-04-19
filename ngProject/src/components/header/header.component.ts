import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent implements OnInit {
  getUserDisplayName: string = ''
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.displayName()
  }

  async displayName() {
    if (this.authService.isAuthorized()) {
      const userLogin = this.authService.getUserInfo()
      if (userLogin) {
        const storedName = localStorage.getItem(userLogin)
        if (storedName) {
          this.getUserDisplayName = userLogin
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
    this.getUserDisplayName = ''
    console.log('Logged out successfully')
  }


}
