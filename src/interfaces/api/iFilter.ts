import { IJiraApi } from 'interfaces/iJiraApi';

export interface IFilter {
  context: IJiraApi;
  prefix: string;

  /**
   * @deprecated
   */
  getFilters(params?: { expand?: string }, callback?: any): any;

  createFilter(
    params: {
      expand?: string,
      name: string,
      description?: string,
      jql?: string,
      favourite?: boolean,
      sharePermissions?: any[]
    },
    callback?: any
  ): any;

  getDefaultShareScope(callback?: any): any;

  setDefaultShareScope(
    params: {
      scope: string
    },
    callback?: any
  ): any;

  getFavoriteFilters(
    params?: {
      expand?: string
    },
    callback?: any
  ): any;

  getMyFilters(
    params?: {
      expand?: string,
      includeFavourites?: boolean
    },
    callback?: any
  ): any;

  searchForFilters(
    params?: {
      filterName?: string,
      accountId?: string,
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

  getFilter(
    params: {
      id: number,
      expand?: string
    },
    callback?: any
  ): any;

  updateFilter(
    params: {
      id: number,
      expand?: string,
      name: string,
      description?: string,
      jql?: string,
      favourite?: boolean,
      sharePermissions?: any[]
    },
    callback?: any
  ): any;

  deleteFilter(
    params: {
      id: number
    },
    callback?: any
  ): any;

  getColumns(
    params: {
      id: number
    },
    callback?: any
  ): any;

  setColumns(
    params: {
      id: number,
      body: any
    },
    callback?: any
  ): any;

  resetColumns(
    params: {
      id: number
    },
    callback?: any
  ): any;

  addFilterAsFavorite(
    params: {
      id: number,
      expand?: string
    },
    callback?: any
  ): any;

  removeFilterAsFavorite(
    params: {
      id: number,
      expand?: string
    },
    callback?: any
  ): any;

  getSharePermissions(
    params: {
      id: number
    },
    callback?: any
  ): any;

  addSharePermissions(
    params: {
      id: number,
      type: string,
      projectId?: string,
      groupname?: string,
      projectRoleId?: string
    },
    callback?: any
  ): any;

  getSharePermission(
    params: {
      id: number,
      permissionId: number
    },
    callback?: any
  ): any;

  deleteSharePermission(
    params: {
      id: number,
      permissionId: number
    },
    callback?: any
  ): any;
}
