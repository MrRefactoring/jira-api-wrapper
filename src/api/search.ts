import { ISearch } from 'interfaces/api/ISearch';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Search implements ISearch {
  public context: IJiraApi;
  public prefix: string;

  public constructor(context: IJiraApi) {
    this.prefix = '/search';
    this.context = context;
  }

  public search(params: any, callback: any): any {
    params.method = params.method || 'POST';

    const options: any = {
      uri: this.context.buildUrl('/search'),
      method: params.method,
      json: true,
      followAllRedirects: true,
      timeout: params.timeout || 10000,
    };

    const searchParams = {
      jql: params.jql,
      startAt: params.startAt,
      maxResults: params.maxResults,
      validateQuery: params.validateQuery,
      fields: params.fields ? params.fields.join(',') : undefined,
      expand: params.expand,
      properties: params.properties ? params.properties.join(',') : undefined,
      fieldsByKey: params.fieldsByKey
    };

    if (params.method === 'POST') {
      options.body = searchParams;
    } else {
      options.qs = searchParams;
    }

    return this.context.sendRequest(options, callback);
  }
}
