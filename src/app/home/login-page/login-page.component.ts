import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This component is used as a container for the login page
 * @export
 * @class LoginPageComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'lu-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  /**
   * Creates an instance of LoginPageComponent.
   * @param {Router} router The router service to use
   * @memberof LoginPageComponent
   */
  constructor(private router: Router) {
  }

  /**
   * Initialize the component
   * @memberof LoginPageComponent
   */
  ngOnInit() {
  }

  /**
   * Authenticate the user
   * @memberof LoginPageComponent
   */
  authenticate() {
    // TODO: LOGIN HERE
    this.router.navigate(['/']);
  }

}
