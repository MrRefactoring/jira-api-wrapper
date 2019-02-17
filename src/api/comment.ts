import { IComment } from 'interfaces/api/iComment';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Comment implements IComment {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'comment';
    this.context = context;
  }

  public getCommentsByIDs(
    params?: {
      expand?: string,
      ids?: number[] | string[]
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/list`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand
      },
      body: {
        ids: params.ids
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getCommentPropertyKeys(
    params: {
      commentId: string | number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.commentId}/properties`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getCommentProperty(
    params: {
      commentId: string | number,
      propertyKey: string | number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.commentId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public setCommentProperty(
    params: {
      commentId: string | number,
      propertyKey: string | number,
      body?: any
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.commentId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: params.body
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteCommentProperty(
    params: {
      commentId: string | number,
      propertyKey: string | number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.commentId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }
}
