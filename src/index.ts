import * as request from 'request';
import * as url from 'url';
import * as errors from 'utils/errors';
import * as oauth from 'utils/oauth';

import { IConfig } from 'interfaces/iConfig';
import { IJiraApi } from 'interfaces/iJiraApi';

import { IApplicationProperties } from 'interfaces/api/iApplicationProperties';
import { IApplicationrole } from 'interfaces/api/iApplicationrole';
import { IAttachment } from 'interfaces/api/iAttachment';
import { IAuditing } from 'interfaces/api/iAuditing';
import { IAvatar } from 'interfaces/api/iAvatar';
import { IBacklog } from 'interfaces/api/iBacklog';
import { IBoard } from 'interfaces/api/iBoard';
import { IComment } from 'interfaces/api/iComment';
import { IComponent } from 'interfaces/api/iComponent';
import { ICustomFieldOption } from 'interfaces/api/iCustomFieldOption';
import { IDashboard } from 'interfaces/api/iDashboard';
import { IEpic } from 'interfaces/api/iEpic';
import { IExpression } from 'interfaces/api/iExpression';
import { IIssue } from 'interfaces/api/iIssue';
import { IJql } from 'interfaces/api/IJql';
import { IMyself } from 'interfaces/api/iMyself';
import { ISearch } from 'interfaces/api/iSearch';
import { ISprint } from 'interfaces/api/iSprint';
import { IWorklog } from 'interfaces/api/iWorklog';

import { IBuilds } from 'interfaces/api/iBuilds';
import { IDeployments } from 'interfaces/api/iDeployments';
import { IDevelopmentInformation } from 'interfaces/api/iDevelopmentInformation';
import { IFeatureFlags } from 'interfaces/api/iFeatureFlags';

import { ApplicationProperties } from 'api/applicationProperties';
import { Applicationrole } from 'api/applicationrole';
import { Attachment } from 'api/attachment';
import { Auditing } from 'api/auditing';
import { Avatar } from 'api/avatar';
import { Backlog } from 'api/backlog';
import { Board } from 'api/board';
import { Comment } from 'api/comment';
import { Component } from 'api/component';
import { CustomFieldOption } from 'api/customFieldOption';
import { Dashboard } from 'api/dashboard';
import { Epic } from 'api/epic';
import { Expression } from 'api/expression';
import { Issue } from 'api/issue';
import { Jql } from 'api/jql';
import { Myself } from 'api/myself';
import { Search } from 'api/search';
import { Sprint } from 'api/sprint';
import { Worklog } from 'api/worklog';

import { Builds } from 'api/builds';
import { Deployments } from 'api/deployments';
import { DevelopmentInformation } from 'api/developmentInformation';
import { FeatureFlags } from 'api/featureFlags';

class JiraApi implements IJiraApi {
  public host: string;
  public port: number;

  public agileApiVersion: number | string;
  public apiVersion: number | string;
  public authApiVersion: number | string;

  public devInfoApiVersion: number | string;
  public featureFlagsApiVersion: number | string;
  public deploymentApiVersion: number | string;
  public buildsApiVersion: number | string;

  public oauth: {
    consumerKey: string;
    privateKey: string;
    token: string;
    tokenSecret: string;
    signatureMethod: string
  } | undefined;

  public basicAuth: {
    base64?: string;
    username?: string;
    password?: string
  } | undefined;

  public cookieJar: any;

  public pathPrefix: string;
  public protocol: string;
  public rejectUnauthorized: any;
  public webhookApiVersion: number | string;

  public applicationProperties: IApplicationProperties;
  public applicationrole: IApplicationrole;
  public attachment: IAttachment;
  public auditing: IAuditing;
  public avatar: IAvatar;
  public backlog: IBacklog;
  public board: IBoard;
  public comment: IComment;
  public component: IComponent;
  public customFieldOption: ICustomFieldOption;
  public dashboard: IDashboard;
  public epic: IEpic;
  public expression: IExpression;
  public issue: IIssue;
  public jql: IJql;
  public myself: IMyself;
  public search: ISearch;
  public sprint: ISprint;
  public worklog: IWorklog;

  public builds: IBuilds;
  public deployments: IDeployments;
  public developmentInformation: IDevelopmentInformation;
  public featureFlags: IFeatureFlags;

  constructor(config: IConfig) {
    this.host = config.host;
    this.port = config.port;

    this.protocol = config.protocol ? config.protocol : 'https';
    this.pathPrefix = config.pathPrefix ? config.pathPrefix : '/';

    this.apiVersion = 3;
    this.agileApiVersion = '1.0';
    this.authApiVersion = 1;
    this.webhookApiVersion = '1.0';

    this.devInfoApiVersion = '0.10';
    this.featureFlagsApiVersion = '0.1';
    this.deploymentApiVersion = '0.1';
    this.buildsApiVersion = '0.1';

    if (config.oauth) {
      this.oauth = {
        signatureMethod: 'RSA-SHA1',
        token: '',
        tokenSecret: '',
        ...config.oauth
      };
    } else if (config.basicAuth) {
      this.basicAuth = { ...config.basicAuth };
    }

    if (config.cookieJar) {
      this.cookieJar = config.cookieJar;
    }

    this.rejectUnauthorized = config.rejectUnauthorized;

    this.applicationProperties = new ApplicationProperties(this);
    this.applicationrole = new Applicationrole(this);
    this.attachment = new Attachment(this);
    this.auditing = new Auditing(this);
    this.avatar = new Avatar(this);
    this.backlog = new Backlog(this);
    this.board = new Board(this);
    this.comment = new Comment(this);
    this.component = new Component(this);
    this.customFieldOption = new CustomFieldOption(this);
    this.dashboard = new Dashboard(this);
    this.expression = new Expression(this);
    this.epic = new Epic(this);
    this.issue = new Issue(this);
    this.jql = new Jql(this);
    this.myself = new Myself(this);
    this.search = new Search(this);
    this.sprint = new Sprint(this);
    this.worklog = new Worklog(this);

    this.builds = new Builds(this);
    this.deployments = new Deployments(this);
    this.developmentInformation = new DevelopmentInformation(this);
    this.featureFlags = new FeatureFlags(this);

    JiraApi.validateConfig(config);
  }

