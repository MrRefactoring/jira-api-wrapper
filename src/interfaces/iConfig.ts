export interface IConfig {
  host: string;
  port: number;

  protocol?: string;
  pathPrefix?: string;

  oauth?: {
    consumerKey: string;
    privateKey: string;
    token: string;
    tokenSecret: string;
  };

  basicAuth?: {
    base64?: string;
    username?: string;
    password?: string;
  };

  cookieJar?: any;
  rejectUnauthorized?: any;
}
