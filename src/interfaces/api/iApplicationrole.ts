import { IJiraApi } from 'interfaces/iJiraApi';

export interface IApplicationrole {
  context: IJiraApi;
  prefix: string;

  getAllApplicationRoles(callback?: any): any;
  getApplicationRole(params: { key: string }, callback?: any): any;
}
