import { IApplicationProperties } from 'interfaces/api/iApplicationProperties';
import { IJiraApi } from 'interfaces/iJiraApi';

export class ApplicationProperties implements IApplicationProperties {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.context = context;
    this.prefix = 'application-properties';
  }

  public getApplicationProperty(
    params?: {
      key?: string,
      permissionLevel?: string,
      keyFilter?: string
    },
    callback?: any
  ): any {
    const endpoint: string = this.prefix;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        key: params.key,
        permissionLevel: params.permissionLevel,
        keyFilter: params.keyFilter
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getAdvancedSettings(callback?: any): any {
    const endpoint: string = `${this.prefix}/advanced-settings`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public setApplicationProperty(
    params: {
      idPath: number | string,
      id?: number | string,
      value?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.idPath}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        id: params.id,
        value: params.value
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
