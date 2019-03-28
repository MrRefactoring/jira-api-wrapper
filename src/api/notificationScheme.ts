import { INotificationScheme } from 'interfaces/api/iNotificationScheme';
import { IJiraApi } from 'interfaces/iJiraApi';

export class NotificationScheme implements INotificationScheme {
  private context: IJiraApi;
  private prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'notificationscheme';
    this.context = context;
  }

  public getNotificationSchemesPaginated(
    params?: {
      startAt?: number,
      maxResults?: number,
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint = this.prefix;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getNotificationScheme(
    params: {
      id: number,
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
