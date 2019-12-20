import { Sender } from '../sender';
import { Callback } from '../callback';
import { AxiosRequestConfig } from 'axios';

export class Filters {
  constructor(private readonly client: Sender) { }

  /** @deprecated */
  public async getFilters(
    params?: {
      expand?: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/filter',
      method: 'GET',
      params,
    };

    return this.client.sendRequest(request, callback);
  }

  public async createFilter(
    params: {
      expand?: string;
      name: string;
      description?: string;
      jql?: string;
      favourite?: boolean;
      sharePermissions?: any[];
    },
    callback?: Callback
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/filter',
      method: 'POST',
      params: {
        expand: params.expand,
      },
      data: { ...params, expand: undefined, }
    };

    return this.client.sendRequest(request, callback);
  }

  public async getFavoriteFilters(
    params?: {
      expand?: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/filter/favourite',
      method: 'GET',
      params,
    };

    return this.client.sendRequest(request, callback);
  }

  public async getMyFilters(
    params?: {
      expand?: string;
      includeFavourites?: boolean;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/filter/my',
      method: 'GET',
      params,
    };

    return this.client.sendRequest(request, callback);
  }

  public async searchForFilters(
    params?: {
      filterName?: string;
      accountId?: string;
      owner?: string;
      groupname?: string;
      projectId?: number;
      orderBy?: string;
      startAt?: number;
      maxResults?: number;
      expand?: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/filter/search',
      method: 'GET',
      params,
    };

    return this.client.sendRequest(request, callback);
  }

  public async getFilter(
    params: {
      id: number;
      expand?: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/filter/${params.id}`,
      method: 'GET',
      params: {
        expand: params.expand,
      },
    };

    return this.client.sendRequest(request, callback);
  }

  public async updateFilter(
    params: {
      id: number;
      expand?: string;
      name: string;
      description?: string;
      jql?: string;
      favourite?: boolean;
      sharePermissions?: any[];
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/filter/${params.id}`,
      method: 'PUT',
      params: {
        expand: params.expand,
      },
      data: {
        name: params.name,
        description: params.description,
        jql: params.jql,
        favourite: params.favourite,
        sharePermissions: params.sharePermissions
      },
    };

    return this.client.sendRequest(request, callback);
  }

  public async deleteFilter(
    params: {
      id: number;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/filter/${params.id}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(request, callback);
  }

  public async getColumns(
    params: {
      id: number;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/filter/${params.id}/columns`,
      method: 'GET'
    };

    return this.client.sendRequest(request, callback);
  }

  public async setColumns(
    params: {
      id: number;
      body: any;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/filter/${params.id}/columns`,
      method: 'PUT',
      data: params.body,
    };

    return this.client.sendRequest(request, callback);
  }

  public async resetColumns(
    params: {
      id: number;
    },
    callback?: Callback<void>,
  ): Promise<void> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/filter/${params.id}/columns`,
      method: 'DELETE',
    };

    return this.client.sendRequest(request, callback);
  }

  public async addFilterAsFavorite(
    params: {
      id: number;
      expand?: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/filter/${params.id}/favourite`,
      method: 'PUT',
      params: {
        expand: params.expand,
      },
    };

    return this.client.sendRequest(request, callback);
  }

  public async removeFilterAsFavorite(
    params: {
      id: number;
      expand?: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/filter/${params.id}/favourite`,
      method: 'DELETE',
      params: {
        expand: params.expand,
      }
    };

    return this.client.sendRequest(request, callback);
  }
}
