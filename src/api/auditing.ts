import { IAuditing } from 'interfaces/api/iAuditing';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Auditing implements IAuditing {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.context = context;
    this.prefix = 'auditing';
  }

  public getAuditRecords(
    params?: {
      offset?: number,
      limit?: number,
      filter?: string,
      from?: string,
      to?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/record`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        offset: params.offset,
        limit: params.limit,
        filter: params.filter,
        from: params.from,
        to: params.to
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
