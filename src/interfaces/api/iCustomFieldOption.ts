import { IJiraApi } from 'interfaces/iJiraApi';

export interface ICustomFieldOption {
  context: IJiraApi;
  prefix: string;

  getCustomFieldOption(params: { id: number | string }, callback?: any): any;
}
