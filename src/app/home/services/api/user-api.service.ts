import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { Observable } from 'rxjs/Observable';

/**
 * The User API used to get data from the backend
 * @export
 * @class UserApiService
 */
@Injectable()
export class UserApiService {

  /**
   * Authenticate the user to the backend
   * @param {string} login The login to use
   * @param {string} password The password to use
   * @returns {Observable} An observable to subscribe
   * @memberof UserApiService
   */
  authenticate(login: string, password: string): Observable<UserModel> {
    return null; // @TODO
  }

}
