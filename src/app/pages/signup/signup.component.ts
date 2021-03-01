import { Component, OnInit } from '@angular/core';
import { UserForm } from 'src/app/models/forms/user-form';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: UserForm;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.user = new UserForm();
  }

  async validate() {
    try {
      const user = await this.apiService.createUser(this.user);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }

}
