import { IJiraApi } from 'interfaces/iJiraApi';

export interface IDeployments {
  prefix: string;
  context: IJiraApi;

  submitDeploymentData(params: any, callback: any): any;
  deleteDeploymentsByProperty(params: any, callback: any): any;
  getDeploymentByKey(params: any, callback: any): any;
  deleteDeploymentByKey(params: any, callback: any): any;
}
