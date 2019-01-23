import { IWorklog } from 'interfaces/api/iWorklog';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Worklog implements IWorklog {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'worklog';
    this.context = context;
  }

  public getIDsOfDeletedWorklogs(params: { since?: number }, callback: any): any {
    const endpoint = `${this.prefix}/deleted`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        since: params.since
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getWorklogs(params: { expand?: string, ids: number[] }, callback: any): any {
    const endpoint = `${this.prefix}/list`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand
      },
      body: {
        ids: params.ids
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getIDsOfUpdatedWorklogs(params: { since?: number, expand?: string }, callback: any): any {
    const endpoint = `${this.prefix}/updated`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        since: params.since,
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
