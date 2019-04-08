const JiraApi = require('../dist');

const defaultHost = 'xxx.atlassian.net';
const defaultPort = 443;

describe('JiraApi tests for pure node', () => {
  it('should return JiraApi instance', () => {
    const api = new JiraApi({ host: defaultHost, port: defaultPort });

    expect(api).toBeDefined();
  });
});
