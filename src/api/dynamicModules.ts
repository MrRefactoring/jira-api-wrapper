import { Sender } from '../sender';
import { Callback } from '../callback';
import { AxiosRequestConfig } from 'axios';

export class DynamicModules {
  constructor(private readonly client: Sender) { }

  public async getModules(
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/atlassian-connect/1/app/module/dynamic',
      method: 'GET'
    };

    return this.client.sendRequest(request, callback);
  }

  public async registerModules(
    params: any,
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/atlassian-connect/1/app/module/dynamic',
      method: 'POST',
      data: params,
    };

    return this.client.sendRequest(request, callback);
  }

  public async removeModules(
    params: {
      moduleKey: string[];
    },
    callback?: Callback<void>,
  ): Promise<void> {
    const request: AxiosRequestConfig = {
      url: '/rest/atlassian-connect/1/app/module/dynamic?' + params.moduleKey.map(key => `moduleKey=${key}`).join('&'),
      method: 'DELETE',
    };

    return this.client.sendRequest(request, callback);
  }
}
