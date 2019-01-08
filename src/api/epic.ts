import { IEpic } from '../interfaces/api/iEpic';
import { IJiraApi } from '../interfaces/iJiraApi';

export class Epic implements IEpic {
  prefix: string;
  context: IJiraApi;

  constructor(context: IJiraApi) {
    this.prefix = '/epic';
    this.context = context;
  }

  getIssuesWithoutEpic(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/none/issue`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
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

    return this.context.makeRequest(options, callback);
  }

  removeIssuesFromEpic(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/none/issue`;

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

  getEpic(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.epicIdOrKey || params.epicId || params.epicKey}`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.makeRequest(options, callback);
  }

  partiallyUpdateEpic(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.epicIdOrKey || params.epicId || params.epicKey}`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
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

    return this.context.makeRequest(options, callback);
  }

  getIssuesForEpic(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.epicIdOrKey || params.epicId || params.epicKey}/issue`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
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

    return this.context.makeRequest(options, callback);
  }

  moveIssuesToEpic(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.epicIdOrKey || params.epicId || params.epicKey}/issue`;

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

  rankEpics(params: any, callback: any): any {
    const endpoint: string = `${this.prefix}/${params.epicIdOrKey || params.epicId || params.epicKey}/rank`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        rankBeforeEpic: params.rankBeforeEpic,
        rankAfterEpic: params.rankAfterEpic,
        rankCustomFieldId: params.rankCustomFieldId
      }
    };

    return this.context.makeRequest(options, callback);
  }
}
