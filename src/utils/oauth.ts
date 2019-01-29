import { IConfig } from 'interfaces/iConfig';
import * as url from 'url';
import * as errors from './errors';

// @ts-ignore
import Oauth from 'oauth';

export const getAuthorizeURL = (config: IConfig, callback: any) => {
  const prefix = config.pathPrefix ? config.pathPrefix : '';
  const AUTH_TOKEN_APPEND = '/oauth/authorize';
  const SERVLET_BASE_URL = prefix + '/plugins/servlet';

  const authURL = url.format({
    protocol: config.protocol || 'https',
    hostname: config.host,
    port: config.port,
    pathname: SERVLET_BASE_URL + AUTH_TOKEN_APPEND
  });

  const oauth = generateOAuthObject(config);

  oauth.getOAuthRequestToken((err: any, token: any, tokenSecret: any) => {
    if (err) {
      return callback(err);
    }
    return callback(null, { url: `${authURL}?oauth_token=${token}`, token, token_secret: tokenSecret });
  });
};

export const swapRequestTokenWithAccessToken = (config: IConfig, callback: any) => {
  if (!config.oauth!!.verifier) {
    throw new Error(errors.NO_VERIFIER_ERROR);
  }

  const oauth = generateOAuthObject(config);

  const token = config.oauth!!.token;
  const secret = config.oauth!!.tokenSecret;
  const verifier = config.oauth!!.verifier;

  oauth.getOAuthAccessToken(token, secret, verifier, callback);
};

function generateOAuthObject(config: IConfig) {
  const prefix = config.pathPrefix ? config.pathPrefix : '';
  const SERVLET_BASE_URL = prefix + '/plugins/servlet';
  const REQ_TOKEN_APPEND = '/oauth/request-token';

  const ACCESS_TOKEN_APPEND = '/oauth/access-token';
  const sig = 'RSA-SHA1';

  if (!config.host) {
    throw new Error(errors.NO_HOST_ERROR);
  } else if (!config.oauth!!.consumerKey) {
    throw new Error(errors.NO_CONSUMER_KEY_ERROR);
  } else if (!config.oauth!!.privateKey) {
    throw new Error(errors.NO_PRIVATE_KEY_ERROR);
  }

  const consumerKey = config.oauth!!.consumerKey;
  const privateKey = config.oauth!!.privateKey;

  const reqURL = url.format({
    protocol: config.protocol || 'https',
    hostname: config.host,
    port: config.port,
    pathname: SERVLET_BASE_URL + REQ_TOKEN_APPEND
  });

  const accessURL = url.format({
    protocol: config.protocol || 'https',
    hostname: config.host,
    port: config.port,
    pathname: SERVLET_BASE_URL + ACCESS_TOKEN_APPEND
  });

  const cb = config.oauth!!.callbackUrl ? config.oauth!!.callbackUrl : 'oob';

  return new Oauth.OAuth(reqURL, accessURL, consumerKey, privateKey, '1.0', cb, sig);
}
