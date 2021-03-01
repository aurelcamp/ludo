import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  user: User;
  isManager = false;
  userSubscription: Subscription;

  constructor(
    public userService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe((user: User) => {
      this.user = user;
      this.isManager = this.userService.isManager(user);
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }

}
