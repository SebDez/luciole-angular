import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/**
 * The interceptor to use to add access_token to http requests
 * @export
 * @class AuthInterceptorService
 */
@Injectable()
export class AuthInterceptorService {

  /**
   * The token property to add to each request
   * @private
   * @type {string}
   * @memberof AuthInterceptorService
   */
  private token: string;

  /**
   * Creates an instance of AuthInterceptorService.
   * @memberof AuthInterceptorService
   */
  constructor() { }

  /**
   * Intercept the httpRequest
   * @param {HttpRequest<any>} req The request to intercept
   * @param {HttpHandler} next The http handler to use
   * @returns {Observable<HttpEvent<any>>} An observable to handle
   * @memberof AuthInterceptorService
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.token) {
      const params = { access_token: `${this.token}` };
      return next.handle(req.clone({ setParams: params }));
    }
    return next.handle(req);
  }

  /**
   * Define new token property value
   * @param {string} token The new value to set
   * @memberof AuthInterceptorService
   */
  setToken(token: string) {
    this.token = token;
  }

  /**
   * Set token property value to null
   * @memberof AuthInterceptorService
   */
  removeToken() {
    this.token = null;
  }

}
