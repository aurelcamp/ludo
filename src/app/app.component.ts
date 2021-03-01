import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) {
    setTheme('bs4');
  }

  ngOnInit() {
    if (localStorage.getItem('userApiToken')) {
      this.userService.getLoggedInUser();
    }
  }
  
}
