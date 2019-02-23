import { IJiraApi } from 'interfaces/iJiraApi';

export interface IField {
  context: IJiraApi;
  prefix: string;

  getFields(callback?: any): any;

  createCustomField(
    params: {
      name: string,
      description?: string,
      type: string,
      searcherKey: string
    },
    callback?: any
  ): any;

  getAllIssueFieldOptions(
    params: {
      fieldKey: string,
      startAt?: number,
      maxResults?: number
    },
    callback?: any
  ): any;

  createIssueFieldOption(
    params: {
      fieldKey: string,
      value: string,
      properties?: any,
      config?: any
    },
    callback?: any
  ): any;

  getSelectableIssueFieldOptions(
    params: {
      fieldKey: string,
      startAt?: number,
      maxResults?: number,
      projectId?: number
    },
    callback?: any
  ): any;

  getVisibleIssueFieldOptions(
    params: {
      fieldKey: string,
      startAt?: number,
      maxResults?: number,
      projectId?: number
    },
    callback?: any
  ): any;

  getIssueFieldOption(
    params: {
      fieldKey: string,
      optionId: number
    },
    callback?: any
  ): any;

  updateIssueFieldOption(
    params: {
      fieldKey: string,
      optionId: number,
      id: number,
      value: string,
      properties?: any,
      config?: any
    },
    callback?: any
  ): any;

  deleteIssueFieldOption(
    params: {
      fieldKey: string,
      optionId: number
    },
    callback?: any
  ): any;

  replaceIssueFieldOption(
    params: {
      fieldKey: string,
      optionId: number,
      replaceWith?: number,
      jql?: string
    },
    callback?: any
  ): any;
}
