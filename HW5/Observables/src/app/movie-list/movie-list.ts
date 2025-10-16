import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../movie-service';
import { Movie } from '../movies';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit, OnDestroy {
  movies: Movie[] = [];
  loading = true;

  private searchSubject = new Subject<string>();
  private subscription!: Subscription;

  constructor(private movieService: MovieService) {}

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

    this.subscription = this.searchSubject
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
        switchMap((query) => {
          this.loading = true;
          return this.movieService.searchMovies(query);
        })
      )
      .subscribe({
        next: (data) => {
          this.movies = data;
          this.addDurationLabels();
          this.loading = false;
        },
        error: (err) => {
          console.error('Error searching movies:', err);
          this.loading = false;
        },
      });
  }

  onSearchChange(value: string): void {
    this.searchSubject.next(value);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private addDurationLabels(): void {
    this.movies.forEach((m) => {
      m.check_duration = m.duration <= 10 ? 'h' : 'min';
    });
  }

  /* 
  searchInput: string = '';

  get searchedMoveis() {
    const search = this.searchInput.toLowerCase();
    return this.movies.filter((s) => s.name.toLowerCase().includes(search));
  }
  */
}
