import { IJiraApi } from '../iJiraApi';

export interface IBacklog {
  context: IJiraApi;
  prefix: string;

  moveIssuesToBacklog(
    params?: {
      issues?: string[]
    },
    callback?: any
  ): any;

  moveIssuesToBacklogForBoard(
    params: {
      boardId: number,

      issues?: string[],
      rankBeforeIssue?: string,
      rankAfterIssue?: string,
      rankCustomFieldId?: number
    },
    callback?: any
  ): any;
}
