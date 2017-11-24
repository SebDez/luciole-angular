import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { UserModel } from '../../models/user.model';
import { MockHelperService } from '../../../common/services/mock-helper.service';

/**
 * Mock for the user api service, return fake data
 * @export
 * @class UserMockApiService
 */
@Injectable()
export class UserMockApiService {
  /**
   * Creates an instance of UserMockApiService.
   * @memberof UserMockApiService
   */
  constructor(private mockHelper: MockHelperService) { }

  /**
   * MOCK for real api authenticate method
   * @param {string} login The login to use
   * @param {string} password The password to use
   * @returns {Observable} An observable to subscribe
   * @memberof UserMockApiService
   */
  authenticate(login: string, password: string): Observable<UserModel> {
    const fakeUser: UserModel = {
      _id: this.mockHelper.getRandomId(),
      username: this.mockHelper.getRandomSentence(2),
      role: this.mockHelper.getRandomWord(),
      userTag: this.mockHelper.getRandomWord(),
      userLang: this.mockHelper.getRandomCountry(),
      token: this.mockHelper.getRandomWord()
    };
    return Observable.of(fakeUser);
  }

} /* istanbul ignore next */
