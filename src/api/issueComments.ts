import { Sender } from '../sender';
import { AxiosRequestConfig } from 'axios';
import { Callback } from '../callback';

export class IssueComments {
  constructor(private readonly client: Sender) { }

  public async getByIDs(
    params: {
      expand?: string;
      ids: number[];
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/3/comment/list',
      method: 'POST',
      params: { expand: params.expand, },
      data: { ids: params.ids },
    };

    return this.client.sendRequest(request, callback);
  }

  public async getComments(
    params: {
      issueIdOrKey: string;
      startAt?: number;
      maxResults?: number;
      orderBy?: string;
      expand?: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/3/issue/${params.issueIdOrKey}/comment`,
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }


  public async add(
    params: {
      issueIdOrKey: string;
      expand?: string;
      body?: any;
      visibility?: any;
      properties?: any[];
      [key: string]: any;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/3/issue/${params.issueIdOrKey}/comment`,
      method: 'POST',
      params: { expand: params.expand, },
      data: { ...params, issueIdOrKey: undefined, expand: undefined, },
    };

    return this.client.sendRequest(request, callback);
  }

  public async getComment(
    params: {
      issueIdOrKey: string;
      id: string;
      expand?: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/3/issue/${params.issueIdOrKey}/comment/${params.id}`,
      method: 'GET',
      params: { expand: params.expand, },
    };

    return this.client.sendRequest(request, callback);
  }

  public async update(
    params: {
      issueIdOrKey: string;
      id: string;
      expand?: string;
      body?: any;
      visibility?: any;
      properties?: any[];
      [key: string]: any;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/3/issue/{issueIdOrKey}/comment/${params.id}`,
      method: 'PUT',
      params: { expand: params.expand, },
      data: { ...params, issueIdOrKey: undefined, expand: undefined, },
    };

    return this.client.sendRequest(request, callback);
  }

  public async delete(
    params: {
      issueIdOrKey: string;
      id: string;
    },
    callback?: Callback<void>,
  ): Promise<void> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/3/issue/${params.issueIdOrKey}/comment/${params.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(request, callback);
  }
}
