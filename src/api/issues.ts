import { Sender } from '../sender';
import { Callback } from '../callback';
import { AxiosRequestConfig } from 'axios';

const prepareParams = (obj: any): any => {
  const result = {};

  Object.keys(obj).forEach(key => {
    if (Array.isArray(obj[key])) {
      result[key] = obj[key].join(',');
      return;
    }

    result[key] = obj[key];
  });

  return result;
};

export class Issues {
  constructor(private readonly client: Sender) { }

  public async create(
    params?: {
      updateHistory?: boolean;
      transition?: any;
      fields?: any;
      update?: any;
      historyMetadata?: any;
      properties: any[];
      [key: string]: any;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/issue',
      method: 'POST',
      params: {
        updateHistory: params.updateHistory,
      },
      data: {
        ...(params || {}),
        updateHistory: undefined,
      }
    };

    return this.client.sendRequest(request, callback);
  }

  public async bulkCreate(
    params: {
      issueUpdates?: any[];
      [key: string]: any;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/issue/bulk',
      method: 'POST',
      data: params,
    };

    return this.client.sendRequest(request, callback);
  }

  public async getCreateMetadata(
    params: {
      projectIds?: string[];
      projectKeys?: string[];
      issuetypeIds?: string[];
      issuetypeNames?: string[];
      expand?: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: '/rest/api/2/issue/createmeta',
      method: 'GET',
      params: prepareParams(params),
    };

    return this.client.sendRequest(request, callback);
  }

  public async get(
    params: {
      issueIdOrKey: string;
      fields?: string[];
      fieldsByKeys?: boolean;
      expand?: string;
      properties?: string[];
      updateHistory?: boolean;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/issue/${params.issueIdOrKey}`,
      method: 'GET',
      params: prepareParams({ ...params, issueIdOrKey: undefined, }),
    };

    return this.client.sendRequest(request, callback);
  }

  public async edit(
    params: {
      issueIdOrKey: string;
      notifyUsers?: boolean;
      overrideScreenSecurity?: boolean;
      overrideEditableFlag?: boolean;
      transition?: any;
      fields?: any;
      update?: any;
      historyMetadata?: any;
      properties?: any[];
      [key: string]: any;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/issue/${params.issueIdOrKey}`,
      method: 'PUT',
      params: {
        notifyUsers: params.notifyUsers,
        overrideScreenSecurity: params.overrideScreenSecurity,
        overrideEditableFlag: params.overrideEditableFlag,
      },
      data: {
        ...params,
        issueIdOrKey: undefined,
        notifyUsers: undefined,
        overrideScreenSecurity: undefined,
        overrideEditableFlag: undefined,
      },
    };

    return this.client.sendRequest(request, callback);
  }

  public async delete(
    params: {
      issueIdOrKey: string;
      deleteSubtasks?: boolean;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/issue/${params.issueIdOrKey}`,
      method: 'DELETE',
      params: {
        deleteSubtasks: `${params.deleteSubtasks}`,
      }
    };

    return this.client.sendRequest(request, callback);
  }

  public async assign(
    params: {
      issueIdOrKey: string;
      key?: string;
      accountId?: string;
      name?: string;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/issue/${params.issueIdOrKey}/assignee`,
      method: 'PUT',
      data: {
        ...params,
        issueIdOrKey: undefined,
      }
    };

    return this.client.sendRequest(request, callback);
  }

  public async getChangeLogs(
    params: {
      issueIdOrKey: string;
      startAt?: number;
      maxResults?: number;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/issue/${params.issueIdOrKey}/changelog`,
      method: 'GET',
      params: { ...params, issueIdOrKey: undefined, },
    };

    return this.client.sendRequest(request, callback);
  }

  public async getEditMetadata(
    params: {
      issueIdOrKey: string;
      overrideScreenSecurity?: boolean;
      overrideEditableFlag?: boolean;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/issue/${params.issueIdOrKey}/editmeta`,
      method: 'GET',
      params: { ...params, issueIdOrKey: undefined, },
    };

    return this.client.sendRequest(request, callback);
  }

  public async sendNotification(
    params: {
      issueIdOrKey: string;
      subject?: string;
      textBody?: string;
      htmlBody?: string;
      to?: any;
      restrict?: any;
      [key: string]: any;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/2/issue/${params.issueIdOrKey}/notify`,
      method: 'POST',
      data: { ...params, issueIdOrKey: undefined, },
    };

    return this.client.sendRequest(request, callback);
  }

  public async getTransactions(
    params: {
      issueIdOrKey?: string;
      expand?: string;
      transitionId?: string;
      skipRemoteOnlyCondition?: boolean;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/3/issue/${params.issueIdOrKey}/transitions`,
      method: 'GET',
      params: { ...params, issueIdOrKey: undefined, },
    };

    return this.client.sendRequest(request, callback);
  }

  public async transition(
    params: {
      issueIdOrKey: string;
      transition?: any;
      fields?: any;
      update?: any;
      historyMetadata?: any;
      properties?: any[];
      [key: string]: any;
    },
    callback?: Callback,
  ): Promise<any> {
    const request: AxiosRequestConfig = {
      url: `/rest/api/3/issue/${params.issueIdOrKey}/transitions`,
      method: 'POST',
      data: { ...params, issueIdOrKey: undefined, },
    };

    return this.client.sendRequest(request, callback);
  }
}
