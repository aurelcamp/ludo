import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-manager-add-game',
  templateUrl: './manager-add-game.component.html',
  styleUrls: ['./manager-add-game.component.scss']
})
export class ManagerAddGameComponent implements OnInit {

  game: Game = new Game();

  tags = ['reflexion', 'Entre amis', 'Solo'];

  categories = ['Puzzle', 'Jeu de plateau', 'Jeu de réflexion', 'Jeu de carte'];

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.game.category = this.categories[0];
  }

  onTagSelected(tag: string) {
    if (!this.game.tags.includes(tag)) {
      this.game.tags.push(tag);
    }
  }

  removeTag(tag: string) {
    this.game.tags = this.game.tags.filter((t: string) => t !== tag);
  }

  async validate() {
    await this.apiService.addGame(this.game);
    this.router.navigate(['/manager-games-list']);
  }

}
