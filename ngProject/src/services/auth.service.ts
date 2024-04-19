import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
  private currentUser: string | null = null
  constructor() { }

  login(userLogin: string) {
    if (userLogin.trim()) {
      this.currentUser = userLogin
      localStorage.setItem(this.currentUser, this.fakeToken)
      return
    }
    console.error(`No login was provided`)
  }

  logout() {
    if (this.currentUser) {
      localStorage.removeItem(this.currentUser)
      this.currentUser = null
    }
  }

  isAuthorized(): boolean {
    console.log(this.currentUser)
    if (this.currentUser) {
      console.log(this.currentUser)
      return !!localStorage.getItem(this.currentUser)
    }
    return false
  }

  getUserInfo(): string | null {
    return this.currentUser
  }


}
