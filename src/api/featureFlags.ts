import { IFeatureFlags } from 'interfaces/api/iFeatureFlags';
import { IJiraApi } from 'interfaces/iJiraApi';

export class FeatureFlags implements IFeatureFlags {
  public context: IJiraApi;

  constructor(context: IJiraApi) {
    this.context = context;
  }

  public submitFeatureFlagData(
    params: {
      Authorization: string,
      properties?: any,
      flags: any[]
    },
    callback?: any
  ): any {
    const endpoint: string = 'bulk';

    const options = {
      uri: this.context.makeUrl(endpoint, 'featureFlags'),
      method: 'POST',
      headers: {
        Authorization: params.Authorization
      },
      json: true,
      followAllRedirects: true,
      body: {
        properties: params.properties,
        flags: params.flags
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteFeatureFlagsByProperty(
    params: {
      Authorization: string,
      _updateSequenceId?: number
    },
    callback?: any
  ): any {
    const endpoint: string = 'bulkByProperties';

    const options = {
      uri: this.context.makeUrl(endpoint, 'featureFlags'),
      method: 'DELETE',
      headers: {
        Authorization: params.Authorization
      },
      json: true,
      followAllRedirects: true,
      qs: {
        _updateSequenceId: params._updateSequenceId
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getFeatureFlagById(
    params: {
      Authorization: string,
      featureFlagId: string
    },
    callback?: any
  ): any {
    const endpoint: string = `flag/${params.featureFlagId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'featureFlags'),
      method: 'GET',
      headers: {
        Authorization: params.Authorization
      },
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteFeatureFlagById(
    params: {
      Authorization: string,
      featureFlagId: string,
      _updateSequenceId?: number
    },
    callback?: any
  ): any {
    const endpoint: string = `flag/${params.featureFlagId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'featureFlags'),
      method: 'GET',
      headers: {
        Authorization: params.Authorization
      },
      json: true,
      followAllRedirects: true,
      qs: {
        _updateSequenceId: params._updateSequenceId
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
