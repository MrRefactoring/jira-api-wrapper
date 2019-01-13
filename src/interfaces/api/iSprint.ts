import { IJiraApi } from 'interfaces/iJiraApi';

export interface ISprint {
  prefix: string;
  context: IJiraApi;

  createSprint(params: any, callback: any): any;
  getSprint(params: any, callback: any): any;
  updateSprint(params: any, callback: any): any;
  partiallyUpdateSprint(params: any, callback: any): any;
  deleteSprint(params: any, callback: any): any;
  getIssuesForSprint(params: any, callback: any): any;
  moveIssuesToSprintAndRank(params: any, callback: any): any;
  getPropertiesKeys(params: any, callback: any): any;
  getProperty(params: any, callback: any): any;
  setProperty(params: any, callback: any): any;
  deleteProperty(params: any, callback: any): any;
  swapSprint(params: any, callback: any): any;
}
