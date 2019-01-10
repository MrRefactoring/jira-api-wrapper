import { IJiraApi } from '../iJiraApi';

export interface ISearch {
  prefix: string;
  context: IJiraApi;

  search(params: any, callback?: any): any;
}
