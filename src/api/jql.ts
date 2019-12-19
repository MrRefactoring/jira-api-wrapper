import { Sender } from '../sender';
import { Callback } from '../callback';
import { AxiosRequestConfig } from 'axios';

export class JQL {
  constructor(private readonly client: Sender) { }

  public async getFieldReferenceData(
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/jql/autocompletedata',
      method: 'GET'
    };

    return this.client.sendRequest(request, callback);
  }

  public async getFieldAutoCompleteSuggestion(
    params?: {
      fieldName?: string;
      fieldValue?: string;
      predicateName?: string;
      predicateValue?: string;
    },
    callback?: Callback
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/jql/autocompletedata/suggestions',
      method: 'GET',
      params,
    };

    return this.client.sendRequest(request, callback);
  }

  public async parseJQLQuery(
    params: {
      queries: string[];
    },
    callback?: Callback
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/jql/parse',
      method: 'POST',
      data: params,
    };

    return this.client.sendRequest(request, callback);
  }

  public async convertUserIdentifiersToAccountIDs(
    params: {
      queryStrings: string[];
    },
    callback?: Callback
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/jql/parse',
      method: 'POST',
      data: params,
    };

    return this.client.sendRequest(request, callback);
  }
}
