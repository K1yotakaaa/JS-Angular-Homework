import { Component } from '@angular/core';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  username = '';
  password = '';
  email = '';
  errorMessage = '';
  isSignupMode = false;

  constructor(private authService: AuthService, private router: Router) {}

  toggleMode() {
    this.isSignupMode = !this.isSignupMode;
    this.errorMessage = '';
  }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/home']),
      error: () => (this.errorMessage = 'Invalid username or password.'),
    });
  }

  onRegister() {
    this.authService
      .register(this.username, this.password)
      .subscribe({
        next: () => {
          alert('Account created successfully!');
          this.toggleMode();
          this.router.navigate(['/'])
        },
        error: () => (this.errorMessage = 'Registration failed. Try again.'),
      });
  }
}
