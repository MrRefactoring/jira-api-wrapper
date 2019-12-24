import { Sender } from '../sender';
import { AxiosRequestConfig } from 'axios';
import { Callback } from '../callback';

export class IssueAttachments {
  constructor(private readonly client: Sender) { }

  public async getJiraSettings(
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/3/attachment/meta',
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }

  public async getMetadata(
    params: {
      id: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/3/attachment/${params.id}`,
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }

  public async delete(
    params: {
      id: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/3/attachment/${params.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(request, callback);
  }

  public async getAllMetadata(
    params: {
      id: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/3/attachment/${params.id}/expand/human`,
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }

  public async getContentsMetadata(
    params: {
      id: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/3/attachment/${params.id}/expand/raw`,
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }

  public async add(
    params: {
      issueIdOrKey?: string;
      body?: any;
      [key: string]: any;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/3/issue/${params.issueIdOrKey}/attachments`,
      method: 'POST',
      data: params.body || { ...params, issueIdOrKey: undefined, },
    };

    return this.client.sendRequest(request, callback);
  }
}
