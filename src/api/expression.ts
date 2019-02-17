import { IExpression } from 'interfaces/api/iExpression';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Expression implements IExpression {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'expression';
    this.context = context;
  }

  public evaluateJiraExpression(
    params?: {
      expand?: string,
      expression?: string,
      context?: any
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/eval`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand,
      },
      body: {
        expression: params.expression,
        context: params.context
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
