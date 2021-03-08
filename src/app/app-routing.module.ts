import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ManagerAddGameComponent } from './pages/manager-add-game/manager-add-game.component';
import { ManagerGamesListComponent } from './pages/manager-games-list/manager-games-list.component';
import { SearchGameComponent } from './pages/search-game/search-game.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, },
  { path: 'signup', component: SignupComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'contact', component: ContactComponent, },
  { path: 'search-game', component: SearchGameComponent, },
  { path: 'user-loans', component: SearchGameComponent, },
  { path: 'manager-add-game', component: ManagerAddGameComponent, },
  { path: 'manager-games-list', component: ManagerGamesListComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
