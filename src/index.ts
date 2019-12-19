import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import {
  ApplicationRoles,
  AppProperties,
  AuditRecords,
  Avatars,
  Backlog,
  Board,
  Builds,
  Dashboards,
  Deployments,
  DevelopmentInformation,
  DynamicModules,
  Epic,
  FeatureFlags,
  Filters,
  FilterSharing,
  GroupAndUserPicker,
  Groups,
  IssueNotificationSchemes,
  Issue,
  IssueAttachments,
  IssueComments,
  IssueCommentsProperties,
  IssueCustomFieldOptions,
  IssueCustomFieldOptionsApps,
  IssueFields,
  IssueLinks,
  IssueLinkTypes,
  IssueNavigatorSettings,
  IssuePriorities,
  IssueProperties,
  IssueRemoteLinks,
  IssueResolutions,
  Issues,
  IssueSearch,
  IssueSecurityLevel,
  IssueSecuritySchemes,
  IssueTypeProperties,
  IssueTypes,
  IssueVotes,
  IssueWatchers,
  IssueWorklogProperties,
  IssueWorklogs,
  JiraExpressions,
  JiraSettings,
  JQL,
  Labels,
  Myself,
  Permissions,
  PermissionSchemes,
  ProjectAvatars,
  ProjectCategories,
  ProjectComponents,
  ProjectKeysAndNameValidation,
  ProjectPermissionSchemes,
  ProjectProperties,
  ProjectRoleActors,
  ProjectRoles,
  Projects,
  ProjectTypes,
  ProjectVersions,
  Screens,
  ServerInfo,
  Sprint,
  Tasks,
  TimeTracking,
  UserProperties,
  Users,
  UserSearch,
  Webhooks,
  Workflows,
  WorkflowSchemeDrafts,
  WorkflowSchemeProjectAssociation,
  WorkflowSchemes,
  WorkflowStatusCategories,
  WorkflowStatuses,
  WorkflowTransitionRules,
} from './api';

import { Config } from './config';
import { Callback } from './callback';

export * from './config';
export * from './callback';
export * from './sender';

export class Client {
  public applicationRoles: ApplicationRoles;
  public appProperties: AppProperties;
  public auditRecords: AuditRecords;
  public avatars: Avatars;
  public backlog: Backlog;
  public board: Board;
  public builds: Builds;
  public dashboards: Dashboards;
  public deployments: Deployments;
  public developmentInformation: DevelopmentInformation;
  public dynamicModules: DynamicModules;
  public epic: Epic;
  public featureFlags: FeatureFlags;
  public filters: Filters;
  public filterSharing: FilterSharing;
  public group: GroupAndUserPicker;
  public groups: Groups;
  public issueNotificationSchemes: IssueNotificationSchemes;
  public issue: Issue;
  public issueAttachments: IssueAttachments;
  public issueComments: IssueComments;
  public issueCommentsProperties: IssueCommentsProperties;
  public issueCustomFieldOptions: IssueCustomFieldOptions;
  public issueCustomFieldOptionsApps: IssueCustomFieldOptionsApps;
  public issueFields: IssueFields;
  public issueLinks: IssueLinks;
  public issueLinkTypes: IssueLinkTypes;
  public issueNavigationSettings: IssueNavigatorSettings;
  public issuePriorities: IssuePriorities;
  public issueProperties: IssueProperties;
  public issueRemoteLinks: IssueRemoteLinks;
  public issueResolutions: IssueResolutions;
  public issues: Issues;
  public issueSearch: IssueSearch;
  public issueSecurityLevel: IssueSecurityLevel;
  public issueSecuritySchemes: IssueSecuritySchemes;
  public issueTypeProperties: IssueTypeProperties;
  public issueTypes: IssueTypes;
  public issueVotes: IssueVotes;
  public issueWatchers: IssueWatchers;
  public issueWorklogProperties: IssueWorklogProperties;
  public issueWorklogs: IssueWorklogs;
  public jiraExpressions: JiraExpressions;
  public jiraSettings: JiraSettings;
  public JQL: JQL;
  public labels: Labels;
  public myself: Myself;
  public permissions: Permissions;
  public permissionSchemes: PermissionSchemes;
  public projectAvatars: ProjectAvatars;
  public projectCategories: ProjectCategories;
  public projectComponents: ProjectComponents;
  public projectKeysAndNameValidation: ProjectKeysAndNameValidation;
  public projectPermissionSchemes: ProjectPermissionSchemes;
  public projectProperties: ProjectProperties;
  public projectRoleActors: ProjectRoleActors;
  public projectRoles: ProjectRoles;
  public projects: Projects;
  public projectTypes: ProjectTypes;
  public projectVersions: ProjectVersions;
  public screens: Screens;
  public serverInfo: ServerInfo;
  public sprint: Sprint;
  public tasks: Tasks;
  public timeTracking: TimeTracking;
  public userProperties: UserProperties;
  public users: Users;
  public userSearch: UserSearch;
  public webhooks: Webhooks;
  public workflows: Workflows;
  public workflowSchemeDrafts: WorkflowSchemeDrafts;
  public workflowSchemeProjectAssociation: WorkflowSchemeProjectAssociation;
  public workflowSchemes: WorkflowSchemes;
  public workflowStatusCategories: WorkflowStatusCategories;
  public workflowStatuses: WorkflowStatuses;
  public workflowTransitionRules: WorkflowTransitionRules;

