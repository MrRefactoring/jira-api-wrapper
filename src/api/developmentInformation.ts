import { IDevelopmentInformation } from 'interfaces/api/iDevelopmentInformation';
import { IJiraApi } from 'interfaces/iJiraApi';
import { notImplementedExpection } from 'utils/errors';

export class DevelopmentInformation implements IDevelopmentInformation {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'devinfo';
    this.context = context;
  }

  public storeDevelopmentInformation(params: any, callback: any): any {
    throw new Error(notImplementedExpection);
  }

  public getRepository(params: any, callback: any): any {
    throw new Error(notImplementedExpection);
  }

  public deleteRepository(params: any, callback: any): any {
    throw new Error(notImplementedExpection);
  }

  public deleteDevelopmentInformationByProperties(params: any, callback: any): any {
    throw new Error(notImplementedExpection);
  }

  public checkIfDataExistsForSuppliedProperties(params: any, callback: any): any {
    throw new Error(notImplementedExpection);
  }

  public deleteDevelopmentInformationEntity(params: any, callback: any): any {
    throw new Error(notImplementedExpection);
  }
}
