import { IJiraApi } from 'interfaces/iJiraApi';

export interface IWorklog {
    prefix: string;
    context: IJiraApi;

    getIDsOfDeletedWorklogs(
      params?: {
        since?: number
      },
      callback?: any
    ): any;

    getWorklogs(
      params: {
        expand?: string,
        ids: number[]
      },
      callback?: any
    ): any;

    getIDsOfUpdatedWorklogs(
      params?: {
        since?: number,
        expand?: string
      },
      callback?: any
    ): any;
}
