import { IJiraApi } from 'interfaces/iJiraApi';

export interface IJql {
  context: IJiraApi;
  prefix: string;

  getFieldReferenceData(callback?: any): any;

  getFieldAutoCompleteSuggestions(
    params?: {
      fieldName?: string,
      fieldValue?: string,
      predicateName?: string,
      predicateValue?: string
    },
    callback?: any
  ): any;

  convertUserIdentifiers(
    params?: {
      queryStrings?: string[]
    },
    callback?: any
  ): any;
}
