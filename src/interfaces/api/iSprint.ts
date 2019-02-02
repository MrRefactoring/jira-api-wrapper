import { IJiraApi } from 'interfaces/iJiraApi';

export interface ISprint {
  prefix: string;
  context: IJiraApi;

  createSprint(
    params?: {
      name?: string,
      startDate?: string,
      endDate?: string,
      originBoardId?: number,
      goal?: string
    },
    callback?: any
  ): any;

  getSprint(
    params: {
      sprintId: number | string
    },
    callback?: any
  ): any;

  updateSprint(
    params: {
      sprintId: number | string,

      id?: number | string,
      self?: string,
      state?: string,
      name?: string,
      startDate?: string,
      endDate?: string,
      completeDate?: string,
      originBoardId?: number,
      goal?: string
    },
    callback?: any
  ): any;

  partiallyUpdateSprint(
    params: {
      sprintId: number | string,

      id?: number | string,
      self?: string,
      state?: string,
      name?: string,
      startDate?: string,
      endDate?: string,
      completeDate?: string,
      originBoardId?: number,
      goal?: string
    },
    callback?: any
  ): any;

  deleteSprint(
    params: {
      sprintId: number | string
    },
    callback?: any
  ): any;

  getIssuesForSprint(
    params: {
      sprintId: number | string,

      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string
    },
    callback?: any
  ): any;

  moveIssuesToSprintAndRank(
    params: {
      sprintId: number | string,

      issues?: string[],
      rankBeforeIssue?: string,
      rankAfterIssue?: string,
      rankCustomFieldId?: number
    },
    callback?: any
  ): any;

  getPropertiesKeys(
    params: {
      sprintId?: number | string
    },
    callback?: any
  ): any;

  getProperty(
    params: {
      sprintId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any;

  setProperty(
    params: {
      sprintId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any;

  deleteProperty(
    params: {
      sprintId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any;

  swapSprint(
    params: {
      sprintId: number | string,
      sprintToSwapWith?: number
    },
    callback?: any
  ): any;
}
