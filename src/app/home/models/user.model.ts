/**
 * The user model object
 * @export
 * @class UserModel
 */
export class UserModel {
    /**
     * The user's _id
     * @type {string}
     * @memberof UserModel
     */
    _id: string;
    /**
     * The username
     * @type {string}
     * @memberof UserModel
     */
    username: string;
    /**
     * The user's role in lucioleApp
     * @type {string}
     * @memberof UserModel
     */
    role: string;
    /**
     * The user's tagname
     * @type {string}
     * @memberof UserModel
     */
    userTag: string;
    /**
     * The user's lang
     * @type {string}
     * @memberof UserModel
     */
    userLang: string;
    /**
     * The user's current token
     * @type {string}
     * @memberof UserModel
     */
    token: string;
}
