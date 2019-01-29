import { IDevelopmentInformation } from 'interfaces/api/iDevelopmentInformation';
import { IJiraApi } from 'interfaces/iJiraApi';
import { NOT_IMPLEMENTED } from 'utils/errors';

export class DevelopmentInformation implements IDevelopmentInformation {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'devinfo';
    this.context = context;
  }

  public storeDevelopmentInformation(params: any, callback: any): any {
    throw new Error(NOT_IMPLEMENTED);
  }

  public getRepository(params: any, callback: any): any {
    throw new Error(NOT_IMPLEMENTED);
  }

  public deleteRepository(params: any, callback: any): any {
    throw new Error(NOT_IMPLEMENTED);
  }

  public deleteDevelopmentInformationByProperties(params: any, callback: any): any {
    throw new Error(NOT_IMPLEMENTED);
  }

  public checkIfDataExistsForSuppliedProperties(params: any, callback: any): any {
    throw new Error(NOT_IMPLEMENTED);
  }

  public deleteDevelopmentInformationEntity(params: any, callback: any): any {
    throw new Error(NOT_IMPLEMENTED);
  }
}
