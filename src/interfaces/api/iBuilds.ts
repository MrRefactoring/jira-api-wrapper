import { IJiraApi } from 'interfaces/iJiraApi';

export interface IBuilds {
  prefix: string;
  context: IJiraApi;

  submitBuildData(params: any, callback: any): any;
  deleteBuildsByProperty(params: any, callback: any): any;
  getBuildByKey(params: any, callback: any): any;
  deleteBuildByKey(params: any, callback: any): any;
}
