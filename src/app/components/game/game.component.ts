import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() game: Game;

  @Output() reserveEvent = new EventEmitter<Game>();

  constructor() { }

  ngOnInit(): void {
  }

}
