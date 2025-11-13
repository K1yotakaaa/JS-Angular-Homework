import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie-service';
import { Movie } from '../movies';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-details.html',
  styleUrls: ['./movie-details.css'],
})
export class MovieDetails implements OnInit {
  movieId!: number;
  movie!: Movie;
  similarMovies: Movie[] = [];
  loading = true;
  errorMessage: string = '';
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('movieID');
      if (!idParam) {
        this.notFound = true;
        this.loading = false;
        return;
      }
      this.movieId = +idParam;
      this.loadMovie();
    });
  }

  loadMovie(): void {
    this.loading = true;
    this.errorMessage = '';
    this.notFound = false;

    this.movieService.getMovieById(this.movieId).subscribe({
      next: (data) => {
        this.movie = data;
        this.loadSimilarMovies();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to fetch movie:', err);
        this.errorMessage =
          'Failed to load movie details. Please try again later.';
        this.loading = false;
        if (err.status === 404) this.notFound = true;
        this.cdr.detectChanges();
      },
    });
  }

  loadSimilarMovies(): void {
    this.movieService.getMovies().subscribe({
      next: (allMovies) => {
        const filtered = allMovies.filter((m) => m.id !== this.movieId);
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        this.similarMovies = shuffled.slice(0, 2);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to fetch similar movies:', err);
      },
    });
  }

  goBack(): void {
    this.location.back();
  }

  openMovieDetails(id: number): void {
    this.router.navigate(['/details', id]);
  }
}
