import { IJiraApi } from 'interfaces/iJiraApi';

export interface IApplicationProperties {
  context: IJiraApi;
  prefix: string;

  getApplicationProperty(
    params?: {
      key?: string,
      permissionLevel?: string,
      keyFilter?: string
    },
    callback?: any
  ): any;

  getAdvancedSettings(callback?: any): any;

  setApplicationProperty(
    params: {
      idPath: number | string,
      id?: number | string,
      value?: string
    },
    callback?: any
  ): any;
}
