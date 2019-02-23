import { IGroup } from 'interfaces/api/iGroup';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Group implements IGroup {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'group';
    this.context = context;
  }

  /**
   * @deprecated use getUsersFromGroup({ params })
   */
  public getGroup(
    params: {
      groupname: string,
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint: string = this.prefix;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        groupname: params.groupname,
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public createGroup(
    params: {
      name: string
    },
    callback?: any
  ): any {
    const endpoint: string = this.prefix;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        name: params.name
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public removeGroup(
    params: {
      groupname: string,
      swapGroup?: string
    },
    callback?: any
  ): any {
    const endpoint: string = this.prefix;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true,
      qs: {
        groupname: params.groupname,
        swapGroup: params.swapGroup
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getUsersFromGroup(
    params: {
      groupname: string,
      includeInactiveUsers?: boolean,
      startAt?: number,
      maxResults?: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/member`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        groupname: params.groupname,
        includeInactiveUsers: params.includeInactiveUsers,
        startAt: params.startAt,
        maxResults: params.maxResults
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public addUserToGroup(
    params: {
      groupname: string,
      name?: string,
      accountId?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/user`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      qs: {
        groupname: params.groupname
      },
      body: {
        name: params.name,
        accountId: params.accountId
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public removeUserFromGroup(
    params: {
      groupname: string,
      username?: string,
      accountId?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/user`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true,
      qs: {
        groupname: params.groupname,
        username: params.username,
        accountId: params.accountId
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
