import { Sender } from '../sender';
import { AxiosRequestConfig } from 'axios';
import { Callback } from '../callback';

export class Dashboards {
  constructor(private readonly client: Sender) { }

  public async getAll(
    params?: {
      filter?: string;
      startAt?: number;
      maxResults?: number;
    },
    callback?: Callback
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/dashboard',
      method: 'GET',
      params,
    };

    return this.client.sendRequest(request, callback);
  }

  public async search(
    params?: {
      dashboardName?: string;
      accountId?: string;
      owner?: string;
      groupname?: string;
      projectId: number;
      orderBy?: string;
      startAt?: number;
      maxResults?: number;
      expand?: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/dashboard/search',
      method: 'GET',
      params,
    };

    return this.client.sendRequest(request, callback);
  }

  public async getItemPropertyKeys(
    params: {
      dashboardId: string;
      itemId: string;
    },
    callback?: Callback
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/dashboard/${params.dashboardId}/items/${params.itemId}/properties`,
      method: 'GET'
    };

    return this.client.sendRequest(request, callback);
  }

  public async getItemProperty(
    params: {
      dashboardId: string;
      itemId: string;
      propertyKey: string;
    },
    callback?: Callback
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/dashboard/${params.dashboardId}/items/${params.itemId}/properties/${params.propertyKey}`,
      method: 'GET'
    };

    return this.client.sendRequest(request, callback);
  }

  public async setItemProperty(
    params: {
      dashboardId: string;
      itemId: string;
      propertyKey: string;
      payload?: any;
      [key: string]: any;
    },
    callback?: Callback
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/dashboard/${params.dashboardId}/items/${params.itemId}/properties/${params.propertyKey}`,
      method: 'PUT',
      data: params.payload || { ...params, dashboardId: undefined, itemId: undefined, propertyKey: undefined },
    };

    return this.client.sendRequest(request, callback);
  }

  public async deleteItemProperty(
    params: {
      dashboardId: string;
      itemId: string;
      propertyKey: string;
    },
    callback?: Callback<void>
  ): Promise<void> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/dashboard/${params.dashboardId}/items/${params.itemId}/properties/${params.propertyKey}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(request, callback);
  }

  public async getDashboard(
    params: {
      id: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/dashboard/${params.id}`,
      method: 'GET',
    };

    return this.client.sendRequest(request, callback);
  }
}
