import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserDaoService } from '../services/dao/user-dao.service';
import { Router } from '@angular/router';

/**
 * The guard to make sure that the user is logged in
 * @export
 * @class LoggedInGuard
 * @implements {CanActivate}
 */
@Injectable()
export class LoggedInGuard implements CanActivate {

  /**
   * Creates an instance of LoggedInGuard.
   * @param {Router} router The router to use
   * @param {UserDaoService} userDaoService The user dao service to use
   * @memberof LoggedInGuard
   */
  constructor(private router: Router, private userDaoService: UserDaoService) { }

  /**
   * Determine if the route can be activated
   * @param {ActivatedRouteSnapshot} next The activated route
   * @param {RouterStateSnapshot} state The router state
   * @returns {(Observable<boolean> | Promise<boolean> | boolean)} True if can activate
   * @memberof LoggedInGuard
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const loggedIn = this.userDaoService.isUserLoggedIn();
    if (!loggedIn) {
      this.router.navigate(['/login']);
    }
    return loggedIn;
  }
}
