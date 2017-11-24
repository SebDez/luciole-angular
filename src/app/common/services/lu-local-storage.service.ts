import { Injectable } from '@angular/core';

/**
 * The service used to manage data in local storage
 * @export
 * @class LuLocalStorageService
 */
@Injectable()
export class LuLocalStorageService {

  /**
   * The prefix to use to save/get data
   * @memberof LuLocalStorageService
   */
  prefix = 'lu-';

  /**
   * Creates an instance of LuLocalStorageService.
   * @memberof LuLocalStorageService
   */
  constructor() { }

  /**
   * Get data from local storage
   * @param {string} key The key to use
   * @returns Data from local storage
   * @memberof LuLocalStorageService
   */
  get(key: string) {
    const storeKey = this.getStoreKey(key);
    return window.localStorage.getItem(storeKey);
  }

  /**
   * Set data to localstorage
   * @param {string} key The key to use
   * @param {any} valueJson The JSON value to save
   * @memberof LuLocalStorageService
   */
  set(key: string, valueJson) {
    const storeKey = this.getStoreKey(key);
    window.localStorage.setItem(storeKey, JSON.stringify(valueJson));
  }

  /**
   * Remove data from local storage
   * @param {string} key The key to use
   * @memberof LuLocalStorageService
   */
  remove(key: string) {
    const storeKey = this.getStoreKey(key);
    window.localStorage.removeItem(storeKey);
  }

  /**
   * Get the final store key value to use to access data
   * @param {string} key The key to use
   * @returns The final store key value
   * @memberof LuLocalStorageService
   */
  getStoreKey(key: string) {
    return `${this.prefix}${key}`;
  }

}
