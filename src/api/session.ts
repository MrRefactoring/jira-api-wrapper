import { ISession } from 'interfaces/api/iSession';
import { IJiraApi } from 'interfaces/iJiraApi';

/**
 * @deprecated This resource is deprecated and will be removed December 1, 2018. For more information,
 * see [Deprecation notice - Basic authentication with passwords and cookie-based authentication]
 * {@link https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/}.
 */
export class Session implements ISession {
  public prefix: string;
  public context: IJiraApi;

  constructor(context: IJiraApi) {
    this.prefix = 'session';
    this.context = context;
  }

  /**
   * @deprecated This resource is deprecated and will be removed December 1, 2018. For more information,
   * see [Deprecation notice - Basic authentication with passwords and cookie-based authentication]
   * {@link https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/}.
   */
  public getSession(callback?: any): any {
    const endpoint: string = this.prefix;

    const options = {
      uri: this.context.makeUrl(endpoint, 'auth'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  /**
   * @deprecated This resource is deprecated and will be removed December 1, 2018. For more information,
   * see [Deprecation notice - Basic authentication with passwords and cookie-based authentication]
   * {@link https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/}.
   */
  public createSession(
    params: {
      username: string,
      password: string | number
    },
    callback?: any
  ): any {
    const endpoint: string = this.prefix;

    const options = {
      uri: this.context.makeUrl(endpoint, 'auth'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        username: params.username,
        password: params.password
      }
    };

    return this.context.sendRequest(options, callback);
  }

  /**
   * @deprecated This resource is deprecated and will be removed December 1, 2018. For more information,
   * see [Deprecation notice - Basic authentication with passwords and cookie-based authentication]
   * {@link https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/}.
   */
  public deleteSession(callback?: any): any {
    const endpoint: string = this.prefix;

    const options = {
      uri: this.context.makeUrl(endpoint, 'auth'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }
}
