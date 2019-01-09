import { IJiraApi } from '../iJiraApi';

export interface IBoard {
  context: IJiraApi;
  prefix: string;

  getAllBoards(params: any, callback: any): any;
  createBoard(params: any, callback: any): any;
  getBoard(params: any, callback: any): any;
  deleteBoard(params: any, callback: any): any;
  getIssuesForBacklog(params: any, callback: any): any;
  getConfiguration(params: any, callback: any): any;
  getEpics(params: any, callback: any): any;
  getIssuesWithoutEpic(params: any, callback: any): any;
  
}
