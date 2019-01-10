import { IJiraApi } from 'interfaces/iJiraApi';

export interface IMyself {
  context: IJiraApi;
  prefix: string;

  getCurrentUser(params: any, callback?: any | undefined): any;
}
