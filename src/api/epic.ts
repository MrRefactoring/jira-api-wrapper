import { IEpic } from 'interfaces/api/iEpic';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Epic implements IEpic {
  public prefix: string;
  public context: IJiraApi;

  constructor(context: IJiraApi) {
    this.prefix = 'epic';
    this.context = context;
  }

  public getIssuesWithoutEpic(
    params?: {
      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/none/issue`;
    params = params || {};

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

  public removeIssuesFromEpic(
    params?: {
      issues?: string[]
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/none/issue`;
    params = params || {};

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

  public getEpic(
    params: {
      epicIdOrKey: number | string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.epicIdOrKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public partiallyUpdateEpic(
    params: {
      epicIdOrKey: number | string,
      name?: string,
      summary?: string,
      color?: any,
      done?: boolean
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.epicIdOrKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        name: params.name,
        summary: params.summary,
        color: params.color,
        done: params.color
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssuesForEpic(
    params: {
      epicIdOrKey: number | string,
      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.epicIdOrKey}/issue`;

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

  public moveIssuesToEpic(
    params: {
      epicIdOrKey: number | string,
      issues?: string[]
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.epicIdOrKey}/issue`;

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

  public rankEpics(
    params: {
      epicIdOrKey: number | string,
      rankBeforeEpic?: string,
      rankAfterEpic?: string,
      rankCustomFieldId?: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.epicIdOrKey}/rank`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        rankBeforeEpic: params.rankBeforeEpic,
        rankAfterEpic: params.rankAfterEpic,
        rankCustomFieldId: params.rankCustomFieldId
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
