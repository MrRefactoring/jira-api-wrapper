import { IApplicationrole } from 'interfaces/api/iApplicationrole';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Applicationrole implements IApplicationrole {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.context = context;
    this.prefix = 'applicationrole';
  }

  public getAllApplicationRoles(callback?: any): any {
    const endpoint: string = this.prefix;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getApplicationRole(params: { key: string }, callback?: any): any {
    const endpoint: string = `${this.prefix}/${params.key}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }
}