  private config: Config;
  private requestInstance: AxiosInstance;

  constructor(config: Config) {
    this.requestInstance = axios.create({
      baseURL: config.host
    });

    this.config = config;

    this.applicationRoles = new ApplicationRoles(this);
    this.appProperties = new AppProperties(this);
    this.auditRecords = new AuditRecords(this);
    this.avatars = new Avatars(this);
    this.backlog = new Backlog(this);
    this.board = new Board(this);
    this.builds = new Builds(this);
    this.dashboards = new Dashboards(this);
    this.deployments = new Deployments(this);
    this.developmentInformation = new DevelopmentInformation(this);
    this.epic = new Epic(this);
    this.featureFlags = new FeatureFlags(this);
    this.filters = new Filters(this);
    this.filterSharing = new FilterSharing(this);
    this.group = new GroupAndUserPicker(this);
    this.groups = new Groups(this);
    this.issueNotificationSchemes = new IssueNotificationSchemes(this);
    this.issue = new Issue(this);
    this.issueAttachments = new IssueAttachments(this);
    this.issueComments = new IssueComments(this);
    this.issueCommentsProperties = new IssueCommentsProperties(this);
    this.issueCustomFieldOptions = new IssueCustomFieldOptions(this);
    this.issueCustomFieldOptionsApps = new IssueCustomFieldOptionsApps(this);
    this.issueFields = new IssueFields(this);
    this.issueLinks = new IssueLinks(this);
    this.issueLinkTypes = new IssueLinkTypes(this);
    this.issueNavigationSettings = new IssueNavigatorSettings(this);
    this.issuePriorities = new IssuePriorities(this);
    this.issueProperties = new IssueProperties(this);
    this.issueRemoteLinks = new IssueRemoteLinks(this);
    this.issueResolutions = new IssueResolutions(this);
    this.issues = new Issues(this);
    this.issueSearch = new IssueSearch(this);
    this.issueSecurityLevel = new IssueSecurityLevel(this);
    this.issueSecuritySchemes = new IssueSecuritySchemes(this);
    this.issueTypeProperties = new IssueTypeProperties(this);
    this.issueTypes = new IssueTypes(this);
    this.issueVotes = new IssueVotes(this);
    this.issueWatchers = new IssueWatchers(this);
    this.issueWorklogProperties = new IssueWorklogProperties(this);
    this.issueWorklogs = new IssueWorklogs(this);
    this.jiraExpressions = new JiraExpressions(this);
    this.jiraSettings = new JiraSettings(this);
    this.JQL = new JQL(this);
    this.labels = new Labels(this);
    this.myself = new Myself(this);
    this.permissions = new Permissions(this);
    this.permissionSchemes = new PermissionSchemes(this);
    this.projectAvatars = new ProjectAvatars(this);
    this.projectCategories = new ProjectCategories(this);
    this.projectComponents = new ProjectComponents(this);
    this.projectKeysAndNameValidation = new ProjectKeysAndNameValidation(this);
    this.projectPermissionSchemes = new ProjectPermissionSchemes(this);
    this.projectProperties = new ProjectProperties(this);
    this.projectRoleActors = new ProjectRoleActors(this);
    this.projectRoles = new ProjectRoles(this);
    this.projects = new Projects(this);
    this.projectTypes = new ProjectTypes(this);
    this.projectVersions = new ProjectVersions(this);
    this.screens = new Screens(this);
    this.serverInfo = new ServerInfo(this);
    this.sprint = new Sprint(this);
    this.tasks = new Tasks(this);
    this.timeTracking = new TimeTracking(this);
    this.userProperties = new UserProperties(this);
    this.users = new Users(this);
    this.userSearch = new UserSearch(this);
    this.webhooks = new Webhooks(this);
    this.workflows = new Workflows(this);
    this.workflowSchemeDrafts = new WorkflowSchemeDrafts(this);
    this.workflowSchemeProjectAssociation = new WorkflowSchemeProjectAssociation(this);
    this.workflowSchemes = new WorkflowSchemes(this);
    this.workflowStatusCategories = new WorkflowStatusCategories(this);
    this.workflowStatuses = new WorkflowStatuses(this);
    this.workflowTransitionRules = new WorkflowTransitionRules(this);
  }

  public async sendRequest(config: AxiosRequestConfig, callback?: Callback): Promise<any> {
    try {
      // config.headers = config.headers || {};
      // config.headers.Authorization = Utils.getAuthorization(this.config); // todo rework it

      const response = await this.requestInstance.request(config);

      if (!!callback) {
        callback(null, response.data);
      }

      return response.data;
    } catch (e) {
      if (!!callback) {
        callback(e);
      } else {
        throw e;
      }
    }
  }
}
