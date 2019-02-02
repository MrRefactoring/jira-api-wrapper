import { ISearch } from 'interfaces/api/iSearch';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Search implements ISearch {
  public context: IJiraApi;
  public prefix: string;

  public constructor(context: IJiraApi) {
    this.prefix = 'search';
    this.context = context;
  }

  public search(
    params?: {
      method?: string,
      timeout?: number,

      jql?: string,
      startAt?: number,
      maxResults?: number,
      validateQuery?: string,
      fields?: string[],
      expand?: string | string[],
      properties?: string[],
      fieldsByKeys?: boolean
    },
    callback?: any
  ): any {
    params = params || {};
    params.method = params.method || 'POST';

    const options: any = {
      uri: this.context.makeUrl(this.prefix, 'api'),
      method: params.method,
      json: true,
      followAllRedirects: true,
      timeout: params.timeout || 10000,
    };

    // todo check properties field when called GET query
    const searchParams = {
      jql: params.jql,
      startAt: params.startAt,
      maxResults: params.maxResults,
      validateQuery: params.validateQuery,
      fields: params.fields,
      expand: params.expand,
      properties: params.properties,
      fieldsByKeys: params.fieldsByKeys
    };

    if (params.method === 'POST') {
      options.body = searchParams;
    } else {
      options.qs = searchParams;
    }

    return this.context.sendRequest(options, callback);
  }
}
