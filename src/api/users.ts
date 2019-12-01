import { IUsers } from 'interfaces/api/iUsers';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Users implements IUsers {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'user';
    this.context = context;
  }

  public findUsers(
    params?: {
      accountId?: string,
      query?: string,
      username?: string,
      startAt?: number,
      maxResults?: number,
      property?: string,
      userName?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/search`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        accountId: params.accountId,
        username: params.username,
        query: params.query,
        property: params.property,
        startAt: params.startAt,
        maxResults: params.maxResults
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
