import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly url = 'https://localhost:44323/api/accounts/';

  constructor(private http: HttpClient) { }

  get isAuthanticated() {
    return !!localStorage.getItem('token');
  }

  register(user: User) {
    return this.http.post<any>(this.url + 'register/', user);
  }

  login(user: User) {
    return this.http.post<any>(this.url + 'login/', user);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
