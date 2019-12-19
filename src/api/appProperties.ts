import { Sender } from '../sender';
import { Callback } from '../callback';
import { AxiosRequestConfig } from 'axios';
import { PropertyKeys, EntityProperty, OperationMessage } from '../models';

export class AppProperties {
  constructor(private readonly client: Sender) { }

  public async getProperties(
    params: {
      addonKey: string;
    },
    callback?: Callback<PropertyKeys>,
  ): Promise<PropertyKeys> {
    const request: AxiosRequestConfig = {
      url: `/rest/atlassian-connect/1/addons/${params.addonKey}/properties`,
      method: 'GET'
    };

    return this.client.sendRequest(request, callback);
  }

  public async getProperty(
    params: {
      addonKey: string;
      propertyKey: string;
    },
    callback?: Callback<EntityProperty>,
  ): Promise<EntityProperty> {
    const request: AxiosRequestConfig = {
      url: `/rest/atlassian-connect/1/addons/${params.addonKey}/properties/${params.propertyKey}`,
      method: 'GET'
    };

    return this.client.sendRequest(request, callback);
  }

  public async setProperty(
    params: {
      addonKey: string;
      propertyKey: string;
      payload?: any;
      [key: string]: any;
    },
    callback?: Callback<OperationMessage>,
  ): Promise<OperationMessage> {
    const request: AxiosRequestConfig = {
      url: `/rest/atlassian-connect/1/addons/${params.addonKey}/properties/${params.propertyKey}`,
      method: 'PUT',
      data: params.payload || { ...params, addonKey: undefined, propertyKey: undefined },
    };

    return this.client.sendRequest(request, callback);
  }

  public async deleteProperty(
    params: {
      addonKey: string;
      propertyKey: string;
    },
    callback?: Callback<void>,
  ): Promise<void> {
    const request: AxiosRequestConfig = {
      url: `/rest/atlassian-connect/1/addons/${params.addonKey}/properties/${params.propertyKey}`,
      method: 'DELETE',
    };

    return this.client.sendRequest(request, callback);
  }
}
