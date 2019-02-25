import { IComponent } from 'interfaces/api/iComponent';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Component implements IComponent {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'component';
    this.context = context;
  }

  public createComponent(
    params?: {
      name?: string,
      description?: string,
      leadUserName?: string,
      leadAccountId?: string,
      assigneeType?: string,
      project?: string,
      projectId?: number | string
    },
    callback?: any
  ): any {
    const endpoint = this.prefix;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        name: params.name,
        description: params.description,
        leadUserName: params.leadUserName,
        leadAccountId: params.leadAccountId,
        assigneeType: params.assigneeType,
        project: params.project,
        projectId: params.projectId
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getComponent(
    params: {
      id: string | number
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public updateComponent(
    params: {
      id: string | number,
      name?: string,
      description?: string,
      leadUserName?: string,
      leadAccountId?: string,
      assigneeType?: string,
      project?: string,
      projectId?: string | number
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        name: params.name,
        description: params.description,
        leadUserName: params.leadUserName,
        leadAccountId: params.leadAccountId,
        assigneeType: params.assigneeType,
        project: params.project,
        projectId: params.projectId
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteComponent(
    params: {
      id: string | number,
      moveIssuesTo?: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true,
      qs: {
        moveIssuesTo: params.moveIssuesTo
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getComponentIssuesCount(
    params: { id: number | string },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.id}/relatedIssueCounts`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }
}