  public makeUrl(
    path: string,
    apiType:
      'agile'
      | 'api'
      | 'auth'
      | 'webhook'
      | 'devInfo'
      | 'featureFlags'
      | 'deployment'
      | 'builds'
      | string,
    apiVersion?: number | string
  ): any {
    apiType = apiType || 'api';

    let localApiVersion: number | string;

    switch (apiType) {
      case 'agile':
        localApiVersion = this.agileApiVersion;
        break;
      case 'api':
        localApiVersion = this.apiVersion;
        break;
      case 'auth':
        localApiVersion = this.authApiVersion;
        break;
      case 'webhook':
        localApiVersion = this.webhookApiVersion;
        break;
      case 'devInfo':
        localApiVersion = this.devInfoApiVersion;
        break;
      case 'featureFlags':
        localApiVersion = this.featureFlagsApiVersion;
        break;
      case 'deployment':
        localApiVersion = this.deploymentApiVersion;
        break;
      case 'builds':
        localApiVersion = this.buildsApiVersion;
        break;
      default:
        localApiVersion = this.apiVersion;
        break;
    }

    localApiVersion = apiVersion || localApiVersion;

    const requestUrl = url.format({
      hostname: this.host,
      protocol: this.protocol,
      port: this.port,
      pathname: `${this.pathPrefix}rest/${apiType}/${localApiVersion}/${path}`
    });

    return decodeURIComponent(requestUrl);
  }

  public sendRequest(options: any, callback: any, successString: string): any {
    options.rejectUnauthorized = this.rejectUnauthorized;

    if (this.oauth) {
      options.oauth = this.oauth;
    } else if (this.basicAuth) {
      if (this.basicAuth.base64) {
        if (!options.headers) {
          options.headers = {};
        }
        options.headers.Authorization = 'Basic ' + this.basicAuth.base64;
      } else {
        options.auth = this.basicAuth;
      }
    }

    if (this.cookieJar) {
      options.jar = this.cookieJar;
    }

    if (callback) {
      request(options, (error: any, response: any, body: any) => {
        if (error || (response.statusCode.toString()[0] !== '2' && response.statusCode.toString()[0] !== '3')) {
          return callback(error ? error : body, null, response);
        }

        if (typeof body === 'string') {
          try {
            body = JSON.parse(body);
          } catch (e) {
            return callback(e, null, response);
          }
        }

        return callback(null, successString ? successString : body, response);
      });
    } else {
      return new Promise((resolve, reject) => {
        const req = request(options);
        let requestObj: any = null;

        req.on('request', (reqs) => {
          requestObj = reqs;
        });

        req.on('response', (response) => {
          const error = response.statusCode.toString()[0] !== '2';

          const body: any = [];
          const push = body.push.bind(body);
          response.on('data', push);

          response.on('end', () => {
            let result = body.join('');

            if (result[0] === '[' || result[0] === '{') {
              try {
                result = JSON.parse(result);
              } catch (e) {
                // nothing to do
              }
            }

            if (error) {
              response.body = result;
              if (options.debug) {
                reject({
                  result: JSON.stringify(response),
                  debug: {
                    options,
                    request: {
                      headers: requestObj._headers,
                    },
                    response: {
                      headers: response.headers,
                    },
                  }
                });
              } else {
                reject(JSON.stringify(response));
              }
              return;
            }

            if (options.debug) {
              resolve({
                result,
                debug: {
                  options,
                  request: {
                    headers: requestObj._headers,
                  },
                  response: {
                    headers: response.headers,
                  },
                }
              });
            } else {
              resolve(result);
            }
          });
        });

        req.on('error', reject);
      });
    }
  }

  public static getAuthorizeURL(config: IConfig, callback: any) {
    oauth.getAuthorizeURL(config, callback);
  }

  public static swapRequestTokenWithAccessToken(config: IConfig, callback: any) {
    oauth.swapRequestTokenWithAccessToken(config, callback);
  }

  private static validateConfig(config: IConfig): void {
    if (!config.host) {
      throw new Error(errors.NO_HOST_ERROR);
    }

    if (config.oauth) {
      if (!config.oauth.consumerKey) {
        throw new Error(errors.NO_CONSUMER_KEY_ERROR);
      }
      if (!config.oauth.privateKey) {
        throw new Error(errors.NO_PRIVATE_KEY_ERROR);
      }
      if (!config.oauth.token) {
        throw new Error(errors.NO_TOKEN);
      }
      if (!config.oauth.tokenSecret) {
        throw new Error(errors.NO_TOKEN_SECRET);
      }
    } else if (config.basicAuth && !config.basicAuth.base64) {
      if (!config.basicAuth.username) {
        throw new Error(errors.NO_USERNAME);
      }
      if (!config.basicAuth.password) {
        throw new Error(errors.NO_PASSWORD);
      }
    }
  }
}

export default JiraApi;
