# jira-api-wrapper

[![Build Status](https://travis-ci.com/MrRefactoring/jira-api-wrapper.svg?branch=master)](https://travis-ci.com/MrRefactoring/jira-api-wrapper)

Jira Api Wrapper for NodeJS

Supports:
* [REST API v3](https://developer.atlassian.com/cloud/jira/platform/rest/v3/) (in progress)
* [Agile API](https://developer.atlassian.com/cloud/jira/software/rest/) (help needed)
* [Auth API](https://developer.atlassian.com/cloud/jira/platform/security-for-other-integrations/) (in progress)
* [Webhook API](https://developer.atlassian.com/server/jira/platform/webhooks/) (in progress)

# Installation

`npm i jira-api-wrapper`

## Example

##### Typescript

```typescript
import JiraApi from 'jira-api-wrapper';

const api: JiraApi = new JiraApi({
  host: 'jira.atlassian.com'
});

// Async/await example
const someAsyncFunc = async () => {
    const response: any = await api.search.search({ jql: 'some jql request' });
    
    console.log(response);
};

// Callback example
api.search.search({
    jql: 'some jql request'
}, (data) => { console.log(data); })
```

##### Pure NodeJS

```javascript
const JiraApi = require('jira-api-wrapper');

const api = new JiraApi({
  host: 'jira.atlassian.com'
});

// Async/await example
const someAsyncFunc = async () => {
    const response = await api.search.search({ jql: 'some jql request' });
    
    console.log(response);
};

// Callback example
api.search.search({
    jql: 'some jql request'
}, (data) => { console.log(data); })
```


## Authentication

Depending on the Jira instance to which you are connecting, authentication may
or may not be required for various API calls.

`jira-api-wrapper` supports two forms of authentication:

### Basic Authentication

This is not recommended; it will require you to provide a username and password each
time you connect to the Jira instance. However, jira-connector supports it
for users who are unable to use OAuth.

Example:

```javascript 1.8
const JiraApi = require('jira-api-wrapper');

const api = new JiraApi({
  host: 'jira.atlassian.net',
  basicAuth: {
    username: 'myUsername',
    password: 'myPassword'
  }
});
```

### Basic Authentication (base64)

Also not recommended, but slightly better than the above; it will require you to
provide a Base64 encoded username and password (a Base64 encoding in the
format of "username:password") each time you connect to the Jira instance.

Example:

```javascript 1.8
const JiraApi = require('jira-api-wrapper');

const api = new JiraApi({
  host: 'jira.atlassian.net',
  basicAuth: {
    base64: 'bXlVc2VybmFtZTpteVBhc3N3b3Jk'
  }
});

// Base64 encoding of 'myUsername:myPassword'
```

### OAuth Authentication (in progress)

This should be the preferred method of authentication; it is more secure and does not require disclosing
your password.

However, setting up OAuth access in Jira can be somewhat complicated; first the Jira administrator must create
an Application Link; for instructions on how to do this, see
[Linking to Another Application](https://confluence.atlassian.com/display/JIRA/Linking+to+Another+Application).

[This example](https://developer.atlassian.com/display/JIRADEV/JIRA+REST+API+Example+-+OAuth+authentication) may also
be helpful in configuring OAuth Access.

Once the Application Link has been created, you will need the private key that corresponds to the public key used to
create the link, and the consumer key that was provided when the link was created.

Once you have this data, you will need to generate an OAuth token and secret for your account; jira-connector provides
helper functions for exactly this purpose:

```javascript 1.8
const JiraApi = require('jira-api-wrapper');

JiraApi.oauth_util.getAuthorizeURL({
    host: 'jira.atlassian.net',
    oauth: {
        consumerKey: 'your-consumer-key',
        privateKey: '-----BEGIN RSA PRIVATE KEY-----\n' +
        'SomePrivateKeyHere\n' +
        '-----END RSA PRIVATE KEY-----'
    }
}, function (error, oauth) {
    console.log(oauth);
});
```

This will output something similar to the following:

```javascript
{
    url: 'https://jira.atlassian.net/plugins/servlet/oauth/authorize?oauth_token=some-token-here',
    token: 'some-token-here',
    tokenSecret: 'some-secret-here'
}
```

You can then visit the specified URL, which will display a page asking you to allow or deny the request for access.
Allowing access will display a verifier code.  Once you have this code, you can swap out your current OAuth token
for an Access Token with all the permissions of your account; jira-connector provides a function to help with this:

```javascript
const JiraApi = require('jira-api-wrapper');

JiraApi.oauth_util.swapRequestTokenWithAccessToken({
    host: 'jira.atlassian.net',
    oauth: {
        token: 'your-oauth-token',
        tokenSecret: 'your-token-secret',
        oauthVerifier: 'verifier-code-from-jira',
        consumerKey: 'your-consumer-key',
        privateKey: '-----BEGIN RSA PRIVATE KEY-----\n' +
        'SomePrivateKeyHere\n' +
        '-----END RSA PRIVATE KEY-----'
    }
}, function (error, accessToken) {
    console.log(accessToken);
});
```

This will query Jira for an Access Token, which will then be printed to the screen.  Finally, you're ready to access
Jira with OAuth!

```javascript
const JiraApi = require('jira-api-wrapper');

const api = new JiraApi({
    host: 'jenjinstudios.atlassian.net',
    oauth: {
        consumerKey: 'your-consumer-key',
        privateKey: '-----BEGIN RSA PRIVATE KEY-----\n' +
        'SomePrivateKey\n' +
        '-----END RSA PRIVATE KEY-----',
        token: 'your-access-token',
        tokenSecret: 'your-token-secret'
    }
});

// Jira is now authenticted with your account!
```

### Cookie Jar

You can also use a Cookie Jar for your request. It could be an easier way to prompt for a login only once, without the
pain of setting up an OAuth method.

For example, using `though-cookie-filestore`:
```javascript
const JiraApi = require('jira-api-wrapper'),
    FileCookieStore = require('tough-cookie-filestore'),

    request = require('request'),
    path = require('path');

const jar = request.jar(new FileCookieStore(path.join(__dirname, 'cookies.json')));

// For the first connection
const api = new JiraApi( {
    host: 'jira.atlassian.net',
    basicAuth: {
        username: 'SirUserOfName',
        password: 'Password123'
    },
    cookie_jar: jar
});

// For the following connections
const api = new JiraApi( {
    host: 'jira.atlassian.net',
    cookie_jar: jar
});
```

In this example, all your cookies are save in a file, `cookies.json`. Currently, the file **MUST** exist, it's a
limitation from `though-cookie-filestore`...

You can now only use the Cookie Jar for all the following request, as long as the file exists and the cookie
is still valid!

## Supported API Calls

### Agile

* backlog
    * [moveIssuesToBacklog](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-backlog-issue-post) /rest/agile/1.0/backlog/issue
    * [moveIssuesToBacklogForBoard](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-backlog-boardId-issue-post) /rest/agile/1.0/backlog/{boardId}/issue
* board
    * [getAllBoards](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-get) /rest/agile/1.0/board
    * [createBoard](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-post) /rest/agile/1.0/board
    * [getBoard](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-get) /rest/agile/1.0/board/{boardId}
    * [deleteBoard](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-delete) /rest/agile/1.0/board/{boardId}
    * [getIssuesForBacklog](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-backlog-get) /rest/agile/1.0/board/{boardId}/backlog
    * [getConfiguration](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-configuration-get) /rest/agile/1.0/board/{boardId}/configuration
    * [getEpics](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-epic-get) /rest/agile/1.0/board/{boardId}/epic
    * [getIssuesWithoutEpic](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-epic-none-issue-get) /rest/agile/1.0/board/{boardId}/epic/none/issue
    * [getIssuesForEpic](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-epic-epicId-issue-get) /rest/agile/1.0/board/{boardId}/epic/{epicId}/issue
    * [getFeaturesForBoard](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-features-get) /rest/agile/1.0/board/{boardId}/features
    * [toggleFeatures](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-features-put) /rest/agile/1.0/board/{boardId}/features
    * [getIssuesForBoard](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-issue-get) /rest/agile/1.0/board/{boardId}/issue
    * [moveIssuesToBoard](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-issue-post) /rest/agile/1.0/board/{boardId}/issue
    * [getProjects](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-project-get) /rest/agile/1.0/board/{boardId}/project
    * [getProjectsFull](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-project-full-get) /rest/agile/1.0/board/{boardId}/project/full
    * [getBoardPropertyKeys](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-properties-get) /rest/agile/1.0/board/{boardId}/properties
    * [getBoardProperty](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-properties-propertyKey-get) /rest/agile/1.0/board/{boardId}/properties/{propertyKey}
    * [setBoardProperty](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-properties-propertyKey-put) /rest/agile/1.0/board/{boardId}/properties/{propertyKey}
    * [deleteBoardProperty](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-properties-propertyKey-delete) /rest/agile/1.0/board/{boardId}/properties/{propertyKey}
    * [getAllQuickFilters](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-quickfilter-get) /rest/agile/1.0/board/{boardId}/quickfilter
    * [getQuickFilter](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-quickfilter-quickFilterId-get) /rest/agile/1.0/board/{boardId}/quickfilter/{quickFilterId}
    * [getReportsForBoard](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-reports-get) /rest/agile/1.0/board/{boardId}/reports
    * [getAllSprints](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-sprint-get) /rest/agile/1.0/board/{boardId}/sprint
    * [getIssuesForSprint](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-sprint-sprintId-issue-get) /rest/agile/1.0/board/{boardId}/sprint/{sprintId}/issue
    * [getAllVersions](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-board-boardId-version-get) /rest/agile/1.0/board/{boardId}/version
* epic
    * [getIssuesWithoutEpic](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-epic-none-issue-get) /rest/agile/1.0/epic/none/issue
    * [removeIssuesFromEpic](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-epic-none-issue-post) /rest/agile/1.0/epic/none/issue
    * [getEpic](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-epic-epicIdOrKey-get) /rest/agile/1.0/epic/{epicIdOrKey}
    * [partiallyUpdateEpic](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-epic-epicIdOrKey-post) /rest/agile/1.0/epic/{epicIdOrKey}
    * [getIssuesForEpic](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-epic-epicIdOrKey-issue-get) /rest/agile/1.0/epic/{epicIdOrKey}/issue
    * [moveIssuesToEpic](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-epic-epicIdOrKey-issue-post) /rest/agile/1.0/epic/{epicIdOrKey}/issue
    * [rankEpics](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-epic-epicIdOrKey-rank-put) /rest/agile/1.0/epic/{epicIdOrKey}/rank
* issue
    * [rankIssues](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-issue-rank-put) /rest/agile/1.0/issue/rank
    * [getIssue](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-issue-issueIdOrKey-get) (params.agile = true required) /rest/agile/1.0/issue/{issueIdOrKey}
    * [getIssueEstimationForBoard](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-issue-issueIdOrKey-estimation-get) /rest/agile/1.0/issue/{issueIdOrKey}/estimation
    * [estimateIssueForBoard](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-issue-issueIdOrKey-estimation-put) /rest/agile/1.0/issue/{issueIdOrKey}/estimation
* sprint
    * [createSprint](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-sprint-post) /rest/agile/1.0/sprint
    * [getSprint](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-sprint-sprintId-get) /rest/agile/1.0/sprint/{sprintId}
    * [updateSprint](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-sprint-sprintId-put) /rest/agile/1.0/sprint/{sprintId}
    * [partiallyUpdateSprint](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-sprint-sprintId-post) /rest/agile/1.0/sprint/{sprintId}
    * [deleteSprint](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-sprint-sprintId-delete) /rest/agile/1.0/sprint/{sprintId}
    * [getIssuesForSprint](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-sprint-sprintId-issue-get) /rest/agile/1.0/sprint/{sprintId}/issue
    * [moveIssuesToSprintAndRank](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-sprint-sprintId-issue-post) /rest/agile/1.0/sprint/{sprintId}/issue
    * [getPropertiesKeys](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-sprint-sprintId-properties-get) /rest/agile/1.0/sprint/{sprintId}/properties
    * [getProperty](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-sprint-sprintId-properties-propertyKey-get) /rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey}
    * [setProperty](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-sprint-sprintId-properties-propertyKey-put) /rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey}
    * [deleteProperty](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-sprint-sprintId-properties-propertyKey-delete) /rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey}
    * [swapSprint](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-agile-1-0-sprint-sprintId-swap-post) /rest/agile/1.0/sprint/{sprintId}/swap
* developmentInformation `help wanted`
    * [storeDevelopmentInformation](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-devinfo-0-10-bulk-post) /rest/devinfo/0.10/bulk `help wanted`
    * [getRepository](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-devinfo-0-10-repository-repositoryId-get) /rest/devinfo/0.10/repository/{repositoryId} `help wanted`
    * [deleteRepository](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-devinfo-0-10-repository-repositoryId-delete) /rest/devinfo/0.10/repository/{repositoryId} `help wanted`
    * [deleteDevelopmentInformationByProperties](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-devinfo-0-10-bulkByProperties-delete) /rest/devinfo/0.10/bulkByProperties `help wanted`
    * [checkIfDataExistsForSuppliedProperties](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-devinfo-0-10-existsByProperties-get) /rest/devinfo/0.10/existsByProperties `help wanted`
    * [deleteDevelopmentInformationEntity](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-devinfo-0-10-repository-repositoryId-entityType-entityId-delete) /rest/devinfo/0.10/repository/{repositoryId}/{entityType}/{entityId} `help wanted`
* featureFlags `help wanted`
    * [submitFeatureFlagData](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-featureflags-0-1-bulk-post) /rest/featureflags/0.1/bulk `help wanted`
    * [deleteFeatureFlagsByProperty](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-featureflags-0-1-bulkByProperties-delete) /rest/featureflags/0.1/bulkByProperties `help wanted`
    * [getFeatureFlagById](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-featureflags-0-1-flag-featureFlagId-get) /rest/featureflags/0.1/flag/{featureFlagId} `help wanted`
    * [deleteFeatureFlagById](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-featureflags-0-1-flag-featureFlagId-delete) /rest/featureflags/0.1/flag/{featureFlagId} `help wanted`
* deployments `help wanted`
    * [submitDeploymentData](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-deployments-0-1-bulk-post) /rest/deployments/0.1/bulk `help wanted`
    * [deleteDeploymentsByProperty](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-deployments-0-1-bulkByProperties-delete) /rest/deployments/0.1/bulkByProperties `help wanted`
    * [getDeploymentByKey](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-deployments-0-1-pipelines-pipelineId-environments-environmentId-deployments-deploymentSequenceNumber-get) /rest/deployments/0.1/pipelines/{pipelineId}/environments/{environmentId}/deployments/{deploymentSequenceNumber} `help wanted`
    * [deleteDeploymentByKey](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-deployments-0-1-pipelines-pipelineId-environments-environmentId-deployments-deploymentSequenceNumber-delete) /rest/deployments/0.1/pipelines/{pipelineId}/environments/{environmentId}/deployments/{deploymentSequenceNumber} `help wanted`
* builds `help wanted`
    * [submitBuildData](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-builds-0-1-bulk-post) /rest/builds/0.1/bulk `help wanted`
    * [deleteBuildsByProperty](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-builds-0-1-bulkByProperties-delete) /rest/builds/0.1/bulkByProperties `help wanted`
    * [getBuildByKey](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-builds-0-1-pipelines-pipelineId-builds-buildNumber-get) /rest/builds/0.1/pipelines/{pipelineId}/builds/{buildNumber} `help wanted`
    * [deleteBuildByKey](https://developer.atlassian.com/cloud/jira/software/rest/#api-rest-builds-0-1-pipelines-pipelineId-builds-buildNumber-delete) /rest/builds/0.1/pipelines/{pipelineId}/builds/{buildNumber} `help wanted`

### Rest Api

* myself
    * [getCurrentUser](https://developer.atlassian.com/cloud/jira/platform/rest/v3/?utm_source=%2Fcloud%2Fjira%2Fplatform%2Frest%2F&utm_medium=302#api-api-3-myself-get) /rest/api/3/myself
* search
    * [search](https://developer.atlassian.com/cloud/jira/platform/rest/v3/?utm_source=%2Fcloud%2Fjira%2Fplatform%2Frest%2F&utm_medium=302#api-group-Search) /rest/api/3/search
* worklog
    * [getIDsOfDeletedWorklogs](https://developer.atlassian.com/cloud/jira/platform/rest/v3/?utm_source=%2Fcloud%2Fjira%2Fplatform%2Frest%2F&utm_medium=302#api-api-3-worklog-deleted-get) /rest/api/3/worklog/deleted
    * [getWorklogs](https://developer.atlassian.com/cloud/jira/platform/rest/v3/?utm_source=%2Fcloud%2Fjira%2Fplatform%2Frest%2F&utm_medium=302#api-api-3-worklog-list-post) /rest/api/3/worklog/list
    * [getIDsOfUpdatedWorklogs](https://developer.atlassian.com/cloud/jira/platform/rest/v3/?utm_source=%2Fcloud%2Fjira%2Fplatform%2Frest%2F&utm_medium=302#api-api-3-worklog-updated-get) /rest/api/3/worklog/updated

## License

[MIT license](http://opensource.org/licenses/MIT)
