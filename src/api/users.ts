import { Sender } from '../sender';
import { AxiosRequestConfig } from 'axios';
import { Callback } from '../callback';

export class Users {
  constructor(private readonly client: Sender) { }

  public async get(
    params: {
      accountId?: string;

    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/3/user',
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }

  public async create(
    params: {},
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '',
      method: '',
    };

    return this.client.sendRequest(request, callback);
  }

  public async delete(
    params: {},
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '',
      method: '',
    };

    return this.client.sendRequest(request, callback);
  }

  public async bulkGetUsers(
    params: {},
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '',
      method: '',
    };

    return this.client.sendRequest(request, callback);
  }

  public async getAccountIDs(
    params: {},
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '',
      method: '',
    };

    return this.client.sendRequest(request, callback);
  }

  public async getDefaultColumns(
    params: {},
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '',
      method: '',
    };

    return this.client.sendRequest(request, callback);
  }

  public async setDefaultColumns(
    params: {},
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '',
      method: '',
    };

    return this.client.sendRequest(request, callback);
  }

  public async resetDefaultColumns(
    params: {},
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '',
      method: '',
    };

    return this.client.sendRequest(request, callback);
  }

  public async getEmail(
    params: {},
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '',
      method: '',
    };

    return this.client.sendRequest(request, callback);
  }

  public async getEmailBulk(
    params: {},
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '',
      method: '',
    };

    return this.client.sendRequest(request, callback);
  }

  public async getGroups(
    params: {},
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '',
      method: '',
    };

    return this.client.sendRequest(request, callback);
  }

  public async getAll(
    params: {},
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '',
      method: '',
    };

    return this.client.sendRequest(request, callback);
  }
}
