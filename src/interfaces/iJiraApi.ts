import { IApplicationProperties } from 'interfaces/api/iApplicationProperties';
import { IApplicationrole } from 'interfaces/api/iApplicationrole';
import { IAttachment } from 'interfaces/api/iAttachment';
import {IAuditing} from 'interfaces/api/iAuditing';
import { IAvatar } from 'interfaces/api/iAvatar';
import { IBacklog } from 'interfaces/api/iBacklog';
import { IBoard } from 'interfaces/api/iBoard';
import { IBuilds } from 'interfaces/api/iBuilds';
import { IDeployments } from 'interfaces/api/iDeployments';
import { IDevelopmentInformation } from 'interfaces/api/iDevelopmentInformation';
import { IEpic } from 'interfaces/api/iEpic';
import { IFeatureFlags } from 'interfaces/api/iFeatureFlags';
import { IIssue } from 'interfaces/api/iIssue';
import { IJql } from 'interfaces/api/IJql';
import { IMyself } from 'interfaces/api/iMyself';
import { ISearch } from 'interfaces/api/iSearch';
import { ISprint } from 'interfaces/api/iSprint';
import { IWorklog } from 'interfaces/api/iWorklog';

export interface IJiraApi {
  host: string;
  port: number;

  protocol: string;
  pathPrefix: string;

  apiVersion: number | string;
  agileApiVersion: number | string;
  authApiVersion: number | string;
  webhookApiVersion: number | string;

  devInfoApiVersion: number | string;
  featureFlagsApiVersion: number | string;
  deploymentApiVersion: number | string;
  buildsApiVersion: number | string;

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

  applicationProperties: IApplicationProperties;
  applicationrole: IApplicationrole;
  attachment: IAttachment;
  auditing: IAuditing;
  avatar: IAvatar;
  backlog: IBacklog;
  board: IBoard;
  epic: IEpic;
  issue: IIssue;
  jql: IJql;
  myself: IMyself;
  search: ISearch;
  sprint: ISprint;
  worklog: IWorklog;

  builds: IBuilds;
  deployments: IDeployments;
  developmentInformation: IDevelopmentInformation;
  featureFlags: IFeatureFlags;

  makeUrl(
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
  ): any;
  sendRequest(options: any, callback: any, successString?: string): any;
}
