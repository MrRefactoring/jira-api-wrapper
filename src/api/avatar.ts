import { IAvatar } from 'interfaces/api/iAvatar';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Avatar implements IAvatar {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.context = context;
    this.prefix = 'avatar';
  }

  public getSystemAvatarsByType(
    params: { type: 'issuetype' | 'project' | 'user' },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.type}/system`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }
}
