import {AuthenticationStrategy} from '@loopback/authentication';
import {RedirectRoute, Request} from '@loopback/rest';
import {securityId, UserProfile} from '@loopback/security';

export type accessToken = string
export type UserInfo = {
  id: string
}
export class BasicAuthenticationStrategy implements AuthenticationStrategy {
  name: string = 'basic';
  private userService: MyUserService = new MyUserService()
  constructor() { }

  async authenticate(request: Request): Promise<UserProfile | RedirectRoute | undefined> {
    const credentials: accessToken = this.extractCredentials(request);
    const user = await this.userService.verifyCredentials(credentials);
    const userProfile = this.userService.convertToUserProfile(user);

    return userProfile;
  }

  extractCredentials(request: Request): accessToken {
    let creds: accessToken = '';

    /**
     * Code to extract the 'basic' user credentials from the Authorization header
     */

    return creds;
  }
}
export class MyUserService {
  /**
   * Verify the identity of a user, construct a corresponding user profile using
   * the user information and return the user profile.
   *
   * @example
   * A pseudo code for basic authentication:
   * ```ts
   * verifyCredentials(credentials: C): Promise<U> {
   *   // the id field shouldn't be hardcoded
   *   user = await UserRepo.find(credentials.id);
   *   matched = await passwordService.compare(user.password, credentials.password);
   *   if (matched) return user;
   *   // throw a JS error, agnostic of the client type
   *   throw new Error('authentication failed');
   * };
   * ```
   *
   * A pseudo code for 3rd party authentication:
   * ```ts
   * type UserInfo = {
   *   accessToken: string;
   *   refreshToken: string;
   *   userProfile: string;
   * };
   * verifyCredentials(credentials: C): Promise<U> {
   *   try {
   *     userInfo: UserInfo = await getUserInfoFromFB(credentials);
   *   } catch (e) {
   *     // throw a JS error, agnostic of the client type
   *     throw e;
   *   }
   * };
   * ```
   * @param credentials - Credentials for basic auth or configurations for 3rd party.
   *                    Example see the
   */
  verifyCredentials(credentials: accessToken): Promise<UserInfo> {
    return Promise.resolve({id: '1'})
  }
  /**
   * Convert the user returned by `verifyCredentials()` to a common
   * user profile that describes a user in your application
   * @param user - The user returned from `verifyCredentials()`
   */
  convertToUserProfile(user: UserInfo): UserProfile {
    return {
      [securityId]: user.id
    }
  }
}


