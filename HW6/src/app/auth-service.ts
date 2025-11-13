import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  username: string;
  is_user: boolean;
  is_admin: boolean;
  exp: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://movielab-backend.up.railway.app/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/login/`, { username, password })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('access', response.access);
          localStorage.setItem('refresh', response.refresh);
        })
      );
  }

  register(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.baseUrl}/register/`, body);
  }

  getUserData(): JwtPayload | null {
    const token = localStorage.getItem('access');
    if (!token) return null;

    try {
      return jwtDecode<JwtPayload>(token);
    } catch (e) {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access');
  }

  isUser(): boolean {
    const user = this.getUserData();
    return user ? user.is_user : false;
  }

  isAdmin(): boolean {
    const user = this.getUserData();
    return user ? user.is_admin : false;
  }

  logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    this.router.navigate(['/home']);
  }
}
