import { IJiraApi } from 'interfaces/iJiraApi';

export interface IGroup {
  context: IJiraApi;
  prefix: string;

  /**
   * @deprecated use getUsersFromGroup({ params })
   */
  getGroup(
    params: {
      groupname: string,
      expand?: string
    },
    callback?: any
  ): any;

  createGroup(
    params: {
      name: string
    },
    callback?: any
  ): any;

  removeGroup(
    params: {
      groupname: string,
      swapGroup?: string
    },
    callback?: any
  ): any;

  getUsersFromGroup(
    params: {
      groupname: string,
      includeInactiveUsers?: boolean,
      startAt?: number,
      maxResults?: number
    },
    callback?: any
  ): any;

  addUserToGroup(
    params: {
      groupname: string,
      name?: string,
      accountId?: string
    },
    callback?: any
  ): any;

  removeUserFromGroup(
    params: {
      groupname: string,
      username?: string,
      accountId?: string
    },
    callback?: any
  ): any;
}
