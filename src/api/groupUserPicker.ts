import { IGroupUserPicker } from 'interfaces/api/iGroupUserPicker';
import { IJiraApi } from 'interfaces/iJiraApi';

export class GroupUserPicker implements IGroupUserPicker {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'groupuserpicker';
    this.context = context;
  }

  public findUsersAndGroups(
    params?: {
      query?: string,
      maxResults?: number,
      showAvatar?: boolean,
      fieldId?: string,
      projectId?: string[],
      issueTypeId?: string[],
      avatarSize?: string,
      caseInsensitive?: boolean,
      excludeConnectAddons?: boolean
    },
    callback?: any
  ): any {
    const endpoint: string = this.prefix;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        query: params.query,
        maxResults: params.maxResults,
        showAvatar: params.showAvatar,
        fieldId: params.fieldId,
        projectId: params.projectId,
        issueTypeId: params.issueTypeId,
        avatarSize: params.avatarSize,
        caseInsensitive: params.caseInsensitive,
        excludeConnectAddons: params.excludeConnectAddons
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
