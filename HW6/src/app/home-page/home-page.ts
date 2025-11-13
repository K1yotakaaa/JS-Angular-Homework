import { Component, HostListener, OnInit } from '@angular/core';
import { Movie, movies } from '../movies';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, FormsModule, CommonModule, RouterLinkActive],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  allMovies: Movie[] = movies;
  featuredMovies: Movie[] = [];
  trendingMovies: Movie[] = [];
  newReleases: Movie[] = [];
  activeIndex: number = 0;

  isScrolled = false;
  isHidden = false;
  private lastScrollTop = 0;

  ngOnInit() {
    this.featuredMovies = this.allMovies.filter((m) =>
      [
        'The Little Mermaid',
        '65',
        'Translator',
        'The Black Demon',
        'The Thing',
      ].includes(m.name)
    );

    this.trendingMovies = this.getHighestMovies().slice(0, 7);
    this.newReleases = this.allMovies.slice(8, 15);

    this.setupScrollTransitions();
  }

  scrollCategory(category: string, direction: number) {
    const container = document.getElementById(`scroll-${category}`);
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });
    }
  }

  openMovie(link: string) {
    window.open(link, '_blank');
  }

  setupScrollTransitions() {
    let ticking = false;

    const updateTransition = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const banner = document.querySelector('.banner') as HTMLElement;
      const topMovie = document.querySelector('.top-movie') as HTMLElement;

      if (!banner || !topMovie) return;

      const bannerBottom = banner.offsetTop + banner.offsetHeight;
      const triggerPoint = bannerBottom - windowHeight * 0.4;

      if (scrollY > triggerPoint) {
        banner.classList.add('fade-out');
        topMovie.classList.add('fade-in');
      } else {
        banner.classList.remove('fade-out');
        topMovie.classList.remove('fade-in');
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateTransition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  get activeMovie() {
    return this.featuredMovies[this.activeIndex];
  }

  setActiveMovie(index: number) {
    this.activeIndex = index;
  }

  getClass(index: number): string {
    const total = this.featuredMovies.length;
    const diff = (index - this.activeIndex + total) % total;

    if (diff === 0) return 'active';
    else if (diff === 1) return 'right1';
    else if (diff === 2) return 'right2';
    else if (diff === total - 1) return 'left1';
    else if (diff === total - 2) return 'left2';
    else return 'far';
  }

  constructor(public authService: AuthService) {
    this.allMovies.forEach((f) => {
      f.check_duration = f.duration <= 10 ? 'h' : 'min';
    });
  }

  logout(): void {
    this.authService.logout();
  }

  getFirstGenre(genre: string): string {
    return genre.split(',')[0].trim();
  }

  getHighestMovies() {
    return this.allMovies.filter((h) => h.rating >= 8);
  }

  getTopRatedMovie() {
    if (!this.allMovies || this.allMovies.length === 0) return null;
    return this.allMovies.reduce((prev, current) =>
      prev.rating > current.rating ? prev : current
    );
  }

  flipCard(event: Event) {
    const card = event.currentTarget as HTMLElement;
    card.classList.toggle('flipped');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    this.isScrolled = currentScroll > 50;

    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      this.isHidden = true;
    } else if (currentScroll < this.lastScrollTop) {
      this.isHidden = false;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
