import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-game',
  templateUrl: './search-game.component.html',
  styleUrls: ['./search-game.component.scss']
})
export class SearchGameComponent implements OnInit {

  categories = ['Puzzle', 'Jeu de plateau', 'Jeu de réflexion', 'Jeu de carte'];

  games: Game[];
  gamesDisplayed: Game[];

  constructor(
    private apiService: ApiService
  ) { }

  async ngOnInit() {
    this.games = await this.apiService.getAllGames();
    // this.games = await this.apiService.getFakeGames();
    this.gamesDisplayed = JSON.parse(JSON.stringify(this.games));

    console.log(this.games);
  }

  onCategorySelected(category: string) {
    if (category == '') {
      this.gamesDisplayed = this.games;
    } else {
      this.gamesDisplayed = this.games.filter((game: Game) => game.category === category);
    }
  }

}
