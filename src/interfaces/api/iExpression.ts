import { IJiraApi } from 'interfaces/iJiraApi';

export interface IExpression {
  context: IJiraApi;
  prefix: string;

  evaluateJiraExpression(
    params?: {
      expand?: string,
      expression?: string,
      context?: any
    },
    callback?: any
  ): any;
}
