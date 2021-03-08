import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stats: any;
  games: Game[];

  nbGames: number = 0;

  constructor(
    public userService: UserService,
    private apiService: ApiService,
  ) { }

  async ngOnInit() {
    // this.stats = await this.apiService.getStats();
    this.stats = await this.apiService.getFakeStats();

    this.games = await this.apiService.getFakeGames();
    

    this.nbGames = this.stats.categories
    console.log(this.stats);
  }

}
