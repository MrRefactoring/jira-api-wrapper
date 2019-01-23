import { ISprint } from 'interfaces/api/iSprint';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Sprint implements ISprint {
  public prefix: string;
  public context: IJiraApi;

  constructor(context: IJiraApi) {
    this.prefix = 'sprint';
    this.context = context;
  }

  public createSprint(params: any = {}, callback: any): any {
    const endpoint = this.prefix;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        name: params.name,
        startDate: params.startDate,
        endDate: params.endDate,
        originBoardId: params.originBoardId,
        goal: params.goal
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getSprint(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.sprintId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public updateSprint(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.sprintId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        id: params.id,
        self: params.self,
        state: params.state,
        name: params.name,
        startDate: params.startDate,
        endDate: params.endDate,
        completeDate: params.completeDate,
        originBoardId: params.originBoardId,
        goal: params.goal
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public partiallyUpdateSprint(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.sprintId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        id: params.id,
        self: params.self,
        state: params.state,
        name: params.name,
        startDate: params.startDate,
        endDate: params.endDate,
        completeDate: params.completeDate,
        originBoardId: params.originBoardId,
        goal: params.goal
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteSprint(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.sprintId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssuesForSprint(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.sprintId}/issue`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        jql: params.jql,
        validateQuery: params.validateQuery,
        fields: params.fields ? params.fields.join(',') : undefined,
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public moveIssuesToSprintAndRank(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.sprintId}/issue`;

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

  public getPropertiesKeys(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.sprintId}/properties`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getProperty(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.sprintId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public setProperty(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.sprintId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'PUT',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteProperty(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.sprintId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public swapSprint(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.sprintId}/swap`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        sprintToSwapWith: params.sprintToSwapWith
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
