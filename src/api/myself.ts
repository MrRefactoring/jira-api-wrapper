import { IMyself } from 'interfaces/api/iMyself';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Myself implements IMyself {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = '/myself';
    this.context = context;
  }

  public getCurrentUser(params: any, callback: any): any {
    const endpoint = this.prefix;

    const options = {
      uri: this.context.buildUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
