import { IDevelopmentInformation } from 'interfaces/api/iDevelopmentInformation';
import { IJiraApi } from 'interfaces/iJiraApi';

export class DevelopmentInformation implements IDevelopmentInformation {
  public context: IJiraApi;

  constructor(context: IJiraApi) {
    this.context = context;
  }

  public storeDevelopmentInformation(
    params: {
      Authorization: string,
      repositories: any[],
      preventTransitions?: boolean,
      properties?: any
    },
    callback?: any
  ): any {
    const endpoint: string = 'bulk';

    const options = {
      uri: this.context.makeUrl(endpoint, 'devInfo'),
      method: 'POST',
      headers: {
        Authorization: params.Authorization
      },
      json: true,
      followAllRedirects: true,
      body: {
        repositories: params.repositories ,
        preventTransitions: params.preventTransitions,
        properties: params.properties
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getRepository(
    params: {
      Authorization: string,
      repositoryId: string
    },
    callback?: any
  ): any {
    const endpoint: string = `repository/${params.repositoryId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'devInfo'),
      method: 'GET',
      headers: {
        Authorization: params.Authorization
      },
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteRepository(
    params: {
      Authorization: string,
      repositoryId: string,
      _updateSequenceId?: number
    },
    callback?: any
  ): any {
    const endpoint: string = `repository/${params.repositoryId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'devInfo'),
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

  public deleteDevelopmentInformationByProperties(
    params: {
      Authorization: string,
      _updateSequenceId?: number
    },
    callback?: any
  ): any {
    const endpoint: string = 'bulkByProperties';

    const options = {
      uri: this.context.makeUrl(endpoint, 'devInfo'),
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

  public checkIfDataExistsForSuppliedProperties(
    params: {
      Authorization: string,
      _updateSequenceId?: number
    },
    callback?: any
  ): any {
    const endpoint: string = 'existsByProperties';

    const options = {
      uri: this.context.makeUrl(endpoint, 'devInfo'),
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

  public deleteDevelopmentInformationEntity(
    params: {
      Authorization: string,
      repositoryId: string,
      entityType: string,
      entityId: string,
      _updateSequenceId?: number
    },
    callback?: any
  ): any {
    const endpoint: string = `repository/${params.repositoryId}/${params.entityType}/${params.entityId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'devInfo'),
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
}
