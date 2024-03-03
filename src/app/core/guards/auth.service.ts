import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environment/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWt_TOKEN = 'JWT_TOKEN';
  private loggedUser?: string;
  private IsAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  private http = inject(HttpClient);
  constructor() { }

  login(user: { username: string; password : string}): Observable<any>{ 
    return this.http.post(environment.ApiUrl + '/authenticate', user).pipe(
      tap((response : any) => this.doLoginUser(user.username, response.token)),
    );
  }
  private doLoginUser(username: string, token: any): void {
    this.loggedUser = username;
    this.storeJwtToken(token);
    this.IsAuthenticatedSubject.next(true);
  }
    
  private storeJwtToken(jwt: string): void {
    localStorage.setItem(this.JWt_TOKEN, jwt);
  }

  getCurrentUser() { 
    let token = localStorage.getItem(this.JWt_TOKEN);
    return this.http.get(environment.getuserApiUrl, { headers: { Authorization: `Bearer ${token}` } });
  }

  isLoggedIn(): boolean {
    return this.IsAuthenticatedSubject.value;
  }
  
  logout(): void {
    localStorage.removeItem(this.JWt_TOKEN);
    this.IsAuthenticatedSubject.next(false);
  }
}
