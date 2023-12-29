import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;  }

@Injectable({
  providedIn: 'root'
})

export class CanDeactivateGuard implements CanDeactivate<unknown> {
canDeactivate(
  component: CanComponentDeactivate,
  _currentRoute: ActivatedRouteSnapshot,
  _currentState: RouterStateSnapshot,
  _nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate();
  }
}

