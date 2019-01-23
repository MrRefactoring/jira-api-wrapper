import { IBacklog } from 'interfaces/api/iBacklog';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Backlog implements IBacklog {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.context = context;
    this.prefix = 'backlog';
  }

  public moveIssuesToBacklog(params: any = {}, callback: any): any {
    const endpoint: string = `${this.prefix}/issue`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        issues: params.issues
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public moveIssuesToBacklogForBoard(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.boardId}/issue`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        issues: params.issues,
        rankBeforeIssue: params.rankBeforeIssue,
        rankAfterIssue: params.rankAfterIssue,
        rankCustomFieldId: params.rankCustomFieldId
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
