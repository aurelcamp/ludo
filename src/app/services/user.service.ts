import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$ = new BehaviorSubject<User>(null);
  user: User;

  constructor(
    private apiService: ApiService,
  ) { }

  async getLoggedInUser() {
    this.user = await this.apiService.getLoggedInUser();
    this.user$.next(this.user);
    return this.user;
  }

  reset() {
    this.user = null;
    this.user$.next(null);
  }

  isManager(user: User) {
    return user && user.roles.includes('ROLE_MANAGER');
  }

}
