import { IJiraApi } from '../iJiraApi';

export interface IIssue {
  prefix: string;
  context: IJiraApi;

  // Agile API
  rankIssues(
    params?: {
      issues?: string[],
      rankBeforeIssue?: string,
      rankAfterIssue?: string,
      rankCustomFieldId?: number,
    },
    callback?: any
  ): any;

  getIssueEstimationForBoard(
    params: {
      issueIdOrKey: number | string,
      boardId?: number
    },
    callback?: any
  ): any;

  estimateIssueForBoard(
    params: {
      issueIdOrKey: number | string,
      boardId?: number,
      value?: string
    },
    callback?: any
  ): any;

  // Agile and REST API
  getIssue(
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
  ): any;

  // REST API
  createIssue(
    params?: {
      updateHistory?: boolean,
      transition?: any,
      fields?: any,
      update?: any,
      historyMetadata?: any,
      properties?: any[]
    },
    callback?: any
  ): any;

  bulkIssueCreate(
    params?: {
      issueUpdates?: any[]
    },
    callback?: any
  ): any;

  getCreateIssueMetadata(
    params?: {
      projectIds?: string[],
      projectKeys?: string[],
      issuetypeIds?: string[],
      issuetypeNames?: string[],
      expand?: string
    },
    callback?: any
  ): any;

  getIssuePickerSuggestions(
    params?: {
      query?: string,
      currentJQL?: string,
      currentIssueKey?: string,
      currentProjectId?: string,
      showSubTasks?: boolean,
      showSubTaskParent?: boolean
    },
    callback?: any
  ): any;

  bulkSetIssueProperty(
    params: {
      propertyKey: string,
      value?: any,
      filter?: any
    },
    callback?: any
  ): any;

  bulkDeleteIssueProperty(
    params: {
      propertyKey: string,
      entityIds?: number[],
      currentValue?: any
    },
    callback?: any
  ): any;

  editIssue(
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
  ): any;

  deleteIssue(
    params: {
      issueIdOrKey: number | string,
      deleteSubtasks?: boolean | string
    },
    callback?: any
  ): any;

  assignIssue(
    params: {
      issueIdOrKey: number | string,

      key?: string,
      accountId?: string,
      name?: string
    },
    callback?: any
  ): any;

  addAttachment(
    params: {
      issueIdOrKey: number | string,
      body?: any
    },
    callback?: any
  ): any;

  getChangeLog(
    params: {
      issueIdOrKey: number | string,
      startAt?: number,
      maxResults?: number
    },
    callback?: any
  ): any;

  getComments(
    params: {
      issueIdOrKey: number | string,

      startAt?: number,
      maxResults?: number,
      orderBy?: string,
      expand?: string
    },
    callback?: any
  ): any;

  addComment(
    params: {
      issueIdOrKey: number | string,

      expand?: string,

      body?: any,
      visibility?: any,
      jsdPublic?: boolean,
      properties?: any[]
    },
    callback?: any
  ): any;

  getComment(
    params: {
      issueIdOrKey: number | string,
      id: number | string,

      expand?: string
    },
    callback?: any
  ): any;

  updateComment(
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
  ): any;

  deleteComment(
    params: {
      issueIdOrKey: number | string,
      id: number | string
    },
    callback?: any
  ): any;

  getEditIssueMetadata(
    params: {
      issueIdOrKey: number | string,

      overrideScreenSecurity?: boolean,
      overrideEditableFlag?: boolean
    },
    callback?: any
  ): any;

  sendNotificationForIssue(
    params: {
      issueIdOrKey: string | number,

      subject?: string,
      textBody?: string,
      htmlBody?: string,
      to?: any,
      restrict?: any
    },
    callback?: any
  ): any;

  getIssuePropertyKeys(
    params: {
      issueIdOrKey: number | string
    },
    callback?: any
  ): any;

  getIssueProperty(
    params: {
      issueIdOrKey: number | string,
      propertyKey: number | string
    },
    callback?: any
  ): any;

  setIssueProperty(
    params: {
      issueIdOrKey: number | string,
      propertyKey: number | string,

      body?: any
    },
    callback?: any
  ): any;

  deleteIssueProperty(
    params: {
      issueIdOrKey: number | string,
      propertyKey: number | string
    },
    callback?: any
  ): any;

  getRemoteIssueLinks(
    params: {
      issueIdOrKey: number | string,

      globalId?: number | string
    },
    callback?: any
  ): any;

  createOrUpdateRemoteIssueLink(
    params: {
      issueIdOrKey: number | string,

      globalId?: number | string,
      application?: any,
      relationship?: string,
      object: any
    },
    callback?: any
  ): any;

  deleteRemoteIssueLinkByGlobalId(
    params: {
      issueIdOrKey: number | string,

      globalId: number | string,
    },
    callback?: any
  ): any;

  getRemoteIssueLinkById(
    params: {
      issueIdOrKey: number | string,
      linkId: number | string,
    },
    callback?: any
  ): any;

  updateRemoteIssueLink(
    params: {
      issueIdOrKey: number | string,
      linkId: number | string,

      globalId?: number | string,
      application?: any,
      relationship?: string,
      object: any
    },
    callback?: any
  ): any;

  deleteRemoteIssueLinkById(
    params: {
      issueIdOrKey: number | string,
      linkId: number | string
    },
    callback?: any
  ): any;

  getTransitions(
    params: {
      issueIdOrKey: number | string,

      expand?: string,
      transitionId?: string,
      skipRemoteOnlyCondition?: boolean
    },
    callback?: any
  ): any;

  transitionIssue(
    params: {
      issueIdOrKey: number | string,

      transition: any,
      fields: any,
      update: any,
      historyMetadata: any,
      properties: any[]
    },
    callback?: any
  ): any;

  getVotes(
    params: {
      issueIdOrKey: number | string
    },
    callback?: any
  ): any;

  addVote(
    params: {
      issueIdOrKey: number | string
    },
    callback?: any
  ): any;

  deleteVote(
    params: {
      issueIdOrKey: number | string
    },
    callback?: any
  ): any;

  getIssueWatchers(
    params: {
      issueIdOrKey: number | string
    },
    callback?: any
  ): any;

  addWatcher(
    params: {
      issueIdOrKey: number | string
    },
    callback?: any
  ): any;

  deleteWatcher(
    params: {
      issueIdOrKey: number | string,

      username?: string,
      accountId?: number | string
    },
    callback?: any
  ): any;

  getIssueWorklogs(
    params: {
      issueIdOrKey: number | string,
      id: number | string,
      expand?: string
    },
    callback?: any
  ): any;

  addWorklog(
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
  ): any;

  getWorklog(
    params: {
      issueIdOrKey: string | number,
      id: string | number,
      expand?: string
    },
    callback?: any
  ): any;

  updateWorklog(
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
  ): any;

  deleteWorklog(
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
  ): any;

  getWorklogPropertyKeys(
    params: {
      issueIdOrKey: number | string,
      worklogId: number | string
    },
    callback?: any
  ): any;

  getWorklogProperty(
    params: {
      issueIdOrKey: number | string,
      worklogId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any;

  setWorklogProperty(
    params: {
      issueIdOrKey: number | string,
      worklogId: number | string,
      propertyKey: string,
      body?: any
    },
    callback?: any
  ): any;

  deleteWorklogProperty(
    params: {
      issueIdOrKey: number | string,
      worklogId: number | string,
      propertyKey: string
    },
    callback?: any
  ): any;
}
