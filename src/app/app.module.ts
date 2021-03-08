import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './pages/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ManagerAddGameComponent } from './pages/manager-add-game/manager-add-game.component';
import { ManagerGamesListComponent } from './pages/manager-games-list/manager-games-list.component';
import { SearchGameComponent } from './pages/search-game/search-game.component';
import { UserLoansComponent } from './pages/user-loans/user-loans.component';
import { ChipComponent } from './components/chip/chip.component';
import { GameComponent } from './components/game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    ContactComponent,
    ManagerAddGameComponent,
    ManagerGamesListComponent,
    SearchGameComponent,
    UserLoansComponent,
    ChipComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
