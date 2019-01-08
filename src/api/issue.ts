import { IIssue } from '../interfaces/api/iIssue';
import { IJiraApi } from '../interfaces/iJiraApi';

export class Issue implements IIssue {
  prefix: string;
  context: IJiraApi;

  constructor(context: IJiraApi) {
    this.prefix = '/issue';
    this.context = context;
  }

  // Agile API
  rankIssues(params: any, callback: any): any{
    const endpoint: string = `${this.prefix}/rank`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'PUT',
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

  getAgileIssue(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey || params.issueId || params.issueKey}`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        fields: params.fields ? params.fields.join(',') : undefined,
        expand: params.expand,
        updateHistory: params.updateHistory
      }
    };

    return this.context.makeRequest(options, callback);
  }

  getIssueEstimationForBoard(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey || params.issueId || params.issueKey}/estimation`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        boardId: params.boardId
      }
    };

    return this.context.makeRequest(options, callback);
  }

  estimateIssueForBoard(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey || params.issueId || params.issueKey}/estimation`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
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

    return this.context.makeRequest(options, callback);
  }

  // REST API
  getIssue(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey || params.issueId || params.issueKey}`;

    const options = {
      uri: this.context.buildApiUrl(endpoint),
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

    return this.context.makeRequest(options, callback);
  }
}
