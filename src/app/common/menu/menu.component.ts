import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Luciole Menu component for nav
 * @export
 * @class MenuComponent
 */
@Component({
  selector: 'lu-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  /**
   * Creates an instance of MenuComponent.
   * @param {Router} router The router service to use
   * @memberof MenuComponent
   */
  constructor(private router: Router) {
  }

  /**
   * Log out of the application, redirect to menu too
   * @param {any} event The event concerned
   * @memberof MenuComponent
   */
  logout(event) {
    event.preventDefault();
    // TODO: LOGOUT HERE
    this.router.navigate(['/login']);
  }
}
