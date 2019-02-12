import { IJiraApi } from 'interfaces/iJiraApi';

export interface IDashboard {
  context: IJiraApi;
  prefix: string;

  getAllDashboards(
    params?: {
      filter?: string,
      startAt?: number,
      maxResults?: number
    },
    callback?: any
  ): any;

  searchForDashboards(
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
  ): any;

  getDashboardItemPropertyKeys(
    params: {
      dashboardId: number | string,
      itemId: number | string
    },
    callback?: any
  ): any;

  getDashboardItemProperty(
    params: {
      dashboardId: number | string,
      itemId: number | string,
      propertyKey: number | string
    },
    callback?: any
  ): any;

  setDashboardItemProperty(
    params: {
      dashboardId: number | string,
      itemId: number | string,
      propertyKey: number | string
    },
    callback?: any
  ): any;

  deleteDashboardItemProperty(
    params: {
      dashboardId: number | string,
      itemId: number | string,
      propertyKey: number | string
    },
    callback?: any
  ): any;

  getDashboard(
    params: {
      id: number | string
    },
    callback?: any
  ): any;
}
