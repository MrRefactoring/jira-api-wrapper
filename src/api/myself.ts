import { Sender } from '../sender';
import { Callback } from '../callback';
import { AxiosRequestConfig } from 'axios';

export class Myself {
  constructor(private readonly client: Sender) { }

  public async getPreference(
    params: {
      key: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/mypreferences',
      method: 'GET',
      params,
    };

    return this.client.sendRequest(request, callback);
  }

  public async setPreference(
    params: {
      key: string;
      body: any;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/mypreferences',
      method: 'PUT',
      params: { key: params.key, },
      data: params.body,
    };

    return this.client.sendRequest(request, callback);
  }

  public async deletePreference(
    params: {
      key: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/mypreferences',
      method: 'DELETE',
      params,
    };

    return this.client.sendRequest(request, callback);
  }

  public async getLocale(
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/mypreferences/locale',
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }

  /** @deprecated */
  public async setLocale(
    params: {
      locale: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/mypreferences/locale',
      method: 'PUT',
      data: params,
    };

    return this.client.sendRequest(request, callback);
  }

  /** @deprecated */
  public async deleteLocale(
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/mypreferences/locale',
      method: 'DELETE',
    };

    return this.client.sendRequest(request, callback);
  }

  public async getCurrentUser(
    params?: {
      expand?: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/myself',
      method: 'GET',
      params,
    };

    return this.client.sendRequest(request, callback);
  }
}
