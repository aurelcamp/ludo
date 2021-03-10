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
  testimonies: any[];

  nbGames: number = 0;

  showNewsletter = false;
  newsletterEmail = '';

  data = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ]

  constructor(
    public userService: UserService,
    private apiService: ApiService,
  ) { }

  async ngOnInit() {
    // this.stats = await this.apiService.getStats();
    this.stats = await this.apiService.getFakeStats();

    this.games = await this.apiService.getFakeGames();

    this.testimonies = await this.apiService.geFakeTestimonies();
    console.log(this.testimonies);


    this.nbGames = this.stats.categories
    console.log(this.stats);
  }

  inscriptionToNewsletter() {
    console.log(this.newsletterEmail);
  }

}
