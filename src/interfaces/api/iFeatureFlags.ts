import { IJiraApi } from 'interfaces/iJiraApi';

export interface IFeatureFlags {
  context: IJiraApi;

  submitFeatureFlagData(
    params: {
      Authorization: string,
      properties?: any,
      flags: any[]
    },
    callback?: any
  ): any;

  deleteFeatureFlagsByProperty(
    params: {
      Authorization: string,
      _updateSequenceId?: number
    },
    callback?: any
  ): any;

  getFeatureFlagById(
    params: {
      Authorization: string,
      featureFlagId: string
    },
    callback?: any
  ): any;

  deleteFeatureFlagById(
    params: {
      Authorization: string,
      featureFlagId: string,
      _updateSequenceId?: number
    },
    callback?: any
  ): any;
}
