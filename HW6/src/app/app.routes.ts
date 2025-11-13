import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { MovieList } from './movie-list/movie-list';
import { AnimeList } from './anime-list/anime-list';
import { Favorites } from './favorites/favorites';
import { MovieDetails } from './movie-details/movie-details';
import { Login } from './login/login';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'movie',
    component: MovieList,
  },
  {
    path: 'anime',
    component: AnimeList,
  },
  {
    path: 'favorites',
    component: Favorites,
    canActivate: [AuthGuard],
  },
  {
    path: 'details/:movieID',
    component: MovieDetails,
  },
  {
    path: 'login',
    component: Login,
  },
];
