import * as url from 'url';
import * as request from 'request';
import * as errors from './utils/errors';

import { IConfig } from './interfaces/iConfig';
import { IJiraApi } from './interfaces/iJiraApi';

import { IBacklog } from './interfaces/api/iBacklog';
import { IEpic } from './interfaces/api/iEpic';

import { Backlog } from './api/backlog';
import { Epic } from './api/epic';

class JiraApi implements IJiraApi {
  agileApiVersion: number | string;
  apiVersion: number | string;
  authApiVersion: number | string;
  basicAuth: {
    base64?: string;
    username?: string;
    password?: string
  } | undefined;
  cookieJar: any;
  host: string;
  oauth: {
    consumerKey: string;
    privateKey: string;
    token: string;
    tokenSecret: string;
    signatureMethod: string
  } | undefined;
  pathPrefix: string;
  port: number;
  protocol: string;
  rejectUnauthorized: any;
  webhookApiVersion: number | string;

  backlog: IBacklog;
  epic: IEpic;

  constructor(config: IConfig) {
    this.host = config.host;
    this.port = config.port;

    this.protocol = config.protocol ? config.protocol : 'https';
    this.pathPrefix = config.pathPrefix ? config.pathPrefix : '/';

    this.apiVersion = 3;
    this.agileApiVersion = '1.0';
    this.authApiVersion = 1;
    this.webhookApiVersion = '1.0';

    if (config.oauth) {
      this.oauth = { ...config.oauth, signatureMethod: '' };
    } else if (config.basicAuth) {
      if (config.basicAuth.base64) {
        this.basicAuth = { base64: config.basicAuth.base64 };
      } else {
        this.basicAuth = {
          username: config.basicAuth.username,
          password: config.basicAuth.password
        };
      }
    }

    if (config.cookieJar) {
      this.cookieJar = config.cookieJar;
    }

    this.rejectUnauthorized = config.rejectUnauthorized;

    this.backlog = new Backlog(this);
    this.epic = new Epic(this);

    JiraApi.validateConfig(config);
  }

  buildAgileUrl(path: string): string {
    const requestUrl = url.format({
      hostname: this.host,
      protocol: this.protocol,
      port: this.port,
      pathname: `${this.pathPrefix}/rest/agile/${this.agileApiVersion}/${path}`
    });

    return decodeURIComponent(requestUrl);
  }

  buildApiUrl(path: string): string {
    const requestUrl = url.format({
      hostname: this.host,
      protocol: this.protocol,
      port: this.port,
      pathname: `${this.pathPrefix}/rest/api/${this.apiVersion}/${path}`
    });

    return decodeURIComponent(requestUrl);
  }

  buildAuthUrl(path: string): string {
    const requestUrl = url.format({
      hostname: this.host,
      protocol: this.protocol,
      port: this.port,
      pathname: `${this.pathPrefix}/rest/auth/${this.authApiVersion}/${path}`
    });

    return decodeURIComponent(requestUrl);
  }

  buildWebhookUrl(path: string): string {
    const requestUrl = url.format({
      hostname: this.host,
      protocol: this.protocol,
      port: this.port,
      pathname: `${this.pathPrefix}/rest/webhook/${this.webhookApiVersion}/${path}`
    });

    return decodeURIComponent(requestUrl);
  }

  makeRequest(options: any, callback: any, successString: string): any {
    options.rejectUnauthorized = this.rejectUnauthorized;

    if (this.oauth) {
      options.oauth = this.oauth;
    } else if (this.basicAuth) {
      if (this.basicAuth.base64) {
        if (!options.headers) {
          options.headers = {};
        }
        options.headers['Authorization'] = 'Basic ' + this.basicAuth.base64;
      } else {
        options.auth = this.basicAuth;
      }
    }

    if (this.cookieJar) options.jar = this.cookieJar;

    if (callback) {
      request(options, (error: any, response: any, body: any) => {
        if (error || response.statusCode.toString()[0] !== '2') {
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
      return new Promise(function (resolve, reject) {
        const req = request(options);
        let requestObj: any = null;

        req.on('request', function(request) {
          requestObj = request;
        });

        req.on('response', function(response) {
          const error = response.statusCode.toString()[0] !== '2';

          const body: any = [];
          const push = body.push.bind(body);
          response.on('data', push);

          response.on('end', function () {

            let result = body.join('');

            if (result[0] === '[' || result[0] === '{') {
              try {
                result = JSON.parse(result);
              } catch(e) {
                // nothing to do
              }
            }

            if (error) {
              response.body = result;
              if (options.debug) {
                reject({
                  result: JSON.stringify(response),
                  debug: {
                    options: options,
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
                  options: options,
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

  private static validateConfig(config: IConfig): void {
    if (!config.host) throw new Error(errors.hostIsNotDefined);

    if (config.oauth) {
      if (!config.oauth.consumerKey) throw new Error(errors.consumerIsNotDefined);
      if (!config.oauth.privateKey) throw new Error(errors.privateKeyIsNotDefined);
      if (!config.oauth.token) throw new Error(errors.tokenIsNotDefined);
      if (!config.oauth.tokenSecret) throw new Error(errors.tokenSecretIsNotDefined);
    } else if (config.basicAuth && !config.basicAuth.base64) {
      if (!config.basicAuth.username) throw new Error(errors.usernameIsNotDefined);
      if (!config.basicAuth.password) throw new Error(errors.passwordIsNotDefined);
    }
  }
}

export default JiraApi;
