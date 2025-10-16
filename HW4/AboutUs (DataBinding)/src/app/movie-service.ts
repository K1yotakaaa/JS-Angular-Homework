import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl =
    'https://angular-homework-backend.up.railway.app/api/movies/';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }
}
