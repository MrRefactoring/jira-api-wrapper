import { IJiraApi } from 'interfaces/iJiraApi';

export interface IFeatureFlags {
  prefix: string;
  context: IJiraApi;

  submitFeatureFlagData(params: any, callback: any): any;
  deleteFeatureFlagsByProperty(params: any, callback: any): any;
  getFeatureFlagById(params: any, callback: any): any;
  deleteFeatureFlagById(params: any, callback: any): any;
}
