import { IAttachment } from 'interfaces/api/iAttachment';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Attachment implements IAttachment {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.context = context;
    this.prefix = 'attachment';
  }

  public getGlobalAttachmentSettings(callback?: any): any {
    const endpoint: string = `${this.prefix}/meta`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getAttachmentMetadata(params: { id: number | string }, callback?: any): any {
    const endpoint: string = `${this.prefix}/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteAttachment(params: { id: number | string }, callback?: any): any {
    const endpoint: string = `${this.prefix}/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getAllMetadata(params: { id: number | string }, callback?: any): any {
    const endpoint: string = `${this.prefix}/${params.id}/expand/human`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getContentsMetadata(params: { id: number | string }, callback?: any): any {
    const endpoint: string = `${this.prefix}/${params.id}/expand/raw`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }
}
