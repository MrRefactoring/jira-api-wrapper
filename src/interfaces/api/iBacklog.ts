import { IJiraApi } from '../iJiraApi';

export interface IBacklog {
  context: IJiraApi;
  prefix: string;

  moveIssuesToBacklog(params: any, callback: any): any;
  moveIssuesToBacklogForBoard(params: any, callback: any): any;
}
