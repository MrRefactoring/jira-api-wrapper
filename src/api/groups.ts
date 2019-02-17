import { IGroups } from 'interfaces/api/iGroups';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Groups implements IGroups {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'groups';
    this.context = context;
  }

  public findGroups(
    params?: {
      accountId?: string,
      query?: string,
      exclude?: string[],
      maxResults?: number,
      userName?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/picker`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        accountId: params.accountId,
        query: params.query,
        exclude: params.exclude ? params.exclude.join(',') : undefined,
        maxResults: params.maxResults,
        userName: params.userName
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
