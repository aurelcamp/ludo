import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  async login() {
    try {
      await this.authService.login(this.email, this.password);
    } catch(e) {
      console.log(e);
    }
  }

}
