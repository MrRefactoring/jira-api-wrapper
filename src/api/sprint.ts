import { ISprint } from 'interfaces/api/iSprint';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Sprint implements ISprint {
  public prefix: string;
  public context: IJiraApi;

  constructor(context: IJiraApi) {
    this.prefix = 'sprint';
    this.context = context;
  }

  public createSprint(
    params?: {
      name?: string,
      startDate?: string,
      endDate?: string,
      originBoardId?: number,
      goal?: string
    },
    callback?: any
  ): any {
    const endpoint = this.prefix;
    params = params || {};

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

  public getSprint(
    params: {
      sprintId: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.sprintId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public updateSprint(
    params: {
      sprintId: number | string,

      id?: number | string,
      self?: string,
      state?: string,
      name?: string,
      startDate?: string,
      endDate?: string,
      completeDate?: string,
      originBoardId?: number,
      goal?: string
    },
    callback?: any
  ): any {
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

  public partiallyUpdateSprint(
    params: {
      sprintId: number | string,

      id?: number | string,
      self?: string,
      state?: string,
      name?: string,
      startDate?: string,
      endDate?: string,
      completeDate?: string,
      originBoardId?: number,
      goal?: string
    },
    callback?: any
  ): any {
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

  public deleteSprint(
    params: {
      sprintId: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.sprintId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssuesForSprint(
    params: {
      sprintId: number | string,

      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string
    },
    callback?: any
  ): any {
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

  public moveIssuesToSprintAndRank(
    params: {
      sprintId: number | string,

      issues?: string[],
      rankBeforeIssue?: string,
      rankAfterIssue?: string,
      rankCustomFieldId?: number
    },
    callback?: any
  ): any {
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

  public getPropertiesKeys(
    params: {
      sprintId?: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.sprintId}/properties`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getProperty(
    params: {
      sprintId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.sprintId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public setProperty(
    params: {
      sprintId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.sprintId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'PUT',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteProperty(
    params: {
      sprintId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.sprintId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public swapSprint(
    params: {
      sprintId: number | string,
      sprintToSwapWith?: number
    },
    callback?: any
  ): any {
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
