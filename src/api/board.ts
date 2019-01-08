import { IBoard } from '../interfaces/api/iBoard';
import { IJiraApi } from '../interfaces/iJiraApi';

export class Board implements IBoard {
  context: IJiraApi;
  prefix: string;

  constructor(context: IJiraApi) {
    this.prefix = '/board';
    this.context = context;
  }

  getAllBoards(params: any, callback: any): any {
    const endpoint = this.prefix;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
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

    return this.context.makeRequest(options, callback);
  }

  createBoard(params: any, callback: any): any {
    const endpoint = this.prefix;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
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

    return this.context.makeRequest(options, callback);
  }

  getBoard(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.makeRequest(options, callback);
  }

  deleteBoard(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.makeRequest(options, callback);
  }

  getIssuesForBacklog(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/backlog`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
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

    return this.context.makeRequest(options, callback);
  }

  getConfiguration(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/configuration`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.makeRequest(options, callback);
  }

  getEpics(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/epic`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        done: params.done
      }
    };

    return this.context.makeRequest(options, callback);
  }

  getIssuesWithoutEpic(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/epic/none/issue`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
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

    return this.context.makeRequest(options, callback);
  }

  getIssuesForEpic(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/epic/${params.epicId}/issue`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
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

    return this.context.makeRequest(options, callback);
  }

  getFeaturesForBoard(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/features`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.makeRequest(options, callback);
  }

  toggleFeatures(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/features`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        boardId: params.boardId,
        feature: params.feature,
        enabling: params.enabling
      }
    };

    return this.context.makeRequest(options, callback);
  }

  getIssuesForBoard(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/issue`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
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

    return this.context.makeRequest(options, callback);
  }

  moveIssuesToBoard(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/issue`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
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

    return this.context.makeRequest(options, callback);
  }

  getProjects(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/project`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults
      }
    };

    return this.context.makeRequest(options, callback);
  }

  getProjectsFull(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/project/full`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.makeRequest(options, callback);
  }

  getBoardPropertyKeys(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/properties`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.makeRequest(options, callback);
  }

  getBoardProperty(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.makeRequest(options, callback);
  }

  setBoardProperty(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'PUT',
      json: true,
      followAllRedirects: true
    };

    return this.context.makeRequest(options, callback);
  }

  deleteBoardProperty(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.makeRequest(options, callback);
  }

  getAllQuickFilters(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/quickfilter`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults
      }
    };

    return this.context.makeRequest(options, callback);
  }

  getQuickFilter(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/quickfilter/${params.quickFilterId}`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
    };

    return this.context.makeRequest(options, callback);
  }

  getReportsForBoard(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/reports`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
    };

    return this.context.makeRequest(options, callback);
  }

  getAllSprints(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/sprint`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        state: params.state
      }
    };

    return this.context.makeRequest(options, callback);
  }

  getIssuesForSprint(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/sprint/${params.sprintId}/issue`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
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

    return this.context.makeRequest(options, callback);
  }

  getAllVersions(params: any, callback: any): any {
    const endpoint = `${this.prefix}/${params.boardId}/version`;

    const options = {
      uri: this.context.buildAgileUrl(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        released: params.released
      }
    };

    return this.context.makeRequest(options, callback);
  }
}
