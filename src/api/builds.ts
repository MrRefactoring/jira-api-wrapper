import { IBuilds } from 'interfaces/api/iBuilds';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Builds implements IBuilds {
  public context: IJiraApi;

  constructor(context: IJiraApi) {
    this.context = context;
  }

  public submitBuildData(
    params: {
      Authorization: string,

      properties?: any,
      builds: any[]
    },
    callback?: any
  ): any {
    const endpoint: string = 'bulk';

    const options = {
      uri: this.context.makeUrl(endpoint, 'builds'),
      method: 'POST',
      headers: {
        Authorization: params.Authorization
      },
      json: true,
      followAllRedirects: true,
      body: {
        properties: params.properties,
        builds: params.builds
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteBuildsByProperty(
    params: {
      Authorization: string

      _updateSequenceNumber?: number,
    },
    callback?: any
  ): any {
    const endpoint: string = 'bulkByProperties';

    const options = {
      uri: this.context.makeUrl(endpoint, 'builds'),
      method: 'DELETE',
      headers: {
        Authorization: params.Authorization
      },
      json: true,
      followAllRedirects: true,
      qs: {
        _updateSequenceNumber: params._updateSequenceNumber
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getBuildByKey(
    params: {
      Authorization: string
      pipelineId: string,
      buildNumber: number,
    },
    callback?: any
  ): any {
    const endpoint: string = `pipelines/${params.pipelineId}/builds/${params.buildNumber}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'builds'),
      method: 'GET',
      headers: {
        Authorization: params.Authorization
      },
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteBuildByKey(
    params: {
      Authorization: string
      pipelineId: string,
      buildNumber: number,
      '_updateSequenceNumber'?: number,
    },
    callback?: any
  ): any {
    const endpoint: string = `pipelines/${params.pipelineId}/builds/${params.buildNumber}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'builds'),
      method: 'GET',
      headers: {
        Authorization: params.Authorization
      },
      json: true,
      followAllRedirects: true,
      qs: {
        _updateSequenceNumber: params._updateSequenceNumber
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
