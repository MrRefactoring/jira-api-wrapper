import { IJiraApi } from '../iJiraApi';

export interface IIssue {
  prefix: string;
  context: IJiraApi;

  // Agile API
  rankIssues(params: any, callback: any): any;
  getIssueEstimationForBoard(params: any, callback: any): any;
  estimateIssueForBoard(params: any, callback: any): any;

  // Agile and REST API
  getIssue(params: any, callback: any): any;
}
