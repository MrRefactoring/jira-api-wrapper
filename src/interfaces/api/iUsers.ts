import { IJiraApi } from 'interfaces/iJiraApi';

export interface IUsers {
  context: IJiraApi;
  prefix: string;

  findUsers(
    params?: {
      accountId?: string,
      query?: string,
      username?: string,
      exclude?: string[],
      startAt?: number,
      maxResults?: number,
      property?: string,
      userName?: string
    },
    callback?: any
  ): any;
}
