import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environment/environment';
import { User } from './../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenKey: string = 'my-app-token';
  isLoggedIn = new BehaviorSubject<boolean>(false);
  token$ = new BehaviorSubject<string>('');
  public user: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  // injections
  http: HttpClient = inject(HttpClient);

  constructor() {
    const token = localStorage.getItem(this.tokenKey);
    this.token$.next(token as string);
    if (token) {
      this.isLoggedIn.next(true);
    }
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') as string));
    this.user = this.currentUserSubject.asObservable();
  }
  
  public isAdmin(){
    return this.user && this.currentUserSubject.value.role === "ADMIN";
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  getToken(): string {
    return localStorage.getItem(this.tokenKey) as string;
  }
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.token$.next(token);
    this.isLoggedIn.next(true);
  }
  removeToken(): void { 
    localStorage.removeItem(this.tokenKey);
    this.token$.next('');
    this.isLoggedIn.next(false);
  }

  login(user:User): Observable<User>{
    return this.http.post(`${environment.ApiUrl}authenticate`, user).pipe(
      tap((response: any) => {
        this.setToken(response.jwtToken);
      })
    );
  }

}