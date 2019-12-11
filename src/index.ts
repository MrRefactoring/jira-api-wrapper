import axios, { AxiosInstance } from 'axios';
import {
  ApplicationRoles,
  AuditRecords,
  Avatars,
  Backlog,
  Board,
  Deployments,
  DevelopmentInformation,
  Epic,
  FeatureFlags,
  Issue,
  Sprint
} from './api';

export interface Config {
  host: string;
}

export class JiraClient {
  public applicationRoles: ApplicationRoles;
  public auditRecords: AuditRecords;
  public avatars: Avatars;
  public backlog: Backlog;
  public board: Board;
  public deployments: Deployments;
  public developmentInformation: DevelopmentInformation;
  public epic: Epic;
  public featureFlags: FeatureFlags;
  public issue: Issue;
  public sprint: Sprint;

  private requestInstance: AxiosInstance;

  constructor(config: Config) {
    this.requestInstance = axios.create({
      baseURL: `${config.host}/rest/`
    });

    this.applicationRoles = new ApplicationRoles();
    this.backlog = new Backlog();
    this.board = new Board();
    this.deployments = new Deployments();
    this.developmentInformation = new DevelopmentInformation();
    this.epic = new Epic();
    this.featureFlags = new FeatureFlags();
    this.issue = new Issue();
    this.sprint = new Sprint();
  }

  public async sendRequest() { }
}
