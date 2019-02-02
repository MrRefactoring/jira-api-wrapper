import { IJiraApi } from '../iJiraApi';

export interface ISearch {
  prefix: string;
  context: IJiraApi;

  search(
    params?: {
      method?: string,
      timeout?: number,

      jql?: string,
      startAt?: number,
      maxResults?: number,
      validateQuery?: string,
      fields?: string[],
      expand?: string | string[],
      properties?: string[],
      fieldsByKeys?: boolean
    },
    callback?: any
  ): any;
}
