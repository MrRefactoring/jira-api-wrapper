import { ApplicationRole } from '../models';
import { Callback } from '../callback';
import { Sender } from '../sender';
import { AxiosRequestConfig } from 'axios';

export class ApplicationRoles {
  constructor(private readonly client: Sender) { }

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
    params: {
      key: string;
    },
    callback?: Callback<ApplicationRole>
  ): Promise<ApplicationRole> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/applicationrole/${params.key}`,
      method: 'GET'
    };

    return this.client.sendRequest(request, callback);
  }
}
