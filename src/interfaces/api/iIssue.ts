import { IJiraApi } from '../iJiraApi';

export interface IIssue {
  prefix: string;
  context: IJiraApi;

  // Agile API
  rankIssues(params: any, callback?: any): any;
  getIssueEstimationForBoard(params: any, callback?: any): any;
  estimateIssueForBoard(params: any, callback?: any): any;

  // Agile and REST API
  getIssue(params: any, callback?: any): any;

  // REST API
  createIssue(
    params: {
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
    params: {
      issueUpdates: any[]
    },
    callback: any
  ): any;

  getCreateIssueMetadata(params: any, callback: any): any;
  getIssuePickerSuggestions(params: any, callback: any): any;
  bulkSetIssueProperty(params: any, callback: any): any;
  bulkDeleteIssueProperty(params: any, callback: any): any;
  editIssue(params: any, callback: any): any;
  deleteIssue(params: any, callback: any): any;
  assignIssue(params: any, callback: any): any;
  addAttachment(params: any, callback: any): any;
  getChangeLog(params: any, callback: any): any;
  getComments(params: any, callback: any): any;
  addComment(params: any, callback: any): any;
  getComment(params: any, callback: any): any;
  updateComment(params: any, callback: any): any;
  deleteComment(params: any, callback: any): any;
  getEditIssueMetadata(params: any, callback: any): any;
  sendNotificationForIssue(params: any, callback: any): any;
  getIssuePropertyKeys(params: any, callback: any): any;
  getIssueProperty(params: any, callback: any): any;
  setIssueProperty(params: any, callback: any): any;
  deleteIssueProperty(params: any, callback: any): any;
  getRemoteIssueLinks(params: any, callback: any): any;
  createOrUpdateRemoteIssueLink(params: any, callback: any): any;
  deleteRemoteIssueLinkByGlobalId(params: any, callback: any): any;
  getRemoteIssueLinkById(params: any, callback: any): any;
  updateRemoteIssueLink(params: any, callback: any): any;
  deleteRemoteIssueLinkById(params: any, callback: any): any;
  getTransitions(params: any, callback: any): any;
  transitionIssue(params: any, callback: any): any;
  getVotes(params: any, callback: any): any;
  addVote(params: any, callback: any): any;
  deleteVote(params: any, callback: any): any;
  getIssueWatchers(params: any, callback: any): any;
  addWatcher(params: any, callback: any): any;
  deleteWatcher(params: any, callback: any): any;
  getIssueWorklogs(params: any, callback: any): any;
  addWorklog(params: any, callback: any): any;
  getWorklog(params: any, callback: any): any;
  updateWorklog(params: any, callback: any): any;
  deleteWorklog(params: any, callback: any): any;
  getWorklogPropertyKeys(params: any, callback: any): any;
  getWorklogProperty(params: any, callback: any): any;
  setWorklogProperty(params: any, callback: any): any;
  deleteWorklogProperty(params: any, callback: any): any;
}
