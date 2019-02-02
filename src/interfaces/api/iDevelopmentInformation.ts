import { IJiraApi } from 'interfaces/iJiraApi';

export interface IDevelopmentInformation {
  context: IJiraApi;

  storeDevelopmentInformation(
    params: {
      Authorization: string,
      repositories: any[],
      preventTransitions?: boolean,
      properties?: any
    },
    callback?: any
  ): any;

  getRepository(
    params: {
      Authorization: string,
      repositoryId: string
    },
    callback?: any
  ): any;

  deleteRepository(
    params: {
      Authorization: string,
      repositoryId: string,
      _updateSequenceId?: number
    },
    callback?: any
  ): any;

  deleteDevelopmentInformationByProperties(
    params: {
      Authorization: string,
      _updateSequenceId?: number
    },
    callback?: any
  ): any;

  checkIfDataExistsForSuppliedProperties(
    params: {
      Authorization: string,
      _updateSequenceId?: number
    },
    callback?: any
  ): any;

  deleteDevelopmentInformationEntity(
    params: {
      Authorization: string,
      repositoryId: string,
      entityType: string,
      entityId: string,
      _updateSequenceId?: number
    },
    callback?: any
  ): any;
}
