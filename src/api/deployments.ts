import { IDeployments } from 'interfaces/api/iDeployments';
import { IJiraApi } from 'interfaces/iJiraApi';
import { notImplementedExpection } from 'utils/errors';

export class Deployments implements IDeployments {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'deployments';
    this.context = context;
  }

  public submitDeploymentData(params: any, callback: any): any {
    throw new Error(notImplementedExpection);
  }

  public deleteDeploymentsByProperty(params: any, callback: any): any {
    throw new Error(notImplementedExpection);
  }

  public getDeploymentByKey(params: any, callback: any): any {
    throw new Error(notImplementedExpection);
  }

  public deleteDeploymentByKey(params: any, callback: any): any {
    throw new Error(notImplementedExpection);
  }
}
