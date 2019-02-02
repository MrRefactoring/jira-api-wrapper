import { IJiraApi } from 'interfaces/iJiraApi';

export interface IDeployments {
  context: IJiraApi;

  submitDeploymentData(
    params: {
      Authorization: string,

      properties?: any,
      deployments: any[]
    },
    callback?: any
  ): any;

  deleteDeploymentsByProperty(
    params: {
      Authorization: string,
      _updateSequenceNumber?: number
    },
    callback?: any
  ): any;

  getDeploymentByKey(
    params: {
      Authorization: string
      pipelineId: string,
      environmentId: string,
      deploymentSequenceNumber: number,
    },
    callback?: any
  ): any;

  deleteDeploymentByKey(
    params: {
      Authorization: string
      pipelineId: string,
      environmentId: string,
      deploymentSequenceNumber: number,
      _updateSequenceNumber?: number,
    },
    callback?: any
  ): any;
}
