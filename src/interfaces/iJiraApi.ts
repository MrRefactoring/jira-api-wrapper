import { IApplicationProperties } from 'interfaces/api/iApplicationProperties';
import { IApplicationrole } from 'interfaces/api/iApplicationrole';
import { IAttachment } from 'interfaces/api/iAttachment';
import { IAuditing } from 'interfaces/api/iAuditing';
import { IAvatar } from 'interfaces/api/iAvatar';
import { IBacklog } from 'interfaces/api/iBacklog';
import { IBoard } from 'interfaces/api/iBoard';
import { IBuilds } from 'interfaces/api/iBuilds';
import { IComment } from 'interfaces/api/iComment';
import { IComponent } from 'interfaces/api/iComponent';
import { IConfiguration } from 'interfaces/api/iConfiguration';
import { ICustomFieldOption } from 'interfaces/api/iCustomFieldOption';
import { IDashboard } from 'interfaces/api/iDashboard';
import { IDeployments } from 'interfaces/api/iDeployments';
import { IDevelopmentInformation } from 'interfaces/api/iDevelopmentInformation';
import { IEpic } from 'interfaces/api/iEpic';
import { IExpression } from 'interfaces/api/iExpression';
import { IFeatureFlags } from 'interfaces/api/iFeatureFlags';
import { IField } from 'interfaces/api/iField';
import { IFilter } from 'interfaces/api/iFilter';
import { IGroup } from 'interfaces/api/iGroup';
import { IGroups } from 'interfaces/api/iGroups';
import { IGroupUserPicker } from 'interfaces/api/iGroupUserPicker';
import { IIssue } from 'interfaces/api/iIssue';
import { IJql } from 'interfaces/api/IJql';
import { IMyself } from 'interfaces/api/iMyself';
import { INotificationScheme } from 'interfaces/api/iNotificationScheme';
import { ISearch } from 'interfaces/api/iSearch';
import { ISession } from 'interfaces/api/iSession';
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

  rejectUnauthorized?: any;
  cert: any;
  key: any;
  ca?: any;
  strictSSL?: boolean;

  applicationProperties: IApplicationProperties;
  applicationrole: IApplicationrole;
  attachment: IAttachment;
  auditing: IAuditing;
  avatar: IAvatar;
  backlog: IBacklog;
  board: IBoard;
  comment: IComment;
  component: IComponent;
  configuration: IConfiguration;
  customFieldOption: ICustomFieldOption;
  dashboard: IDashboard;
  epic: IEpic;
  expression: IExpression;
  field: IField;
  filter: IFilter;
  group: IGroup;
  groups: IGroups;
  groupUserPicker: IGroupUserPicker;
  issue: IIssue;
  notificationScheme: INotificationScheme;
  jql: IJql;
  myself: IMyself;
  search: ISearch;
  sprint: ISprint;
  worklog: IWorklog;
  session: ISession;

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
