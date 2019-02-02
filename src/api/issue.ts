import { IIssue } from 'interfaces/api/iIssue';
import { IJiraApi } from 'interfaces/iJiraApi';

export class Issue implements IIssue {
  public prefix: string;
  public context: IJiraApi;

  constructor(context: IJiraApi) {
    this.prefix = 'issue';
    this.context = context;
  }

  // Agile API
  public rankIssues(
    params?: {
      issues?: string[],
      rankBeforeIssue?: string,
      rankAfterIssue?: string,
      rankCustomFieldId?: number,
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/rank`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        issues: params.issues,
        rankBeforeIssue: params.rankBeforeIssue,
        rankAfterIssue: params.rankAfterIssue,
        rankCustomFieldId: params.rankCustomFieldId
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssueEstimationForBoard(
    params: {
      issueIdOrKey: number | string,

      boardId?: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/estimation`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        boardId: params.boardId
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public estimateIssueForBoard(
    params: {
      issueIdOrKey: number | string,

      boardId?: number,

      value?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/estimation`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'agile'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      qs: {
        boardId: params.boardId
      },
      body: {
        value: params.value
      }
    };

    return this.context.sendRequest(options, callback);
  }

  // Agile and REST API
  public getIssue(
    params: {
      issueIdOrKey: number | string,

      agile?: boolean,

      fields?: string[],
      fieldsByKeys?: boolean,
      expand?: string,
      properties?: string[],
      updateHistory?: boolean
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, params.agile ? 'agile' : 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        fields: params.fields ? params.fields.join(',') : undefined,
        fieldsByKeys: params.fieldsByKeys,
        expand: params.expand,
        properties: params.properties ? params.properties.join(',') : undefined,
        updateHistory: params.updateHistory
      }
    };

    return this.context.sendRequest(options, callback);
  }

  // REST API
  public createIssue(
    params?: {
      updateHistory?: boolean,
      transition?: any,
      fields?: any,
      update?: any,
      historyMetadata?: any,
      properties?: any[]
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
        updateHistory: params.updateHistory
      },
      body: {
        transition: params.transition,
        fields: params.fields,
        update: params.update,
        historyMetadata: params.historyMetadata,
        properties: params.properties
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public bulkIssueCreate(
    params?: {
      issueUpdates?: any[]
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/bulk`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        issueUpdates: params.issueUpdates
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getCreateIssueMetadata(
    params?: {
      projectIds?: string[],
      projectKeys?: string[],
      issuetypeIds?: string[],
      issuetypeNames?: string[],
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/createmeta`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        projectIds: params.projectIds ? params.projectIds.join(',') : undefined,
        projectKeys: params.projectKeys ? params.projectKeys.join(',') : undefined,
        issuetypeIds: params.issuetypeIds ? params.issuetypeIds.join(',') : undefined,
        issuetypeNames: params.issuetypeNames ? params.issuetypeNames.join(',') : undefined,
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssuePickerSuggestions(
    params?: {
      query?: string,
      currentJQL?: string,
      currentIssueKey?: string,
      currentProjectId?: string,
      showSubTasks?: boolean,
      showSubTaskParent?: boolean
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/picker`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        query: params.query,
        currentJQL: params.currentJQL,
        currentIssueKey: params.currentIssueKey,
        currentProjectId: params.currentProjectId,
        showSubTasks: params.showSubTasks,
        showSubTaskParent: params.showSubTaskParent
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public bulkSetIssueProperty(
    params: {
      propertyKey: string,
      value?: any,
      filter?: any
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/properties/${params.propertyKey}`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        value: params.value,
        filter: params.filter
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public bulkDeleteIssueProperty(
    params: {
      propertyKey: string,
      entityIds?: number[],
      currentValue?: any
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/properties/${params.propertyKey}`;
    params = params || {};

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true,
      body: {
        entityIds: params.entityIds,
        currentValue: params.currentValue
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public editIssue(
    params: {
      issueIdOrKey: number | string,

      notifyUsers?: boolean,
      overrideScreenSecurity?: boolean,
      overrideEditableFlag?: boolean,

      transition?: any,
      fields?: any,
      update?: any,
      historyMetadata?: any,
      properties?: any[]
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      qs: {
        notifyUsers: params.notifyUsers,
        overrideScreenSecurity: params.overrideScreenSecurity,
        overrideEditableFlag: params.overrideEditableFlag
      },
      body: {
        transition: params.transition,
        fields: params.fields,
        update: params.update,
        historyMetadata: params.historyMetadata,
        properties: params.properties
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteIssue(
    params: {
      issueIdOrKey: number | string,
      deleteSubtasks?: boolean | string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true,
      qs: {
        deleteSubtasks: params.deleteSubtasks
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public assignIssue(
    params: {
      issueIdOrKey: number | string,

      key?: string,
      accountId?: string,
      name?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/assignee`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        key: params.key,
        accountId: params.accountId,
        name: params.name
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public addAttachment(
    params: {
      issueIdOrKey: number | string,
      body?: any
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/attachments`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: params.body
    };

    return this.context.sendRequest(options, callback);
  }

  public getChangeLog(
    params: {
      issueIdOrKey: number | string,
      startAt?: number,
      maxResults?: number
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/changelog`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
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

  public getComments(
    params: {
      issueIdOrKey: number | string,

      startAt?: number,
      maxResults?: number,
      orderBy?: string,
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/comment`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        startAt: params.startAt,
        maxResults: params.maxResults,
        orderBy: params.orderBy,
        expand: params.expand
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public addComment(
    params: {
      issueIdOrKey: number | string,

      expand?: string,

      body?: any,
      visibility?: any,
      jsdPublic?: boolean,
      properties?: any[]
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/comment`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand
      },
      body: {
        body: params.body,
        visibility: params.visibility,
        jsdPublic: params.jsdPublic,
        properties: params.properties
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getComment(
    params: {
      issueIdOrKey: number | string,
      id: number | string,

      expand?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/comment/${params.id}`;

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

  public updateComment(
    params: {
      issueIdOrKey: number | string,
      id: number | string,

      expand?: string,

      body?: any,
      visibility?: any,
      jsdPublic?: boolean,
      properties?: any[]
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/comment/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand
      },
      body: {
        body: params.body,
        visibility: params.visibility,
        jsdPublic: params.jsdPublic,
        properties: params.properties
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteComment(
    params: {
      issueIdOrKey: number | string,
      id: number | string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/comment/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getEditIssueMetadata(
    params: {
      issueIdOrKey: number | string,

      overrideScreenSecurity?: boolean,
      overrideEditableFlag?: boolean
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/editmeta`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        overrideScreenSecurity: params.overrideScreenSecurity,
        overrideEditableFlag: params.overrideEditableFlag
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public sendNotificationForIssue(
    params: {
      issueIdOrKey: string | number,

      subject?: string,
      textBody?: string,
      htmlBody?: string,
      to?: any,
      restrict?: any
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/notify`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        subject: params.subject,
        textBody: params.textBody,
        htmlBody: params.htmlBody,
        to: params.to,
        restrict: params.restrict
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssuePropertyKeys(
    params: {
      issueIdOrKey: number | string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/properties`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssueProperty(
    params: {
      issueIdOrKey: number | string,
      propertyKey: number | string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public setIssueProperty(
    params: {
      issueIdOrKey: number | string,
      propertyKey: number | string,

      body?: any
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: params.body
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteIssueProperty(
    params: {
      issueIdOrKey: number | string,
      propertyKey: number | string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getRemoteIssueLinks(
    params: {
      issueIdOrKey: number | string,

      globalId?: number | string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/remotelink`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        globalId: params.globalId
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public createOrUpdateRemoteIssueLink(
    params: {
      issueIdOrKey: number | string,

      globalId?: number | string,
      application?: any,
      relationship?: string,
      object: any
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/remotelink`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        globalId: params.globalId,
        application: params.application,
        relationship: params.relationship,
        object: params.object
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteRemoteIssueLinkByGlobalId(
    params: {
      issueIdOrKey: number | string,

      globalId: number | string,
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/remotelink`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true,
      qs: {
        globalId: params.globalId
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getRemoteIssueLinkById(
    params: {
      issueIdOrKey: number | string,
      linkId: number | string,
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/remotelink/${params.linkId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public updateRemoteIssueLink(
    params: {
      issueIdOrKey: number | string,
      linkId: number | string,

      globalId?: number | string,
      application?: any,
      relationship?: string,
      object: any
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/remotelink/${params.linkId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: {
        globalId: params.globalId,
        application: params.application,
        relationship: params.relationship,
        object: params.object
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteRemoteIssueLinkById(
    params: {
      issueIdOrKey: number | string,
      linkId: number | string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/remotelink/${params.linkId}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getTransitions(
    params: {
      issueIdOrKey: number | string,

      expand?: string,
      transitionId?: string,
      skipRemoteOnlyCondition?: boolean
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/transitions`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true,
      qs: {
        expand: params.expand,
        transitionId: params.transitionId,
        skipRemoteOnlyCondition: params.skipRemoteOnlyCondition
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public transitionIssue(
    params: {
      issueIdOrKey: number | string,

      transition: any,
      fields: any,
      update: any,
      historyMetadata: any,
      properties: any[]
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/transitions`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      body: {
        transition: params.transition,
        fields: params.fields,
        update: params.update,
        historyMetadata: params.historyMetadata,
        properties: params.properties
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getVotes(
    params: {
      issueIdOrKey: number | string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/votes`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public addVote(
    params: {
      issueIdOrKey: number | string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/votes`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteVote(
    params: {
      issueIdOrKey: number | string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/votes`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssueWatchers(
    params: {
      issueIdOrKey: number | string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/watchers`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public addWatcher(
    params: {
      issueIdOrKey: number | string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/watchers`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteWatcher(
    params: {
      issueIdOrKey: number | string,

      username?: string,
      accountId?: number | string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/watchers`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true,
      qs: {
        username: params.username,
        accountId: params.accountId
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getIssueWorklogs(
    params: {
      issueIdOrKey: number | string,
      id: number | string,
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/worklog/${params.id}`;

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

  public addWorklog(
    params: {
      issueIdOrKey: string | number,

      notifyUsers?: boolean,
      adjustEstimate?: string,
      newEstimate?: string,
      reduceBy?: string,
      expand?: string,
      overrideEditableFlag?: boolean,

      author?: any,
      updateAuthor?: any,
      comment?: any,
      visibility?: any,
      started?: string,
      timeSpent?: string,
      timeSpentSeconds?: number,
      properties?: any[]
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/worklog`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'POST',
      json: true,
      followAllRedirects: true,
      qs: {
        notifyUsers: params.notifyUsers,
        adjustEstimate: params.adjustEstimate,
        newEstimate: params.newEstimate,
        reduceBy: params.reduceBy,
        expand: params.expand,
        overrideEditableFlag: params.overrideEditableFlag
      },
      body: {
        author: params.author,
        updateAuthor: params.updateAuthor,
        comment: params.comment,
        visibility: params.visibility,
        started: params.started,
        timeSpent: params.timeSpent,
        timeSpentSeconds: params.timeSpentSeconds,
        properties: params.properties
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getWorklog(
    params: {
      issueIdOrKey: string | number,
      id: string | number,
      expand?: string
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/worklog/${params.id}`;

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

  public updateWorklog(
    params: {
      issueIdOrKey: number | string,
      id: number | string,

      notifyUsers?: boolean,
      adjustEstimate?: string,
      newEstimate?: string,
      expand?: string,
      overrideEditableFlag?: boolean,

      author?: any,
      updateAuthor?: any,
      comment?: any,
      visibility?: any,
      started?: string,
      timeSpent?: string,
      timeSpentSeconds?: number | string,
      properties?: any[]
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/worklog/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      qs: {
        notifyUsers: params.notifyUsers,
        adjustEstimate: params.adjustEstimate,
        newEstimate: params.newEstimate,
        expand: params.expand,
        overrideEditableFlag: params.overrideEditableFlag
      },
      body: {
        author: params.author,
        updateAuthor: params.updateAuthor,
        comment: params.comment,
        visibility: params.visibility,
        started: params.started,
        timeSpent: params.timeSpent,
        timeSpentSeconds: params.timeSpentSeconds,
        properties: params.properties
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteWorklog(
    params: {
      issueIdOrKey: number | string,
      id: number | string,
      notifyUsers?: boolean,
      adjustEstimate?: string,
      newEstimate?: string,
      increaseBy?: string,
      overrideEditableFlag?: boolean
    },
    callback?: any
  ): any {
    const endpoint: string = `${this.prefix}/${params.issueIdOrKey}/worklog/${params.id}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true,
      qs: {
        notifyUsers: params.notifyUsers,
        adjustEstimate: params.adjustEstimate,
        newEstimate: params.newEstimate,
        increaseBy: params.increaseBy,
        overrideEditableFlag: params.overrideEditableFlag
      }
    };

    return this.context.sendRequest(options, callback);
  }

  public getWorklogPropertyKeys(
    params: {
      issueIdOrKey: number | string,
      worklogId: number | string
    },
    callback?: any
  ): any {
    const endpoint: string =
      `${this.prefix}/${params.issueIdOrKey}/worklog/${params.worklogId}/properties`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public getWorklogProperty(
    params: {
      issueIdOrKey: number | string,
      worklogId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any {
    const endpoint: string =
      `${this.prefix}/${params.issueIdOrKey}/worklog/${params.worklogId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'GET',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }

  public setWorklogProperty(
    params: {
      issueIdOrKey: number | string,
      worklogId: number | string,
      propertyKey: string,
      body?: any
    },
    callback?: any
  ): any {
    const endpoint: string =
      `${this.prefix}/${params.issueIdOrKey}/worklog/${params.worklogId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'PUT',
      json: true,
      followAllRedirects: true,
      body: params.body
    };

    return this.context.sendRequest(options, callback);
  }

  public deleteWorklogProperty(
    params: {
      issueIdOrKey: number | string,
      worklogId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any {
    const endpoint: string =
      `${this.prefix}/${params.issueIdOrKey}/worklog/${params.worklogId}/properties/${params.propertyKey}`;

    const options = {
      uri: this.context.makeUrl(endpoint, 'api'),
      method: 'DELETE',
      json: true,
      followAllRedirects: true
    };

    return this.context.sendRequest(options, callback);
  }
}
