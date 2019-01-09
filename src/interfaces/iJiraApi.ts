import { IBacklog } from 'interfaces/api/iBacklog';
import { IBoard } from 'interfaces/api/iBoard';
import { IIssue } from 'interfaces/api/iIssue';
import { ISearch } from 'interfaces/api/ISearch';

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

  backlog: IBacklog;
  board: IBoard;
  issue: IIssue;
  search: ISearch;

  buildUrl(path: string, apiType?: 'agile' | 'api' | 'auth' | 'webhook'): any;
  sendRequest(options: any, callback: any, successString?: string): any;
}
