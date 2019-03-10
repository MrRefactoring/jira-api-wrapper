import { IJiraApi } from 'interfaces/iJiraApi';

export interface IGroupUserPicker {
  context: IJiraApi;
  prefix: string;

  findUsersAndGroups(
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
  ): any;
}
