import { IJiraApi } from 'interfaces/iJiraApi';

export interface IGroups {
  context: IJiraApi;
  prefix: string;

  findGroups(
    params?: {
      accountId?: string,
      query?: string,
      exclude?: string[],
      maxResults?: number,
      userName?: string
    },
    callback?: any
  ): any;
}
