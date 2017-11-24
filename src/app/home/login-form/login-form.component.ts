import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDaoService } from '../services/dao/user-dao.service';
import { Router } from '@angular/router';

/**
 * Login form component, used to log the user in
 * @export
 * @class LoginFormComponent
 */
@Component({
  selector: 'lu-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  /**
   * The Login input
   * @type {FormControl}
   * @memberof LoginFormComponent
   */
  loginCtrl: FormControl;
  /**
   * The password input
   * @type {FormControl}
   * @memberof LoginFormComponent
   */
  passwordCtrl: FormControl;
  /**
   * The login form
   * @type {FormGroup}
   * @memberof LoginFormComponent
   */
  loginForm: FormGroup;
  /**
   * True if the authentication to backend has failed
   * @type {boolean}
   * @memberof LoginFormComponent
   */
  authenticationFailed: boolean;

  /**
   * Creates an instance of LoginFormComponent.
   * @param {FormBuilder} fb The form builder to use
   * @param {UserDaoService} userDaoService The userDaoService to use
   * @memberof LoginFormComponent
   */
  constructor(fb: FormBuilder, private userDaoService: UserDaoService, private router: Router) {
    this.loginCtrl = fb.control('', [Validators.required, Validators.email]);
    this.passwordCtrl = fb.control('', [Validators.required]);
    this.loginForm = fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl
    });
  }

  /**
   * Authenticate the user
   * @memberof LoginFormComponent
   */
  authenticate() {
    const login = this.loginForm.get('login').value;
    const password = this.loginForm.get('password').value;
    this.userDaoService.authenticate(login, password)
      .subscribe(() => {
        this.router.navigate(['/']);
      }, () => {
        this.authenticationFailed = true;
      });
  }

}
