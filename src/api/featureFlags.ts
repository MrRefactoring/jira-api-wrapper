import { IFeatureFlags } from 'interfaces/api/iFeatureFlags';
import { IJiraApi } from 'interfaces/iJiraApi';
import { NOT_IMPLEMENTED } from 'utils/errors';

export class FeatureFlags implements IFeatureFlags {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'featureflags';
    this.context = context;
  }

  public submitFeatureFlagData(params: any, callback: any): any {
    throw new Error(NOT_IMPLEMENTED);
  }

  public deleteFeatureFlagsByProperty(params: any, callback: any): any {
    throw new Error(NOT_IMPLEMENTED);
  }

  public getFeatureFlagById(params: any, callback: any): any {
    throw new Error(NOT_IMPLEMENTED);
  }

  public deleteFeatureFlagById(params: any, callback: any): any {
    throw new Error(NOT_IMPLEMENTED);
  }
}
