import { IFilter } from 'interfaces/api/iFilter';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Filter implements IFilter {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'filter';
    this.context = context;
  }

  /**
   * @deprecated
   */
  public getFilters(params?: { expand?: string }, callback?: any): any {
    const endpoint: string = this.prefix;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public createFilter(
    params: {
      expand?: string,
      name: string,
      description?: string,
      jql?: string,
      favourite?: boolean,
      sharePermissions?: any[]
    },
    callback?: any
  ): any {
    const endpoint: string = this.prefix;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand
      },
      body: {
        name: params.name,
        description: params.description,
        jql: params.jql,
        favourite: params.favourite,
        sharePermissions: params.sharePermissions
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getDefaultShareScope(callback?: any): any {
    const endpoint: string = `${this.prefix}/defaultShareScope`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public setDefaultShareScope(
    params: {
      scope: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/defaultShareScope`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        scope: params.scope
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getFavoriteFilters(
    params?: {
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/favourite`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getMyFilters(
    params?: {
      expand?: string,
      includeFavourites?: boolean
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/my`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand,
        includeFavourites: params.includeFavourites
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public searchForFilters(
    params?: {
      filterName?: string,
      accountId?: string,
      owner?: string,
      groupname?: string,
      projectId?: number,
      orderBy?: string,
      startAt?: number,
      maxResults?: number,
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/search`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        filterName: params.filterName,
        accountId: params.accountId,
        owner: params.owner,
        groupname: params.groupname,
        projectId: params.projectId,
        orderBy: params.orderBy,
        startAt: params.startAt,
        maxResults: params.maxResults,
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getFilter(
    params: {
      id: number,
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public updateFilter(
    params: {
      id: number,
      expand?: string,
      name: string,
      description?: string,
      jql?: string,
      favourite?: boolean,
      sharePermissions?: any[]
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand
      },
      body: {
        name: params.name,
        description: params.description,
        jql: params.jql,
        favourite: params.favourite,
        sharePermissions: params.sharePermissions
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteFilter(
    params: {
      id: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getColumns(
    params: {
      id: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.id}/columns`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public setColumns(
    params: {
      id: number,
      body: any
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.id}/columns`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      headers: {
        'Content-Type': '*/*'
      },
      followAllRedirects: true,
      body: params.body
    };

    return this.context.sendRequest(options, callback);
  }

  public resetColumns(
    params: {
      id: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.id}/columns`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public addFilterAsFavorite(
    params: {
      id: number,
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.id}/favourite`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public removeFilterAsFavorite(
    params: {
      id: number,
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.id}/favourite`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getSharePermissions(
    params: {
      id: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.id}/permission`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public addSharePermissions(
    params: {
      id: number,
      type: string,
      projectId?: string,
      groupname?: string,
      projectRoleId?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.id}/permission`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        type: params.type,
        projectId: params.projectId,
        groupname: params.groupname,
        projectRoleId: params.projectRoleId
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getSharePermission(
    params: {
      id: number,
      permissionId: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.id}/permission/${params.permissionId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteSharePermission(
    params: {
      id: number,
      permissionId: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.id}/permission/${params.permissionId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }
}
