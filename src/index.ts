import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import {
  ApplicationRoles,
  AuditRecords,
  Avatars,
  Backlog,
  Board,
  Builds,
  Dashboards,
  Deployments,
  DevelopmentInformation,
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
  WorkflowSchemeProjectAssociation,
  WorkflowSchemes,
  WorkflowTransitionRules,
} from './api';

import { Config } from './config';
import { Callback } from './callback';
import { Utils } from './utils';

export * from './config';
export * from './callback';
export * from './sender';

export class Client {
  public applicationRoles: ApplicationRoles;
  public auditRecords: AuditRecords;
  public avatars: Avatars;
  public backlog: Backlog;
  public board: Board;
  public builds: Builds;
  public dashboards: Dashboards;
  public deployments: Deployments;
  public developmentInformation: DevelopmentInformation;
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
  public workflowSchemeProjectAssociation: WorkflowSchemeProjectAssociation;
  public workflowSchemes: WorkflowSchemes;
  public workflowTransitionRules: WorkflowTransitionRules;

  private config: Config;
  private requestInstance: AxiosInstance;

  constructor(config: Config) {
    this.requestInstance = axios.create({
      baseURL: config.host
    });

    this.config = config;

    this.applicationRoles = new ApplicationRoles(this);
    this.auditRecords = new AuditRecords(this);
    this.avatars = new Avatars(this);
    this.backlog = new Backlog();
    this.board = new Board();
    this.builds = new Builds();
    this.dashboards = new Dashboards();
    this.deployments = new Deployments();
    this.developmentInformation = new DevelopmentInformation();
    this.epic = new Epic();
    this.featureFlags = new FeatureFlags();
    this.filters = new Filters();
    this.filterSharing = new FilterSharing();
    this.group = new GroupAndUserPicker();
    this.groups = new Groups();
    this.issueNotificationSchemes = new IssueNotificationSchemes();
    this.issue = new Issue();
    this.issueAttachments = new IssueAttachments();
    this.issueComments = new IssueComments();
    this.issueCommentsProperties = new IssueCommentsProperties();
    this.issueCustomFieldOptions = new IssueCustomFieldOptions();
    this.issueCustomFieldOptionsApps = new IssueCustomFieldOptionsApps();
    this.issueFields = new IssueFields();
    this.issueLinks = new IssueLinks();
    this.issueLinkTypes = new IssueLinkTypes();
    this.issueNavigationSettings = new IssueNavigatorSettings();
    this.issuePriorities = new IssuePriorities();
    this.issueProperties = new IssueProperties();
    this.issueRemoteLinks = new IssueRemoteLinks();
    this.issueResolutions = new IssueResolutions();
    this.issues = new Issues();
    this.issueSearch = new IssueSearch();
    this.issueSecurityLevel = new IssueSecurityLevel();
    this.issueSecuritySchemes = new IssueSecuritySchemes();
    this.issueTypeProperties = new IssueTypeProperties();
    this.issueTypes = new IssueTypes();
    this.issueVotes = new IssueVotes();
    this.issueWatchers = new IssueWatchers();
    this.issueWorklogProperties = new IssueWorklogProperties();
    this.issueWorklogs = new IssueWorklogs();
    this.jiraExpressions = new JiraExpressions();
    this.jiraSettings = new JiraSettings();
    this.JQL = new JQL();
    this.labels = new Labels();
    this.myself = new Myself();
    this.permissions = new Permissions();
    this.permissionSchemes = new PermissionSchemes();
    this.projectAvatars = new ProjectAvatars();
    this.projectCategories = new ProjectCategories();
    this.projectComponents = new ProjectComponents();
    this.projectKeysAndNameValidation = new ProjectKeysAndNameValidation();
    this.projectPermissionSchemes = new ProjectPermissionSchemes();
    this.projectProperties = new ProjectProperties();
    this.projectRoleActors = new ProjectRoleActors();
    this.projectRoles = new ProjectRoles();
    this.projects = new Projects();
    this.projectTypes = new ProjectTypes();
    this.projectVersions = new ProjectVersions();
    this.screens = new Screens();
    this.serverInfo = new ServerInfo();
    this.sprint = new Sprint();
    this.tasks = new Tasks();
    this.timeTracking = new TimeTracking();
    this.userProperties = new UserProperties();
    this.users = new Users();
    this.userSearch = new UserSearch();
    this.webhooks = new Webhooks();
    this.workflows = new Workflows();
    this.workflowSchemeProjectAssociation = new WorkflowSchemeProjectAssociation();
    this.workflowSchemes = new WorkflowSchemes();
    this.workflowTransitionRules = new WorkflowTransitionRules();
  }

  public async sendRequest(config: AxiosRequestConfig, callback?: Callback) {
    try {
      config.headers = config.headers || {};
      config.headers.Authorization = Utils.getAuthorization(this.config);

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
