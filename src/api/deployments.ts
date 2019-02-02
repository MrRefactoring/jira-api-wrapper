import { IDeployments } from 'interfaces/api/iDeployments';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Deployments implements IDeployments {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'deployments';
    this.context = context;
  }

  public submitDeploymentData(
    params: {
      Authorization: string,

      properties?: any,
      deployments: any[]
    },
    callback?: any
  ): any {
    const endpoint: string = 'bulk';

    const options = {
      uri: this.context.makeUrl(endpoint, 'deployment'),
      method: 'POST',
      headers: {
        Authorization: params.Authorization
      },
      json: true,
      followAllRedirects: true,
      body: {
        properties: params.properties,
        deployments : params.deployments
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteDeploymentsByProperty(
    params: {
      Authorization: string,
      _updateSequenceNumber?: number
    },
    callback?: any
  ): any {
    const endpoint: string = 'bulkByProperties';

    const options = {
      uri: this.context.makeUrl(endpoint, 'deployment'),
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

  public getDeploymentByKey(
    params: {
      Authorization: string
      pipelineId: string,
      environmentId: string,
      deploymentSequenceNumber: number,
    },
    callback?: any
  ): any {
    const endpoint: string =
      `pipelines/${params.pipelineId}
      /environments/${params.environmentId}
      /deployments/${params.deploymentSequenceNumber}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'deployment'),
      method: 'GET',
      headers: {
        Authorization: params.Authorization
      },
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteDeploymentByKey(
    params: {
      Authorization: string
      pipelineId: string,
      environmentId: string,
      deploymentSequenceNumber: number,
      _updateSequenceNumber?: number,
    },
    callback?: any
  ): any {
    const endpoint: string =
      `pipelines/${params.pipelineId}/
      environments/${params.environmentId}/
      deployments/${params.deploymentSequenceNumber}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'deployment'),
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
}
