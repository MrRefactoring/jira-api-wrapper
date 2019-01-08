import { IBacklog } from '../interfaces/api/iBacklog';
import { IJiraApi } from '../interfaces/iJiraApi';

export class Backlog implements IBacklog {
  context: IJiraApi;
  prefix: string;

  constructor(context: IJiraApi) {
    this.context = context;
    this.prefix = '/backlog';
  }

  moveIssuesToBacklog(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/issue`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        issues: params.issues ? params.issues.join(',') : undefined
      }
    };

    return this.context.makeRequest(options, callback);
  }

  moveIssuesToBacklogForBoard(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.boardId}/issue`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        issues: params.issues ? params.issues.join(',') : undefined,
        rankBeforeIssue: params.rankBeforeIssue,
        rankAfterIssue: params.rankAfterIssue,
        rankCustomFieldId: params.rankCustomFieldId
      }
    };

    return this.context.makeRequest(options, callback);
  }
}