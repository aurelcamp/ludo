import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-manager-games-list',
  templateUrl: './manager-games-list.component.html',
  styleUrls: ['./manager-games-list.component.scss']
})
export class ManagerGamesListComponent implements OnInit {

  games: Game[];

  constructor(
    private apiService: ApiService
  ) { }

  async ngOnInit() {
    this.games = await this.apiService.getManagerGames();
  }

  async deleteGame(game: Game) {
    await this.apiService.deleteGame(game.id);
    this.games = await this.apiService.getManagerGames();
  }

  async returnGame(game: Game) {
    const upadtedGame = await this.apiService.returnGame(game.id);
    this.games = this.games.map((g: Game) => g.id === game.id ? upadtedGame : g);
  }

}
