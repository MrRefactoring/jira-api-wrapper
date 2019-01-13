import { IIssue } from 'interfaces/api/iIssue';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Issue implements IIssue {
  public prefix: string;
  public context: IJiraApi;

  constructor(context: IJiraApi) {
    this.prefix = 'issue';
    this.context = context;
  }

  // Agile API
  public rankIssues(params: any = {}, callback: any): any {
    const endpoint: string = `${this.prefix}/rank`;

    const options = {
      uri: this.context.buildUrl(endpoint, 'agile'),
      method: 'PUT',
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

  public getIssueEstimationForBoard(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey || params.issueId || params.issueKey}/estimation`;

    const options = {
      uri: this.context.buildUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        boardId: params.boardId
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public estimateIssueForBoard(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey || params.issueId || params.issueKey}/estimation`;

    const options = {
      uri: this.context.buildUrl(endpoint, 'agile'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      qs: {
        boardId: params.boardId
      },
      body: {
        value: params.value
      }
    };

    return this.context.sendRequest(options, callback);
  }

  // Agile and REST API
  public getIssue(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey || params.issueId || params.issueKey}`;

    const options = {
      uri: this.context.buildUrl(endpoint, params.agile ? 'agile' : 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        fields: params.fields ? params.fields.join(',') : undefined,
        fieldsByKeys: params.fieldsByKeys,
        expand: params.expand,
        properties: params.properties ? params.properties.join(',') : undefined,
        updateHistory: params.updateHistory
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
