import { Component, inject } from '@angular/core';
import { AuthService } from './../../core/guards/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  authService = inject(AuthService);
  router = inject(Router)
  logOut() {
    this.authService.removeToken();
    this.router.navigate(['login'])
 }
}