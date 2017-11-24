import { Injectable } from '@angular/core';
import { UserApiService } from '../api/user-api.service';
import { UserMockApiService } from '../mock/user-mock-api.service';
import { UserModel } from '../../models/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LuLocalStorageService } from '../../../common/services/lu-local-storage.service';
import { AuthInterceptorService } from '../../../common/services/auth-interceptor.service';

/**
 * Service used to access user datas
 * @export
 * @class UserDaoService
 */
@Injectable()
export class UserDaoService {

  /**
   * User events emitter
   * @memberof UserDaoService
   */
  public userEventEmitter = new BehaviorSubject<UserModel>(undefined);
  /**
   * The rememberme key for localstorage
   * @private
   * @memberof UserDaoService
   */
  private REMEMBER_ME_KEY = 'rememberMe';

  /**
   * Creates an instance of UserDaoService.
   * @param {UserMockApiService} api The user api to use
   * @memberof UserDaoService
   */
  constructor(private api: UserMockApiService, private localStorageService: LuLocalStorageService,
    private tokenIcptrService: AuthInterceptorService) {
    this.retrieveUser();
  }

  /**
   * Authenticate the user to the backend, define the token in case of success
   * @param {string} login The login to use
   * @param {string} password The password to use
   * @returns {Observable} An observable to subscribe
   * @memberof UserDaoService
   */
  authenticate(login: string, password: string): Observable<UserModel> {
    return this.api.authenticate(login, password)
      .do((user: UserModel) => this.storeLoggedInUser(user));
  }

  /**
   * Store the user-logged-in's data
   * @param {UserModel} user The user logged in
   * @memberof UserDaoService
   */
  storeLoggedInUser(user: UserModel) {
    this.localStorageService.set(this.REMEMBER_ME_KEY, JSON.stringify(user));
    this.tokenIcptrService.setToken(user.token);
    this.userEventEmitter.next(user);
  }

  /**
   * Retrieve the user if he is logged in
   * If he is, set token and user in app
   * @memberof UserDaoService
   */
  retrieveUser() {
    const user = this.localStorageService.get(this.REMEMBER_ME_KEY);
    if (user) {
      const jsonUser = JSON.parse(user);
      this.tokenIcptrService.setToken(jsonUser.token);
      this.userEventEmitter.next(jsonUser);
    }
  }

  /**
   * Log the user out
   * @memberof UserDaoService
   */
  logout() {
    this.localStorageService.remove(this.REMEMBER_ME_KEY);
    this.tokenIcptrService.removeToken();
    this.userEventEmitter.next(null);
  }

  /**
   * Returns if the user is logged in
   * @returns True if the user is logged in
   * @memberof UserDaoService
   */
  isUserLoggedIn() {
    const user = this.localStorageService.get(this.REMEMBER_ME_KEY);
    return !!user;
  }

}
