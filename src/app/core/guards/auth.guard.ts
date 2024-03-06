import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let routerService = inject(Router);
  let LoggedIn: boolean = false;
  authService.isLoggedIn.subscribe((isLoggedIn:boolean) => {
    LoggedIn = isLoggedIn ;
  });
  if (!LoggedIn) {
    routerService.navigate(['login']);
    return false;
  }
  return true;
};