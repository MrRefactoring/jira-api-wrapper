import { IJiraApi } from '../iJiraApi';

export interface IBoard {
  context: IJiraApi;
  prefix: string;

  getAllBoards(
    params?: {
      startAt?: number,
      maxResults?: number,
      type?: string,
      name?: string,
      projectKeyOrId?: string | number,
      accountIdLocation?: string,
      userkeyLocation?: string,
      usernameLocation?: string,
      projectLocation?: string,
      includePrivate?: boolean,
      negateLocationFiltering?: boolean,
      orderBy?: string,
      expand?: string
    },
    callback?: any
  ): any;

  createBoard(
    params?: {
      name?: string,
      type?: string,
      filterId?: number,
      location?: any,
    },
    callback?: any
  ): any;

  getBoard(
    params: {
      boardId: number | string
    },
    callback?: any
  ): any;

  deleteBoard(
    params: {
      boardId: number | string
    },
    callback?: any
  ): any;

  getIssuesForBacklog(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string
    },
    callback?: any
  ): any;

  getConfiguration(
    params: {
      boardId: number | string
    },
    callback?: any
  ): any;

  getEpics(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number,
      done?: string
    },
    callback?: any
  ): any;

  getIssuesWithoutEpic(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string
    },
    callback?: any
  ): any;

  getIssuesForEpic(
    params: {
      boardId: number | string,
      epicId: number | string,

      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string
    },
    callback?: any
  ): any;

  getFeaturesForBoard(
    params: {
      boardId: number | string
    },
    callback?: any
  ): any;

  toggleFeatures(
    params: {
      boardIdPath: number | string,

      boardId?: number | string,
      feature?: string,
      enabling?: boolean
    },
    callback?: any
  ): any;

  getIssuesForBoard(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string,
    },
    callback?: any
  ): any;

  moveIssuesToBoard(
    params: {
      boardId: number | string,

      issues?: string[],
      rankBeforeIssue?: string,
      rankAfterIssue?: string,
      rankCustomFieldId?: number | string
    },
    callback?: any
  ): any;

  getProjects(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number
    },
    callback?: any
  ): any;

  getProjectsFull(
    params: {
      boardId: number | string
    },
    callback?: any
  ): any;

  getBoardPropertyKeys(
    params: {
      boardId: number | string
    },
    callback?: any
  ): any;

  getBoardProperty(
    params: {
      boardId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any;

  setBoardProperty(
    params: {
      boardId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any;

  deleteBoardProperty(
    params: {
      boardId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any;

  getAllQuickFilters(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number
    },
    callback?: any
  ): any;

  getQuickFilter(
    params: {
      boardId: number | string,
      quickFilterId: number | string
    },
    callback?: any
  ): any;

  getReportsForBoard(
    params: {
      boardId: number | string
    },
    callback?: any
  ): any;

  getAllSprints(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number,
      state?: string,
    },
    callback?: any
  ): any;

  getIssuesForSprint(
    params: {
      boardId: number | string,
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

  getAllVersions(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number,
      released?: string
    },
    callback?: any
  ): any;
}
