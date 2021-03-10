import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/models/game';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() game: Game;

  showReservationButton = false;

  constructor(
    private userService: UserService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    console.log(this.game);

    this.userService.user$.subscribe((user: User) => {
      this.showReservationButton = !!user;
    })
  }

  async reserve(game: Game) {
    await this.apiService.reserveGame(game.id);
    game.isReserved = true;
  }

}
