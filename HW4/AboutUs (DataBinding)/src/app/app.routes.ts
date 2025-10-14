import { Routes } from '@angular/router';
import { About } from './about/about';
import { MovieList } from './movie-list/movie-list';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MovieList
  },
  {
    path: 'about-us',
    component: About
  }
];
