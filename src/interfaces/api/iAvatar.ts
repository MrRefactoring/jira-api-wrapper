import { IJiraApi } from '../iJiraApi';

export interface IAvatar {
  context: IJiraApi;
  prefix: string;

  getSystemAvatarsByType(
    params: {
      type: 'issuetype' | 'project' | 'user'
    },
    callback?: any
  ): any;
}
