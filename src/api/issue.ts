import { IIssue } from 'interfaces/api/iIssue';
import { IJiraApi } from 'interfaces/iJiraApi';

import * as errors from 'utils/errors';

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
      uri: this.context.makeUrl(endpoint, 'agile'),
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
      uri: this.context.makeUrl(endpoint, 'agile'),
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
      uri: this.context.makeUrl(endpoint, 'agile'),
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
      uri: this.context.makeUrl(endpoint, params.agile ? 'agile' : 'api'),
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
      uri: this.context.makeUrl(endpoint, 'api'),
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
    const endpoint: string = `${this.prefix}/bulk`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        issueUpdates: params.issueUpdates
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getCreateIssueMetadata(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public getIssuePickerSuggestions(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public bulkSetIssueProperty(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public bulkDeleteIssueProperty(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public editIssue(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public deleteIssue(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public assignIssue(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public addAttachment(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public getChangeLog(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public getComments(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public addComment(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public getComment(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public updateComment(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public deleteComment(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public getEditIssueMetadata(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public sendNotificationForIssue(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public getIssuePropertyKeys(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public getIssueProperty(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public setIssueProperty(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public deleteIssueProperty(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public getRemoteIssueLinks(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public createOrUpdateRemoteIssueLink(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public deleteRemoteIssueLinkByGlobalId(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public getRemoteIssueLinkById(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public updateRemoteIssueLink(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public deleteRemoteIssueLinkById(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public getTransitions(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public transitionIssue(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public getVotes(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public addVote(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public deleteVote(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public getIssueWatchers(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public addWatcher(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public deleteWatcher(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public getIssueWorklogs(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public addWorklog(
    params: {
      issueIdOrKey: string | number,

      notifyUsers?: boolean,
      adjustEstimate?: string,
      newEstimate?: string,
      reduceBy?: string,
      expand?: string,
      overrideEditableFlag?: boolean,

      author?: any,
      updateAuthor?: any,
      comment?: any,
      visibility?: any,
      started?: string,
      timeSpent?: string,
      timeSpentSeconds?: number,
      properties?: any[]
    },
    callback: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/worklog`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      qs: {
        notifyUsers: params.notifyUsers,
        adjustEstimate: params.adjustEstimate,
        newEstimate: params.newEstimate,
        reduceBy: params.reduceBy,
        expand: params.expand,
        overrideEditableFlag: params.overrideEditableFlag
      },
      body: {
        author: params.author,
        updateAuthor: params.updateAuthor,
        comment: params.comment,
        visibility: params.visibility,
        started: params.started,
        timeSpent: params.timeSpent,
        timeSpentSeconds: params.timeSpentSeconds,
        properties: params.properties
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getWorklog(
    params: {
      issueIdOrKey: string | number,
      id: string | number,
      expand?: string
    },
    callback: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/worklog/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public updateWorklog(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/worklog/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      qs: {
        notifyUsers: params.notifyUsers,
        adjustEstimate: params.adjustEstimate,
        newEstimate: params.newEstimate,
        expand: params.expand,
        overrideEditableFlag: params.overrideEditableFlag
      },
      body: {
        author: params.author,
        updateAuthor: params.updateAuthor,
        comment: params.comment,
        visibility: params.visibility,
        started: params.started,
        timeSpent: params.timeSpent,
        timeSpentSeconds: params.timeSpentSeconds,
        properties: params.properties
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteWorklog(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/worklog/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true,
      qs: {
        notifyUsers: params.notifyUsers,
        adjustEstimate: params.adjustEstimate,
        newEstimate: params.newEstimate,
        increaseBy: params.increaseBy,
        overrideEditableFlag: params.overrideEditableFlag
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getWorklogPropertyKeys(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public getWorklogProperty(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public setWorklogProperty(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }

  public deleteWorklogProperty(params: any, callback: any): any {
    throw new Error(errors.NOT_IMPLEMENTED);
  }
}
