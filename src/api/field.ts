import { IField } from 'interfaces/api/iField';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Field implements IField {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'field';
    this.context = context;
  }

  public getFields(callback?: any): any {
    const endpoint: string = this.prefix;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public createCustomField(
    params: {
      name: string,
      description?: string,
      type: string,
      searcherKey: string
    },
    callback?: any
  ): any {
    const endpoint: string = this.prefix;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        name: params.name,
        description: params.description,
        type: params.type,
        searcherKey: params.searcherKey
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getAllIssueFieldOptions(
    params: {
      fieldKey: string,
      startAt?: number,
      maxResults?: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.fieldKey}/option`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public createIssueFieldOption(
    params: {
      fieldKey: string,
      value: string,
      properties?: any,
      config?: any
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.fieldKey}/option`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        value: params.value,
        properties: params.properties,
        config: params.config
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getSelectableIssueFieldOptions(
    params: {
      fieldKey: string,
      startAt?: number,
      maxResults?: number,
      projectId?: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.fieldKey}/option/suggestions/edit`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        projectId: params.projectId
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getVisibleIssueFieldOptions(
    params: {
      fieldKey: string,
      startAt?: number,
      maxResults?: number,
      projectId?: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.fieldKey}/option/suggestions/search`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        projectId: params.projectId
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssueFieldOption(
    params: {
      fieldKey: string,
      optionId: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.fieldKey}/option/${params.optionId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public updateIssueFieldOption(
    params: {
      fieldKey: string,
      optionId: number,
      id: number,
      value: string,
      properties?: any,
      config?: any
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.fieldKey}/option/${params.optionId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        id: params.id,
        value: params.value,
        properties: params.properties,
        config: params.config
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteIssueFieldOption(
    params: {
      fieldKey: string,
      optionId: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.fieldKey}/option/${params.optionId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public replaceIssueFieldOption(
    params: {
      fieldKey: string,
      optionId: number,
      replaceWith?: number,
      jql?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.fieldKey}/option/${params.optionId}/issue`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true,
      qs: {
        replaceWith: params.replaceWith,
        jql: params.jql
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
