import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stats: any;

  constructor(
    public userService: UserService,
    private apiService: ApiService,
  ) { }

  async ngOnInit() {
    this.stats = await this.apiService.getStats();
    console.log(this.stats);
  }

}
