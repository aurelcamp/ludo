import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-game',
  templateUrl: './search-game.component.html',
  styleUrls: ['./search-game.component.scss']
})
export class SearchGameComponent implements OnInit {

  games: Game[];

  constructor(
    private apiService: ApiService
  ) { }

  async ngOnInit() {
    this.games = await this.apiService.getAllGames();
  }

  async reserveGame(game: Game) {
    const upadtedGame = await this.apiService.reserveGame(game.id);
    this.games = this.games.map((g: Game) => g.id === game.id ? upadtedGame : g);
  }

}
