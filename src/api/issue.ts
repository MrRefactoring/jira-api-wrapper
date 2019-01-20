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
  public getIssue(
    params: {
      agile?: boolean,
      issueIdOrKey: number | string,
      fields?: string[],
      fieldsByKeys?: boolean,
      expand?: string,
      properties?: string[],
      updateHistory?: boolean
    },
    callback: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}`;

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

  // REST API
  public createIssue(
    params: {
      updateHistory?: boolean,
      transition?: any,
      fields?: any,
      update?: any,
      historyMetadata?: any,
      properties?: any[]
    },
    callback?: any
  ): any {
    const endpoint: string = this.prefix;

    const options = {
      uri: this.context.buildUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      qs: {
        updateHistory: params.updateHistory
      },
      body: {
        transition: params.transition,
        fields: params.fields,
        update: params.update,
        historyMetadata: params.historyMetadata,
        properties: params.properties
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public bulkIssueCreate(
    params: {
      issueUpdates: any[]
    },
    callback: any
  ): any {

  }

  public getCreateIssueMetadata(params: any, callback: any): any {

  }

  public getIssuePickerSuggestions(params: any, callback: any): any {

  }

  public bulkSetIssueProperty(params: any, callback: any): any {

  }

  public bulkDeleteIssueProperty(params: any, callback: any): any {

  }

  public editIssue(params: any, callback: any): any {

  }

  public deleteIssue(params: any, callback: any): any {

  }

  public assignIssue(params: any, callback: any): any {

  }

  public addAttachment(params: any, callback: any): any {

  }

  public getChangeLog(params: any, callback: any): any {

  }

  public getComments(params: any, callback: any): any {

  }

  public addComment(params: any, callback: any): any {

  }

  public getComment(params: any, callback: any): any {

  }

  public updateComment(params: any, callback: any): any {

  }

  public deleteComment(params: any, callback: any): any {

  }

  public getEditIssueMetadata(params: any, callback: any): any {

  }

  public sendNotificationForIssue(params: any, callback: any): any {

  }

  public getIssuePropertyKeys(params: any, callback: any): any {

  }

  public getIssueProperty(params: any, callback: any): any {

  }

  public setIssueProperty(params: any, callback: any): any {

  }

  public deleteIssueProperty(params: any, callback: any): any {

  }

  public getRemoteIssueLinks(params: any, callback: any): any {

  }

  public createOrUpdateRemoteIssueLink(params: any, callback: any): any {

  }

  public deleteRemoteIssueLinkByGlobalId(params: any, callback: any): any {

  }

  public getRemoteIssueLinkById(params: any, callback: any): any {

  }

  public updateRemoteIssueLink(params: any, callback: any): any {

  }

  public deleteRemoteIssueLinkById(params: any, callback: any): any {

  }

  public getTransitions(params: any, callback: any): any {

  }

  public transitionIssue(params: any, callback: any): any {

  }

  public getVotes(params: any, callback: any): any {

  }

  public addVote(params: any, callback: any): any {

  }

  public deleteVote(params: any, callback: any): any {

  }

  public getIssueWatchers(params: any, callback: any): any {

  }

  public addWatcher(params: any, callback: any): any {

  }

  public deleteWatcher(params: any, callback: any): any {

  }

  public getIssueWorklogs(params: any, callback: any): any {

  }

  public addWorklog(params: any, callback: any): any {

  }

  public getWorklog(params: any, callback: any): any {

  }

  public updateWorklog(params: any, callback: any): any {

  }

  public deleteWorklog(params: any, callback: any): any {

  }

  public getWorklogPropertyKeys(params: any, callback: any): any {

  }

  public getWorklogProperty(params: any, callback: any): any {

  }

  public setWorklogProperty(params: any, callback: any): any {

  }

  public deleteWorklogProperty(params: any, callback: any): any {

  }
}
