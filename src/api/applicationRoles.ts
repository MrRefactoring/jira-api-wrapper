import { ApplicationRole } from '../models';
import { Callback } from "../callback";
import { Sender } from "../sender";
import { AxiosRequestConfig } from 'axios';

export class ApplicationRoles {
  private client: Sender;

  constructor(client: Sender) {
    this.client = client;
  }

  public async getAllApplicationRoles(
    callback?: Callback<ApplicationRole[]>
  ): Promise<ApplicationRole[]> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/applicationrole',
      method: 'GET'
    };

    return this.client.sendRequest(request, callback);
  }

  public async getApplicationRole(
    options: {
      key: string;
    },
    callback?: Callback<ApplicationRole>
  ): Promise<ApplicationRole> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/applicationrole/${options.key}`,
      method: 'GET'
    };

    return this.client.sendRequest(request, callback);
  }
}
