import { IDashboard } from 'interfaces/api/iDashboard';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Dashboard implements IDashboard {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'dashboard';
    this.context = context;
  }

  public getAllDashboards(
    params?: {
      filter?: string,
      startAt?: number,
      maxResults?: number
    },
    callback?: any
  ): any {
    const endpoint = this.prefix;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        filter: params.filter,
        startAt: params.startAt,
        maxResults: params.maxResults
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public searchForDashboards(
    params?: {
      dashboardName?: string,
      accountId?: number | string,
      owner?: string,
      groupname?: string,
      projectId?: number,
      orderBy?: string,
      startAt?: number,
      maxResults?: number,
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/search`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        dashboardName: params.dashboardName,
        accountId: params.accountId,
        owner: params.owner,
        groupname: params.groupname,
        projectId: params.projectId,
        orderBy: params.orderBy,
        startAt: params.startAt,
        maxResults: params.maxResults,
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getDashboardItemPropertyKeys(
    params: {
      dashboardId: number | string,
      itemId: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.dashboardId}/items/${params.itemId}/properties`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getDashboardItemProperty(
    params: {
      dashboardId: number | string,
      itemId: number | string,
      propertyKey: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.dashboardId}/items/${params.itemId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public setDashboardItemProperty(
    params: {
      dashboardId: number | string,
      itemId: number | string,
      propertyKey: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.dashboardId}/items/${params.itemId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteDashboardItemProperty(
    params: {
      dashboardId: number | string,
      itemId: number | string,
      propertyKey: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.dashboardId}/items/${params.itemId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getDashboard(
    params: {
      id: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }
}
