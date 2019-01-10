import { IJiraApi } from '../iJiraApi';

export interface IBoard {
  context: IJiraApi;
  prefix: string;

  getAllBoards(params: any, callback?: any): any;
  createBoard(params: any, callback?: any): any;
  getBoard(params: any, callback?: any): any;
  deleteBoard(params: any, callback?: any): any;
  getIssuesForBacklog(params: any, callback?: any): any;
  getConfiguration(params: any, callback?: any): any;
  getEpics(params: any, callback?: any): any;
  getIssuesWithoutEpic(params: any, callback?: any): any;
  getIssuesForEpic(params: any, callback?: any): any;
  getFeaturesForBoard(params: any, callback?: any): any;
  toggleFeatures(params: any, callback?: any): any;
  getIssuesForBoard(params: any, callback?: any): any;
  moveIssuesToBoard(params: any, callback?: any): any;
  getProjects(params: any, callback?: any): any;
  getProjectsFull(params: any, callback?: any): any;
  getBoardPropertyKeys(params: any, callback?: any): any;
  getBoardProperty(params: any, callback?: any): any;
  setBoardProperty(params: any, callback?: any): any;
  deleteBoardProperty(params: any, callback?: any): any;
  getAllQuickFilters(params: any, callback?: any): any;
  getQuickFilter(params: any, callback?: any): any;
  getReportsForBoard(params: any, callback?: any): any;
  getAllSprints(params: any, callback?: any): any;
  getIssuesForSprint(params: any, callback?: any): any;
  getAllVersions(params: any, callback?: any): any;
}
