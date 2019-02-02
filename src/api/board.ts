import { IBoard } from 'interfaces/api/iBoard';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Board implements IBoard {
  public context: IJiraApi;
  public prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = 'board';
    this.context = context;
  }

  public getAllBoards(
    params?: {
      startAt?: number,
      maxResults?: number,
      type?: string,
      name?: string,
      projectKeyOrId?: string | number,
      accountIdLocation?: string,
      userkeyLocation?: string,
      usernameLocation?: string,
      projectLocation?: string,
      includePrivate?: boolean,
      negateLocationFiltering?: boolean,
      orderBy?: string,
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint = this.prefix;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        type: params.type,
        name: params.name,
        projectKeyOrId: params.projectKeyOrId,
        accountIdLocation: params.accountIdLocation,
        userkeyLocation: params.userkeyLocation,
        usernameLocation: params.usernameLocation,
        projectLocation: params.projectLocation,
        includePrivate: params.includePrivate,
        negateLocationFiltering: params.negateLocationFiltering,
        orderBy: params.orderBy,
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public createBoard(
    params?: {
      name?: string,
      type?: string,
      filterId?: number,
      location?: any,
    },
    callback?: any
  ): any {
    const endpoint = this.prefix;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        name: params.name,
        type: params.type,
        filterId: params.filterId,
        location: params.location
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getBoard(
    params: {
      boardId: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteBoard(
    params: {
      boardId: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssuesForBacklog(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/backlog`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        jql: params.jql,
        validateQuery: params.validateQuery,
        fields: params.fields ? params.fields.join(',') : undefined,
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getConfiguration(
    params: {
      boardId: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/configuration`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getEpics(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number,
      done?: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/epic`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        done: params.done
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssuesWithoutEpic(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/epic/none/issue`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        jql: params.jql,
        validateQuery: params.validateQuery,
        fields: params.fields ? params.fields.join(',') : undefined,
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssuesForEpic(
    params: {
      boardId: number | string,
      epicId: number | string,

      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/epic/${params.epicId}/issue`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        jql: params.jql,
        validateQuery: params.validateQuery,
        fields: params.fields ? params.fields.join(',') : undefined,
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getFeaturesForBoard(
    params: {
      boardId: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/features`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public toggleFeatures(
    params: {
      boardIdPath: number | string,

      boardId?: number | string,
      feature?: string,
      enabling?: boolean
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardIdPath}/features`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        boardId: params.boardId,
        feature: params.feature,
        enabling: params.enabling
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssuesForBoard(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string,
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/issue`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        jql: params.jql,
        validateQuery: params.validateQuery,
        fields: params.fields ? params.fields.join(',') : undefined,
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public moveIssuesToBoard(
    params: {
      boardId: number | string,

      issues?: string[],
      rankBeforeIssue?: string,
      rankAfterIssue?: string,
      rankCustomFieldId?: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/issue`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        issues: params.issues ? params.issues.join(',') : undefined,
        rankBeforeIssue: params.rankBeforeIssue,
        rankAfterIssue: params.rankAfterIssue,
        rankCustomFieldId: params.rankCustomFieldId
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getProjects(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/project`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getProjectsFull(
    params: {
      boardId: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/project/full`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getBoardPropertyKeys(
    params: {
      boardId: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/properties`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getBoardProperty(
    params: {
      boardId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public setBoardProperty(
    params: {
      boardId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'PUT',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteBoardProperty(
    params: {
      boardId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getAllQuickFilters(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/quickfilter`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getQuickFilter(
    params: {
      boardId: number | string,
      quickFilterId: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/quickfilter/${params.quickFilterId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
    };

    return this.context.sendRequest(options, callback);
  }

  public getReportsForBoard(
    params: {
      boardId: number | string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/reports`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
    };

    return this.context.sendRequest(options, callback);
  }

  public getAllSprints(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number,
      state?: string,
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/sprint`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        state: params.state
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssuesForSprint(
    params: {
      boardId: number | string,
      sprintId: number | string,

      startAt?: number,
      maxResults?: number,
      jql?: string,
      validateQuery?: boolean,
      fields?: string[],
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/sprint/${params.sprintId}/issue`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        jql: params.jql,
        validateQuery: params.validateQuery,
        fields: params.fields ? params.fields.join(',') : undefined,
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getAllVersions(
    params: {
      boardId: number | string,

      startAt?: number,
      maxResults?: number,
      released?: string
    },
    callback?: any
  ): any {
    const endpoint = `${this.prefix}/${params.boardId}/version`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        released: params.released
      }
    };

    return this.context.sendRequest(options, callback);
  }
}
