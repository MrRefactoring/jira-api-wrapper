import { IBacklog } from './api/iBacklog';

export interface IJiraApi {
  host: string;
  port: number;

  protocol: string;
  pathPrefix: string;

  apiVersion: number | string;
  agileApiVersion: number | string;
  authApiVersion: number | string;
  webhookApiVersion: number | string;

  oauth?: {
    consumerKey: string;
    privateKey: string;
    token: string;
    tokenSecret: string;
    signatureMethod: string;
  } | undefined;

  basicAuth?: {
    base64?: string;
    username?: string;
    password?: string;
  } | undefined;

  cookieJar?: any;
  rejectUnauthorized: any;

  backlog: IBacklog

  buildAgileUrl(path: string): string;
  buildApiUrl(path: string): string;
  buildWebhookUrl(path: string): string;
  buildAuthUrl(path: string): string;
  makeRequest(options: any, callback: any, successString?: string): any;
}
