import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-service';
import { Movie } from '../movies';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit {
  movies: Movie[] = [];
  loading = true;

  constructor(private movieService: MovieService) {
    this.movies.forEach((m) => {
      m.check_duration = m.duration <= 10 ? 'h' : 'min';
    });
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        this.movies = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading movies:', err);
        this.loading = false;
      },
    });
  }

  searchInput: string = '';

  get searchedMoveis() {
    const search = this.searchInput.toLowerCase();
    return this.movies.filter((s) => s.name.toLowerCase().includes(search));
  }
}
