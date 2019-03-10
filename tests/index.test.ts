import JiraApi from '../dist';

const defaultHost = 'xxx.atlassian.net';
const defaultPort = 443;

describe('JiraApi tests', () => {
  it('should return JiraApi instance', () => {
    const api = new JiraApi({ host: defaultHost, port: defaultPort });

    expect(api).toBeDefined();
  });

  describe('API definition', () => {
    it('applicationProperties should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.applicationProperties).toBeDefined();
    });

    it('applicationrole should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.applicationrole).toBeDefined();
    });

    it('attachment should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.attachment).toBeDefined();
    });

    it('auditing should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.auditing).toBeDefined();
    });

    it('avatar should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.avatar).toBeDefined();
    });

    it('backlog should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.backlog).toBeDefined();
    });

    it('board should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.board).toBeDefined();
    });

    it('comment should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.comment).toBeDefined();
    });

    it('component should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.component).toBeDefined();
    });

    it('configuration should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.configuration).toBeDefined();
    });

    it('customFieldOption should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.customFieldOption).toBeDefined();
    });

    it('dashboard should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.dashboard).toBeDefined();
    });

    it('epic should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.epic).toBeDefined();
    });

    it('expression should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.expression).toBeDefined();
    });

    it('field should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.field).toBeDefined();
    });

    it('filter should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.filter).toBeDefined();
    });

    it('group should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.group).toBeDefined();
    });

    it('groups should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.groups).toBeDefined();
    });

    it('issue should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.issue).toBeDefined();
    });

    it('jql should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.jql).toBeDefined();
    });

    it('myself should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.myself).toBeDefined();
    });

    it('search should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.search).toBeDefined();
    });

    it('sprint should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.sprint).toBeDefined();
    });

    it('worklog should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.worklog).toBeDefined();
    });

    it('builds should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.builds).toBeDefined();
    });

    it('deployments should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.deployments).toBeDefined();
    });

    it('developmentInformation should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.developmentInformation).toBeDefined();
    });

    it('featureFlags should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.featureFlags).toBeDefined();
    });

    it('session should be defined', () => {
      const api = new JiraApi({ host: defaultHost, port: defaultPort });

      expect(api.session).toBeDefined();
    });
  });
});
