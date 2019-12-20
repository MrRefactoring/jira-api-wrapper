import { Sender } from '../sender';
import { Callback } from '../callback';
import { AxiosRequestConfig } from 'axios';

export class Labels {
  constructor(private readonly client: Sender) { }

  public async getAll(
    params?: {
      startAt?: number;
      maxResults?: number;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/label',
      method: 'GET',
      params,
    };

    return this.client.sendRequest(request, callback);
  }
}
