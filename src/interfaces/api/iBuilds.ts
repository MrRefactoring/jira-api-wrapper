import { IJiraApi } from 'interfaces/iJiraApi';

export interface IBuilds {
  context: IJiraApi;

  submitBuildData(
    params: {
      Authorization: string,

      properties?: any,
      builds: any[]
    },
    callback?: any
  ): any;

  deleteBuildsByProperty(
    params: {
      Authorization: string

      _updateSequenceNumber?: number,
    },
    callback?: any
  ): any;

  getBuildByKey(
    params: {
      Authorization: string
      pipelineId: string,
      buildNumber: number,
    },
    callback?: any
  ): any;

  deleteBuildByKey(
    params: {
      Authorization: string
      pipelineId: string,
      buildNumber: number,
      _updateSequenceNumber?: number,
    },
    callback?: any
  ): any;
}
