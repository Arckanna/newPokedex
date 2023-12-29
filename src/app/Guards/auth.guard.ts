import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        console.log('User is logged in');
        return true;
      } else {
        this.router.navigate(['/login']);
        console.log('User is not logged in');
        return false;
      }
    });
  }
}