import {
  Component,
  HostListener,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Movie } from '../movies';
import { MovieService } from '../movie-service';

@Component({
  selector: 'app-movie-list',
  imports: [FormsModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css'],
})
export class MovieList implements OnInit {
  isScrolled = false;
  isHidden = false;
  lastScrollTop = 0;

  errorMessage: string = '';
  movieList: Movie[] = [];
  filteredMovies: Movie[] = [];
  loading = true;
  searchInput: string = '';

  category = 1;

  constructor(
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public movieService: MovieService,
    private cdr: ChangeDetectorRef
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = currentScroll > 50;
    this.isHidden =
      currentScroll > this.lastScrollTop && currentScroll > 50 ? true : false;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.searchInput = params.get('q') || '';
      this.loadMovies();
    });
  }

  loadMovies(): void {
    this.loading = true;
    this.errorMessage = '';
    this.movieList = [];
    this.filteredMovies = [];

    this.movieService.getMovies().subscribe({
      next: (data) => {
        this.movieList = data
          .filter((movie) => movie.category === this.category) 
          .map((movie) => ({
            ...movie,
            check_duration: movie.duration <= 10 ? 'h' : 'min',
          }));

        this.applySearchFilter();
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to fetch movies:', err);
        this.errorMessage = 'Failed to load movies. Please try again later.';
        this.loading = false;
        this.movieList = [];
        this.filteredMovies = [];
        this.cdr.detectChanges();
      },
    });
  }

  onSearchInputChange(): void {
    this.router.navigate([], {
      queryParams: { q: this.searchInput },
      queryParamsHandling: 'merge',
    });
    this.applySearchFilter();
  }

  applySearchFilter(): void {
    const search = this.searchInput.toLowerCase();
    this.filteredMovies = this.movieList.filter((movie) =>
      movie.name.toLowerCase().includes(search)
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
