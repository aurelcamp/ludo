import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserForm } from 'src/app/models/forms/user-form';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: UserForm;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = new UserForm();
  }

  async validate() {
    try {
      await this.apiService.createUser(this.user);
      this.authService.login(this.user.email, this.user.password);
    } catch (e) {
      console.log(e);
    }
  }

}
