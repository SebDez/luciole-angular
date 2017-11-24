import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { UserDaoService } from '../../home/services/dao/user-dao.service';
import { UserModel } from '../../home/models/user.model';

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
export class MenuComponent implements OnInit {

  /**
   * Subscriber to user events
   * @type {Subscription}
   * @memberof MenuComponent
   */
  userEventsSubscriber: Subscription;
  /**
   * The user's datas
   * @type {UserModel}
   * @memberof MenuComponent
   */
  user: UserModel;

  /**
   * Creates an instance of MenuComponent.
   * @param {Router} router The router service to use
   * @memberof MenuComponent
   */
  constructor(private router: Router, private userDaoService: UserDaoService) {
  }

  /**
   * On component initialization
   * @memberof MenuComponent
   */
  ngOnInit() {
    this.userEventsSubscriber = this.userDaoService.userEventEmitter
      .subscribe(user => {
        this.user = user;
      });
  }

  /**
   * Log out of the application, redirect to menu too
   * @param {any} event The event concerned
   * @memberof MenuComponent
   */
  logout(event) {
    event.preventDefault();
    this.userDaoService.logout();
    this.router.navigate(['/login']);
  }
}
