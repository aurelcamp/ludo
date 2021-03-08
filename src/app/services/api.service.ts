import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserForm } from '../models/forms/user-form';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getHeaders() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'x-domain': 'aurelcamp',
    });

    const token = localStorage.getItem('userApiToken');
    if (token) {
      // headers.set('x-auth-token', token);
      headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'x-domain': 'aurelcamp',
        'x-auth-token': token,
      });
    }

    return headers;
  }

  async createUser(user: UserForm) {
    return this.http.post<User>(`${environment.apiUrl}/users`, user, { headers: this.getHeaders() }).toPromise();
  }

  async login(email: string, password: string) {
    return this.http.post(`${environment.apiUrl}/login`, { username: email, password: password }, { headers: this.getHeaders() }).toPromise();
  }

  getLoggedInUser(): Promise<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/logged-in`, { headers: this.getHeaders() }).toPromise();
  }

  getManagerGames(): Promise<Game[]> {
    return this.http.get<Game[]>(`${environment.apiUrl}/manager/games`, { headers: this.getHeaders() }).toPromise();
  }

  getAllGames(): Promise<Game[]> {
    return this.http.get<Game[]>(`${environment.apiUrl}/games`, { headers: this.getHeaders() }).toPromise();
  }

  addGame(game: Game): Promise<Game> {
    return this.http.post<Game>(`${environment.apiUrl}/games`, game, { headers: this.getHeaders() }).toPromise();
  }

  deleteGame(gameId: number) {
    return this.http.delete(`${environment.apiUrl}/games/${gameId}`, { headers: this.getHeaders() }).toPromise();
  }

  reserveGame(gameId: number) {
    return this.http.post<Game>(`${environment.apiUrl}/games/${gameId}/reserve`, {}, { headers: this.getHeaders() }).toPromise();
  }

  returnGame(gameId: number) {
    return this.http.post<Game>(`${environment.apiUrl}/games/${gameId}/return`, {}, { headers: this.getHeaders() }).toPromise();
  }

  getStats() {
    return this.http.get(`${environment.apiUrl}/open/get-stats`, { headers: this.getHeaders() }).toPromise();
  }

  getFakeStats() {
    return this.http.get(`${environment.apiUrl}/open/get-fake-stats`, { headers: this.getHeaders() }).toPromise();
  }

  getFakeGames(): Promise<Game[]> {
    return this.http.get<Game[]>(`${environment.apiUrl}/open/get-fake-games`, { headers: this.getHeaders() }).toPromise();
  }
}
