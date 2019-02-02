import { IJiraApi } from '../iJiraApi';

export interface IEpic {
  prefix: string;
  context: IJiraApi;

  getIssuesWithoutEpic(
    params?: {
      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string
    },
    callback?: any
  ): any;

  removeIssuesFromEpic(
    params?: {
      issues?: string[]
    },
    callback?: any
  ): any;

  getEpic(
    params: {
      epicIdOrKey: number | string
    },
    callback?: any
  ): any;

  partiallyUpdateEpic(
    params: {
      epicIdOrKey: number | string,
      name?: string,
      summary?: string,
      color?: any,
      done?: boolean
    },
    callback?: any
  ): any;

  getIssuesForEpic(
    params: {
      epicIdOrKey: number | string,
      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string
    },
    callback?: any
  ): any;

  moveIssuesToEpic(
    params: {
      epicIdOrKey: number | string,
      issues?: string[]
    },
    callback?: any
  ): any;

  rankEpics(
    params: {
      epicIdOrKey: number | string,
      rankBeforeEpic?: string,
      rankAfterEpic?: string,
      rankCustomFieldId?: number
    },
    callback?: any
  ): any;
}
