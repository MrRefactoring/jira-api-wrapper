import { IJql } from 'interfaces/api/IJql';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Jql implements IJql {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.context = context;
    this.prefix = 'jql';
  }

  public getFieldReferenceData(callback?: any): any {
    const endpoint: string = `${this.prefix}/autocompletedata`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getFieldAutoCompleteSuggestions(
    params?: {
      fieldName?: string,
      fieldValue?: string,
      predicateName?: string,
      predicateValue?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/autocompletedata/suggestions`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        fieldName: params.fieldName,
        fieldValue: params.fieldValue,
        predicateName: params.predicateName,
        predicateValue: params.predicateValue
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public convertUserIdentifiers(
    params?: {
      queryStrings?: string[]
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/pdcleaner`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        queryStrings: params.queryStrings
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
