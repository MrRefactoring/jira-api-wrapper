import { IJiraApi } from '../iJiraApi';

export interface IEpic {
  prefix: string;
  context: IJiraApi;

  getIssuesWithoutEpic(params: any, callback?: any): any;
  removeIssuesFromEpic(params: any, callback?: any): any;
  getEpic(params: any, callback?: any): any;
  partiallyUpdateEpic(params: any, callback?: any): any;
  getIssuesForEpic(params: any, callback?: any): any;
  moveIssuesToEpic(params: any, callback?: any): any;
  rankEpics(params: any, callback?: any): any;
}
