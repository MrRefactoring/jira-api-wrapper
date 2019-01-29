import { IDeployments } from 'interfaces/api/iDeployments';
import { IJiraApi } from 'interfaces/iJiraApi';
import { NOT_IMPLEMENTED } from 'utils/errors';

export class Deployments implements IDeployments {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'deployments';
    this.context = context;
  }

  public submitDeploymentData(params: any, callback: any): any {
    throw new Error(NOT_IMPLEMENTED);
  }

  public deleteDeploymentsByProperty(params: any, callback: any): any {
    throw new Error(NOT_IMPLEMENTED);
  }

  public getDeploymentByKey(params: any, callback: any): any {
    throw new Error(NOT_IMPLEMENTED);
  }

  public deleteDeploymentByKey(params: any, callback: any): any {
    throw new Error(NOT_IMPLEMENTED);
  }
}
