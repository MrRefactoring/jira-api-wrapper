/* eslint-disable no-unused-vars */

export const board = (context) => {
  this.prefix = '/board';
  this.context = context;

  const getAllBoards = (parameters, callback) => {
    const endpoint = this.prefix;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: parameters.startAt,
        maxResults: parameters.maxResults,
        type: parameters.type,
        name: parameters.name,
        projectKeyOrId: parameters.projectKeyOrId,
        accountIdLocation: parameters.accountIdLocation,
        userkeyLocation: parameters.userkeyLocation,
        usernameLocation: parameters.usernameLocation,
        projectLocation: parameters.projectLocation,
        includePrivate: parameters.includePrivate,
        negateLocationFiltering: parameters.negateLocationFiltering,
        orderBy: parameters.orderBy,
        expand: parameters.expand
      }
    };

    return this.context.makeRequest(options, callback);
  };

  const createBoard = (parameters, callback) => {
    const endpoint = this.prefix;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        name: parameters.name,
        type: parameters.type,
        filterId: parameters.filterId,
        location: parameters.location
      }
    };

    return this.context.makeRequest(options, callback);
  };

  const getBoard = (parameters, callback) => {
    const endpoint = `${this.prefix}/${parameters.boardId}`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.makeRequest(options, callback);
  };

  const deleteBoard = (parameters, callback) => {
    const endpoint = `${this.prefix}/${parameters.boardId}`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.makeRequest(options, callback);
  };

  const getIssuesForBacklog = (parameters, callback) => {
    const endpoint = `${this.prefix}/${parameters.boardId}/backlog`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: parameters.startAt,
        maxResults: parameters.maxResults,
        jql: parameters.jql,
        validateQuery: parameters.validateQuery,
        fields: parameters.fields ? parameters.fields.join(',') : undefined,
        expand: parameters.expand
      }
    };

    return this.context.makeRequest(options, callback);
  };

  const getConfiguration = (parameters, callback) => {
    const endpoint = `${this.prefix}/${parameters.boardId}/configuration`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.makeRequest(options, callback);
  };

  const getEpics = (parameters, callback) => {
    const endpoint = `${this.prefix}/${parameters.boardId}/epic`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: parameters.startAt,
        maxResults: parameters.maxResults,
        done: parameters.done
      }
    };

    return this.context.makeRequest(options, callback);
  };

  const getIssuesWithoutEpic = (parameters, callback) => {
    const endpoint = `${this.prefix}/${parameters.boardId}/epic/none/issue`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: parameters.startAt,
        maxResults: parameters.maxResults,
        jql: parameters.jql,
        validateQuery: parameters.validateQuery,
        fields: parameters.fields ? parameters.fields.join(',') : undefined,
        expand: parameters.expand
      }
    };

    return this.context.makeRequest(options, callback);
  };

  const getIssuesForEpic = (parameters, callback) => {
    const endpoint = `${this.prefix}/${parameters.boardId}/epic/${parameters.epicId}/issue`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: parameters.startAt,
        maxResults: parameters.maxResults,
        jql: parameters.jql,
        validateQuery: parameters.validateQuery,
        fields: parameters.fields ? parameters.fields.join(',') : undefined,
        expand: parameters.expand
      }
    };

    return this.context.makeRequest(options, callback);
  };

  const getFeaturesForBoard = (parameters, callback) => {
    const endpoint = `${this.prefix}/${parameters.boardId}/features`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.makeRequest(options, callback);
  };

  const toggleFeatures = (parameters, callback) => {
    const endpoint = `${this.prefix}/${parameters.boardId}/features`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        boardId: parameters.boardId,
        feature: parameters.feature,
        enabling: parameters.enabling
      }
    };

    return this.context.makeRequest(options, callback);
  };

  getIssuesForBoard = (parameters, callback) => {
    const endpoint = `${this.prefix}/`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {

      }
    };

    return this.context.makeRequest(options, callback);
  };

  moveIssuesToBoard = (parameters, callback) => {
    const endpoint = `${this.prefix}/`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {

      }
    };

    return this.context.makeRequest(options, callback);
  };

  getProjects = (parameters, callback) => {
    const endpoint = `${this.prefix}/`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {

      }
    };

    return this.context.makeRequest(options, callback);
  };

  getProjectsFull = (parameters, callback) => {
    const endpoint = `${this.prefix}/`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {

      }
    };

    return this.context.makeRequest(options, callback);
  };

  getBoardPropertyKeys = (parameters, callback) => {
    const endpoint = `${this.prefix}/`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {

      }
    };

    return this.context.makeRequest(options, callback);
  };

  getBoardProperty = (parameters, callback) => {
    const endpoint = `${this.prefix}/`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {

      }
    };

    return this.context.makeRequest(options, callback);
  };

  setBoardProperty = (parameters, callback) => {
    const endpoint = `${this.prefix}/`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {

      }
    };

    return this.context.makeRequest(options, callback);
  };

  deleteBoardProperty = (parameters, callback) => {
    const endpoint = `${this.prefix}/`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {

      }
    };

    return this.context.makeRequest(options, callback);
  };

  getAllQuickFilters = (parameters, callback) => {
    const endpoint = `${this.prefix}/`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {

      }
    };

    return this.context.makeRequest(options, callback);
  };

  getQuickFilter = (parameters, callback) => {
    const endpoint = `${this.prefix}/`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {

      }
    };

    return this.context.makeRequest(options, callback);
  };

  getReportsForBoard = (parameters, callback) => {
    const endpoint = `${this.prefix}/`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {

      }
    };

    return this.context.makeRequest(options, callback);
  };

  getAllSprints = (parameters, callback) => {
    const endpoint = `${this.prefix}/`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {

      }
    };

    return this.context.makeRequest(options, callback);
  };

  getIssuesForSprit = (parameters, callback) => {
    const endpoint = `${this.prefix}/`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {

      }
    };

    return this.context.makeRequest(options, callback);
  };

  getAllVersions = (parameters, callback) => {
    const endpoint = `${this.prefix}/`;

    const options = {
      uri: this.context.buildAgileURL(endpoint),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {

      }
    };

    return this.context.makeRequest(options, callback);
  };
}
