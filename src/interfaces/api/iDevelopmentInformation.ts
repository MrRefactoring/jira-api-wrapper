import { IJiraApi } from 'interfaces/iJiraApi';

export interface IDevelopmentInformation {
  prefix: string;
  context: IJiraApi;

  storeDevelopmentInformation(params: any, callback: any): any;
  getRepository(params: any, callback: any): any;
  deleteRepository(params: any, callback: any): any;
  deleteDevelopmentInformationByProperties(params: any, callback: any): any;
  checkIfDataExistsForSuppliedProperties(params: any, callback: any): any;
  deleteDevelopmentInformationEntity(params: any, callback: any): any;
}
