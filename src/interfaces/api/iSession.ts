import { IJiraApi } from 'interfaces/iJiraApi';

/**
 * @deprecated This resource is deprecated and will be removed December 1, 2018. For more information,
 * see [Deprecation notice - Basic authentication with passwords and cookie-based authentication]
 * {@link https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/}.
 */
export interface ISession {
  prefix: string;
  context: IJiraApi;

  /**
   * @deprecated This resource is deprecated and will be removed December 1, 2018. For more information,
   * see [Deprecation notice - Basic authentication with passwords and cookie-based authentication]
   * {@link https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/}.
   */
  getSession(callback?: any): any;

  /**
   * @deprecated This resource is deprecated and will be removed December 1, 2018. For more information,
   * see [Deprecation notice - Basic authentication with passwords and cookie-based authentication]
   * {@link https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/}.
   */
  createSession(
    params: {
      username: string,
      password: string | number
    },
    callback?: any
  ): any;

  /**
   * @deprecated This resource is deprecated and will be removed December 1, 2018. For more information,
   * see [Deprecation notice - Basic authentication with passwords and cookie-based authentication]
   * {@link https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/}.
   */
  deleteSession(callback?: any): any;
}
