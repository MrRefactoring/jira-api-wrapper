import { ICustomFieldOption } from 'interfaces/api/iCustomFieldOption';
import { IJiraApi } from 'interfaces/iJiraApi';

export class CustomFieldOption implements ICustomFieldOption {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'customFieldOption';
    this.context = context;
  }

  public getCustomFieldOption(params: { id: number | string }, callback?: any): any {
    const endpoint = `${this.prefix}/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }
}
