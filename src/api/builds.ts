import { IBuilds } from 'interfaces/api/iBuilds';
import { IJiraApi } from 'interfaces/iJiraApi';
import { notImplementedExpection } from 'utils/errors';

export class Builds implements IBuilds {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'builds';
    this.context = context;
  }

  public submitBuildData(params: any, callback: any): any {
    throw new Error(notImplementedExpection);
  }

  public deleteBuildsByProperty(params: any, callback: any): any {
    throw new Error(notImplementedExpection);
  }

  public getBuildByKey(params: any, callback: any): any {
    throw new Error(notImplementedExpection);
  }

  public deleteBuildByKey(params: any, callback: any): any {
    throw new Error(notImplementedExpection);
  }
}
