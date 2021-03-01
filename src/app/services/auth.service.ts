import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private router: Router,
  ) { }

  async login(email: string, password: string) {
    try {
      const data = await this.apiService.login(email, password) as any;
      localStorage.setItem('userApiToken', data.apiToken);
      // this.router.navigate(['/']);
      const user = await this.userService.getLoggedInUser();

      if (this.userService.isManager(user)) {
        this.router.navigate(['/manager-games-list']);
      } else {
        this.router.navigate(['/search-game']);
      }

    } catch(e) {
      throw(e);
    }
  }

  logout() {
    localStorage.removeItem('userApiToken');
    this.userService.reset();
    this.router.navigate(['/']);
  }

}
