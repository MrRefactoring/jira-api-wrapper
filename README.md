# 🔧Jira Api Wrapper for NodeJS (Supports TypeScript)

# ⚠️ The library was deprecated. Use [jira.js](https://github.com/MrRefactoring/jira.js) as an alternative, it is more complete and still supported ⚠️

[![Build Status](https://travis-ci.com/MrRefactoring/jira-api-wrapper.svg?branch=master)](https://travis-ci.com/MrRefactoring/jira-api-wrapper)
[![install size](https://packagephobia.now.sh/badge?p=jira-api-wrapper)](https://packagephobia.now.sh/result?p=jira-api-wrapper)
[![Downloads](https://img.shields.io/npm/dm/jira-api-wrapper.svg)](https://npmjs.com/jira-api-wrapper)
[![npm](https://img.shields.io/npm/v/jira-api-wrapper.svg)](https://www.npmjs.com/package/jira-api-wrapper)

Supports:

- ⬇️ [Supported Agile API](#agile-supported-calls)
- ⬇️ [Supported REST API v3](#rest-supported-calls) (in progress)
- ⬇️ [Supported Auth API](#auth-supported-calls) 🚨[`Deprecated`](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/)🚨
- [Webhook API](https://developer.atlassian.com/server/jira/platform/webhooks/) (in progress)

# Installation

```
npm i jira-api-wrapper
```

## Example

##### Typescript

```typescript
import JiraApi from "jira-api-wrapper";

const api: JiraApi = new JiraApi({
  host: "xxx.atlassian.com"
});

// Async/await example
const someAsyncFunc = async () => {
  const response: any = await api.search.search({ jql: "some jql request" });

  console.log(response);
};

// Callback example
api.search.search(
  {
    jql: "some jql request"
  },
  response => {
    console.log(response);
  }
);
```

##### Pure NodeJS

```javascript
const JiraApi = require("jira-api-wrapper");

const api = new JiraApi({
  host: "xxx.atlassian.com"
});

// Async/await example
const someAsyncFunc = async () => {
  const response = await api.search.search({ jql: "some jql request" });

  console.log(response);
};

// Callback example
api.search.search(
  {
    jql: "some jql request"
  },
  response => {
    console.log(response);
  }
);
```

## 🔑 JiraApi security options

```typescript
const fs = require("fs");
const path = require("path");
const JiraApi = require("jira-api-wrapper");

const caFile = path.resolve(__dirname, "ssl/ca.cert.pem");
const certFile = path.resolve(__dirname, "ssl/client.crt");
const keyFile = path.resolve(__dirname, "ssl/client.key");

const api = new JiraApi({
  host: "xxx.atlassian.com",

  strictSSL: true, // try to set false if you can not pass authorization.

  ca: fs.readFileSync(caFile),
  cert: fs.readFileSync(certFile),
  key: fs.readFileSync(keyFile)
});
```

## Authentication

Depending on the Jira instance to which you are connecting, authentication may
or may not be required for various API calls.

`jira-api-wrapper` supports two forms of authentication:

### OAuth Authentication

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

```typescript
const JiraApi = require("jira-api-wrapper");

JiraApi.getAuthorizeURL(
  {
    host: "xxx.atlassian.net",
    oauth: {
      consumerKey: "your-consumer-key",
      privateKey:
        "-----BEGIN RSA PRIVATE KEY-----\n" +
        "SomePrivateKeyHere\n" +
        "-----END RSA PRIVATE KEY-----"
    }
  },
  (error, oauth) => {
    console.log(oauth);
  }
);
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
Allowing access will display a verifier code. Once you have this code, you can swap out your current OAuth token
for an Access Token with all the permissions of your account; jira-connector provides a function to help with this:

```typescript
const JiraApi = require("jira-api-wrapper");

JiraApi.swapRequestTokenWithAccessToken(
  {
    host: "xxx.atlassian.net",
    oauth: {
      token: "your-oauth-token",
      tokenSecret: "your-token-secret",
      oauthVerifier: "verifier-code-from-jira",
      consumerKey: "your-consumer-key",
      privateKey:
        "-----BEGIN RSA PRIVATE KEY-----\n" +
        "SomePrivateKeyHere\n" +
        "-----END RSA PRIVATE KEY-----"
    }
  },
  (error, accessToken) => {
    console.log(accessToken);
  }
);
```

This will query Jira for an Access Token, which will then be printed to the screen. Finally, you're ready to access
Jira with OAuth!

```javascript
const JiraApi = require("jira-api-wrapper");

const api = new JiraApi({
  host: "xxx.atlassian.net",
  oauth: {
    consumerKey: "your-consumer-key",
    privateKey:
      "-----BEGIN RSA PRIVATE KEY-----\n" +
      "SomePrivateKey\n" +
      "-----END RSA PRIVATE KEY-----",
    token: "your-access-token",
    tokenSecret: "your-token-secret"
  }
});

// Jira is now authenticted with your account!
```

### 🚨[`Deprecated`](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/)🚨

### Basic Authentication

This is not recommended; it will require you to provide a username and password each
time you connect to the Jira instance. However, jira-connector supports it
for users who are unable to use OAuth.

Example:

```javascript 1.8
const JiraApi = require("jira-api-wrapper");

const api = new JiraApi({
  host: "xxx.atlassian.net",
  basicAuth: {
    username: "myUsername",
    password: "myPassword"
  }
});
```

### 🚨[`Deprecated`](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/)🚨

### Basic Authentication (base64)

Also not recommended, but slightly better than the above; it will require you to
provide a Base64 encoded username and password (a Base64 encoding in the
format of "username:password") each time you connect to the Jira instance.

Example:

```javascript 1.8
const JiraApi = require("jira-api-wrapper");

const api = new JiraApi({
  host: "xxx.atlassian.net",
  basicAuth: {
    base64: "bXlVc2VybmFtZTpteVBhc3N3b3Jk"
  }
});

// Base64 encoding of 'myUsername:myPassword'
```

### 🚨[`Deprecated`](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/)🚨

### Cookie Jar

You can also use a Cookie Jar for your request. It could be an easier way to prompt for a login only once, without the
pain of setting up an OAuth method.

For example, using `though-cookie-filestore`:

```javascript
const JiraApi = require("jira-api-wrapper");
const FileCookieStore = require("tough-cookie-filestore");

const request = require("request");
const path = require("path");

const jar = request.jar(
  new FileCookieStore(path.join(__dirname, "cookies.json"))
);

// For the first connection
const api = new JiraApi({
  host: "xxx.atlassian.net",
  basicAuth: {
    username: "SirUserOfName",
    password: "Password123"
  },
  cookieJar: jar
});

// For the following connections
const api = new JiraApi({
  host: "xxx.atlassian.net",
  cookieJar: jar
});
```

In this example, all your cookies are save in a file, `cookies.json`. Currently, the file **MUST** exist, it's a
limitation from `though-cookie-filestore`...

You can now only use the Cookie Jar for all the following request, as long as the file exists and the cookie
is still valid!

## Supported API Calls

### Agile supported calls

- [⬇️ Rest supported calls](#rest-supported-calls)
- [⬇️ Auth supported calls](#auth-supported-calls)

| API | Method | REST Call |
| --- | ------ | --------- |


| Backlog
| | `backlog.moveIssuesToBacklog({ params })` | POST /rest/agile/1.0/backlog/issue
| | `backlog.moveIssuesToBacklogForBoard({ params })` | POST /rest/agile/1.0/backlog/{boardId}/issue
| Board
| | `board.getAllBoards({ params })` | GET /rest/agile/1.0/board
| | `board.createBoard({ params })` | POST /rest/agile/1.0/board
| | `board.getBoard({ params })` | GET /rest/agile/1.0/board/{boardId}
| | `board.deleteBoard({ params })` | DELETE /rest/agile/1.0/board/{boardId}
| | `board.getIssuesForBacklog({ params })` | GET /rest/agile/1.0/board/{boardId}/backlog
| | `board.getConfiguration({ params })` | GET /rest/agile/1.0/board/{boardId}/configuration
| | `board.getEpics({ params })` | GET /rest/agile/1.0/board/{boardId}/epic
| | `board.getIssuesWithoutEpic({ params })` | GET /rest/agile/1.0/board/{boardId}/epic/none/issue
| | `board.getIssuesForEpic({ params })` | GET /rest/agile/1.0/board/{boardId}/epic/{epicId}/issue
| | `board.getFeaturesForBoard({ params })` | GET /rest/agile/1.0/board/{boardId}/features
| | `board.toggleFeatures({ params })` | PUT /rest/agile/1.0/board/{boardId}/features
| | `board.getIssuesForBoard({ params })` | GET /rest/agile/1.0/board/{boardId}/issue
| | `board.moveIssuesToBoard({ params })` | POST /rest/agile/1.0/board/{boardId}/issue
| | `board.getProjects({ params })` | GET /rest/agile/1.0/board/{boardId}/project
| | `board.getProjectsFull({ params })` | GET /rest/agile/1.0/board/{boardId}/project/full
| | `board.getBoardPropertyKeys({ params })` | GET /rest/agile/1.0/board/{boardId}/properties
| | `board.getBoardProperty({ params })` | GET /rest/agile/1.0/board/{boardId}/properties/{propertyKey}
| | `board.setBoardProperty({ params })` | PUT /rest/agile/1.0/board/{boardId}/properties/{propertyKey}
| | `board.deleteBoardProperty({ params })` | DELETE /rest/agile/1.0/board/{boardId}/properties/{propertyKey}
| | `board.getAllQuickFilters({ params })` | GET /rest/agile/1.0/board/{boardId}/quickfilter
| | `board.getQuickFilter({ params })` | GET /rest/agile/1.0/board/{boardId}/quickfilter/{quickFilterId}
| | `board.getReportsForBoard({ params })` | GET /rest/agile/1.0/board/{boardId}/reports
| | `board.getAllSprints({ params })` | GET /rest/agile/1.0/board/{boardId}/sprint
| | `board.getIssuesForSprint({ params })` | GET /rest/agile/1.0/board/{boardId}/sprint/{sprintId}/issue
| | `board.getAllVersions({ params })` | GET /rest/agile/1.0/board/{boardId}/version
| Epic
| | `epic.getIssuesWithoutEpic({ params })` | GET /rest/agile/1.0/epic/none/issue
| | `epic.removeIssuesFromEpic({ params })` | POST /rest/agile/1.0/epic/none/issue
| | `epic.getEpic({ params })` | GET /rest/agile/1.0/epic/{epicIdOrKey}
| | `epic.partiallyUpdateEpic({ params })` | POST /rest/agile/1.0/epic/{epicIdOrKey}
| | `epic.getIssuesForEpic({ params })` | GET /rest/agile/1.0/epic/{epicIdOrKey}/issue
| | `epic.moveIssuesToEpic({ params })` | POST /rest/agile/1.0/epic/{epicIdOrKey}/issue
| | `epic.rankEpics({ params })` | PUT /rest/agile/1.0/epic/{epicIdOrKey}/rank
| Issue
| | `issue.rankIssues({ params })` | PUT /rest/agile/1.0/issue/rank
| | `issue.getIssue({agile: true, params })` | GET /rest/agile/1.0/issue/{issueIdOrKey}
| | `issue.getIssueEstimationForBoard({ params })` | GET /rest/agile/1.0/issue/{issueIdOrKey}/estimation
| | `issue.estimateIssueForBoard({ params })` | PUT /rest/agile/1.0/issue/{issueIdOrKey}/estimation
| Sprint
| | `sprint.createSprint({ params })` | POST /rest/agile/1.0/sprint
| | `sprint.getSprint({ params })` | GET /rest/agile/1.0/sprint/{sprintId}
| | `sprint.updateSprint({ params })` | PUT /rest/agile/1.0/sprint/{sprintId}
| | `sprint.partiallyUpdateSprint({ params })` | POST /rest/agile/1.0/sprint/{sprintId}
| | `sprint.deleteSprint({ params })` | DELETE /rest/agile/1.0/sprint/{sprintId}
| | `sprint.getIssuesForSprint({ params })` | GET /rest/agile/1.0/sprint/{sprintId}/issue
| | `sprint.moveIssuesToSprintAndRank({ params })` | POST /rest/agile/1.0/sprint/{sprintId}/issue
| | `sprint.getPropertiesKeys({ params })` | GET /rest/agile/1.0/sprint/{sprintId}/properties
| | `sprint.getProperty({ params })` | GET /rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey}
| | `sprint.setProperty({ params })` | PUT /rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey}
| | `sprint.deleteProperty({ params })` | DELETE /rest/agile/1.0/sprint/{sprintId}/properties/{propertyKey}
| | `sprint.swapSprint({ params })` | POST /rest/agile/1.0/sprint/{sprintId}/swap
| Development Information
| | `developmentInformation.storeDevelopmentInformation({ params })` | POST /rest/devinfo/0.10/bulk
| | `developmentInformation.getRepository({ params })` | GET /rest/devinfo/0.10/repository/{repositoryId}
| | `developmentInformation.deleteRepository({ params })` | DELETE /rest/devinfo/0.10/repository/{repositoryId}
| | `developmentInformation.deleteDevelopmentInformationByProperties({ params })` | DELETE /rest/devinfo/0.10/bulkByProperties
| | `developmentInformation.checkIfDataExistsForSuppliedProperties({ params })` | GET /rest/devinfo/0.10/existsByProperties
| | `developmentInformation.deleteDevelopmentInformationEntity({ params })` | DELETE /rest/devinfo/0.10/repository/{repositoryId}/{entityType}/{entityId}
| Feature Flags
| | `featureFlags.submitFeatureFlagData({ params })` |
| | `featureFlags.deleteFeatureFlagsByProperty({ params })` |
| | `featureFlags.getFeatureFlagById({ params })` |
| | `featureFlags.deleteFeatureFlagById({ params })` |
| Deployments
| | `deployments.submitDeploymentData({ params })` | POST /rest/deployments/0.1/bulk
| | `deployments.deleteDeploymentsByProperty({ params })` | DELETE /rest/deployments/0.1/bulkByProperties
| | `deployments.getDeploymentByKey({ params })` | GET /rest/deployments/0.1/pipelines/{pipelineId}/environments/{environmentId}/deployments/{deploymentSequenceNumber}
| | `deployments.deleteDeploymentByKey({ params })` | DELETE /rest/deployments/0.1/pipelines/{pipelineId}/environments/{environmentId}/deployments/{deploymentSequenceNumber}
| Builds
| | `builds.submitBuildData({ params })` | POST /rest/builds/0.1/bulk
| | `builds.deleteBuildsByProperty({ params })` | DELETE /rest/builds/0.1/bulkByProperties
| | `builds.getBuildByKey({ params })` | GET /rest/builds/0.1/pipelines/{pipelineId}/builds/{buildNumber}
| | `builds.deleteBuildByKey({ params })` | DELETE /rest/builds/0.1/pipelines/{pipelineId}/builds/{buildNumber}

### Rest supported calls

- [⬆️ Agile supported calls](#agile-supported-calls)
- [⬇️ Auth supported calls](#auth-supported-calls)

| API | Method | REST Call |
| --- | ------ | --------- |


| Application-properties
| | `applicationProperties.getApplicationProperty({ params })` | GET /rest/api/3/application-properties
| | `applicationProperties.getAdvancedSettings()` | GET /rest/api/3/application-properties/advanced-settings
| | `applicationProperties.setApplicationProperty({ params })` | PUT /rest/api/3/application-properties/{id}
| Applicationrole
| | `applicationrole.getAllApplicationRoles()` | GET /rest/api/3/applicationrole
| | `applicationrole.getApplicationRole({ params })` | GET /rest/api/3/applicationrole/{key}
| Attachment
| | `attachment.getGlobalAttachmentSettings()` | GET /rest/api/3/attachment/meta
| | `attachment.getAttachmentMetadata({ params })` | GET /rest/api/3/attachment/{id}
| | `attachment.deleteAttachment({ params })` | DELETE /rest/api/3/attachment/{id}
| | `attachment.getAllMetadata({ params })` | GET /rest/api/3/attachment/{id}/expand/human
| | `attachment.getContentsMetadata({ params })` | GET /rest/api/3/attachment/{id}/expand/raw
| Auditing
| | `auditing.getAuditRecords({ params })` | GET /rest/api/3/auditing/record
| Avatar
| | `avatar.getSystemAvatarsByType({ params })` | GET /rest/api/3/avatar/{type}/system
| Comment
| | `comment.getCommentsByIDs({ params })` | POST /rest/api/3/comment/list
| | `comment.getCommentPropertyKeys({ params })` | GET /rest/api/3/comment/{commentId}/properties
| | `comment.getCommentProperty({ params })` | GET /rest/api/3/comment/{commentId}/properties/{propertyKey}
| | `comment.setCommentProperty({ params })` | PUT /rest/api/3/comment/{commentId}/properties/{propertyKey}
| | `comment.deleteCommentProperty({ params })` | DELETE /rest/api/3/comment/{commentId}/properties/{propertyKey}
| Component
| | `component.createComponent({ params })` | POST /rest/api/3/component
| | `component.getComponent({ params })` | GET /rest/api/3/component/{id}
| | `component.updateComponent({ params })` | PUT /rest/api/3/component/{id}
| | `component.deleteComponent({ params })` | DELETE /rest/api/3/component/{id}
| | `component.getComponentIssuesCount({ params })` | GET /rest/api/3/component/{id}/relatedIssueCounts
| Configuration
| | `configuration.getGlobalSettings()` | GET /rest/api/3/configuration
| | `configuration.getSelectedTimeTrackingProvider()` | GET /rest/api/3/configuration/timetracking
| | `configuration.selectTimeTrackingProvider({ params })` | PUT /rest/api/3/configuration/timetracking
| | `configuration.disableTimeTracking()` | DELETE /rest/api/3/configuration/timetracking
| | `configuration.getAllTimeTrackingProviders()` | GET /rest/api/3/configuration/timetracking/list
| | `configuration.getTimeTrackingSettings()` | GET /rest/api/3/configuration/timetracking/options
| | `configuration.setTimeTrackingSettings({ params })` | PUT /rest/api/3/configuration/timetracking/options
| CustomFieldOption
| | `customFieldOption.getCustomFieldOption({ params })` | GET /rest/api/3/customFieldOption/{id}
| Dashboard
| | `dashboard.getAllDashboards({ params })` | GET /rest/api/3/dashboard
| | `dashboard.searchForDashboards({ params })` | GET /rest/api/3/dashboard/search
| | `dashboard.getDashboardItemPropertyKeys({ params })` | GET /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties
| | `dashboard.getDashboardItemProperty({ params })` | GET /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}
| | `dashboard.setDashboardItemProperty({ params })` | PUT /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}
| | `dashboard.deleteDashboardItemProperty({ params })` | DELETE /rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}
| | `dashboard.getDashboard({ params })` | GET /rest/api/3/dashboard/{id}
| Field
| | `field.getFields()` |
| | `field.createCustomField({ params })` | GET /rest/api/3/field
| | `field.getAllIssueFieldOptions({ params })` | POST /rest/api/3/field
| | `field.createIssueFieldOption({ params })` | GET /rest/api/3/field/{fieldKey}/option
| | `field.getSelectableIssueFieldOptions({ params })` | POST /rest/api/3/field/{fieldKey}/option
| | `field.getVisibleIssueFieldOptions({ params })` | GET /rest/api/3/field/{fieldKey}/option/suggestions/edit
| | `field.getIssueFieldOption({ params })` | GET /rest/api/3/field/{fieldKey}/option/suggestions/search
| | `field.updateIssueFieldOption({ params })` | GET /rest/api/3/field/{fieldKey}/option/{optionId}
| | `field.deleteIssueFieldOption({ params })` | DELETE /rest/api/3/field/{fieldKey}/option/{optionId}
| | `field.replaceIssueFieldOption({ params })` | DELETE /rest/api/3/field/{fieldKey}/option/{optionId}/issue
| Filter
| 🚨`Deprecated`🚨 | `filter.getFilters()` | GET /rest/api/3/filter
| | `filter.createFilter({ params })` | POST /rest/api/3/filter
| | `filter.getDefaultShareScope()` | GET /rest/api/3/filter/defaultShareScope
| | `filter.setDefaultShareScope({ params })` | PUT /rest/api/3/filter/defaultShareScope
| | `filter.getFavoriteFilters({ params })` | GET /rest/api/3/filter/favourite
| | `filter.getMyFilters({ params })` | GET /rest/api/3/filter/my
| | `filter.searchForFilters({ params })` | GET /rest/api/3/filter/search
| | `filter.getFilter({ params })` | GET /rest/api/3/filter/{id}
| | `filter.updateFilter({ params })` | PUT /rest/api/3/filter/{id}
| | `filter.deleteFilter({ params })` | DELETE /rest/api/3/filter/{id}
| | `filter.getColumns({ params })` | GET /rest/api/3/filter/{id}/columns
| | `filter.setColumns({ params })` | PUT /rest/api/3/filter/{id}/columns
| | `filter.resetColumns({ params })` | DELETE /rest/api/3/filter/{id}/columns
| | `filter.addFilterAsFavorite({ params })` | PUT /rest/api/3/filter/{id}/favourite
| | `filter.removeFilterAsFavorite({ params })` | DELETE /rest/api/3/filter/{id}/favourite
| | `filter.getSharePermissions({ params })` | GET /rest/api/3/filter/{id}/permission
| | `filter.addSharePermissions({ params })` | POST /rest/api/3/filter/{id}/permission
| | `filter.getSharePermission({ params })` | GET /rest/api/3/filter/{id}/permission/{permissionId}
| | `filter.deleteSharePermission({ params })` | DELETE /rest/api/3/filter/{id}/permission/{permissionId}
| Group
| 🚨`Deprecated`🚨 | `group.getGroup({ params })` | GET /rest/api/3/group
| | `group.createGroup({ params })` | POST /rest/api/3/group
| | `group.removeGroup({ params })` | DELETE /rest/api/3/group
| | `group.getUsersFromGroup({ params })` | GET /rest/api/3/group/member
| | `group.addUserToGroup({ params })` | POST /rest/api/3/group/user
| | `group.removeUserFromGroup({ params })` | DELETE /rest/api/3/group/user
| Groups
| | `groups.findGroups({ params })` | GET /rest/api/3/groups/picker
| GroupUserPicker
| | `groupUserPicker.findUsersAndGroups({ params })` | GET /rest/api/3/groupuserpicker
| Issue |
| | `issue.createIssue({ params })` | POST /rest/api/3/issue
| | `issue.bulkIssueCreate({ params })` | POST /rest/api/3/issue/bulk
| | `issue.getCreateIssueMetadata({params})` | GET /rest/api/3/issue/createmeta
| | `issue.getIssuePickerSuggestions({params})` | GET /rest/api/3/issue/picker
| | `issue.bulkSetIssueProperty({params})` | PUT /rest/api/3/issue/properties/{propertyKey}
| | `issue.bulkDeleteIssueProperty({params})` | DELETE /rest/api/3/issue/properties/{propertyKey}
| | `issue.getIssue({params})` | GET /rest/api/3/issue/{issueIdOrKey}
| | `issue.editIssue({params})` | PUT /rest/api/3/issue/{issueIdOrKey}
| | `issue.deleteIssue({params})` | DELETE /rest/api/3/issue/{issueIdOrKey}
| | `issue.assignIssue({params})` | PUT /rest/api/3/issue/{issueIdOrKey}/assignee
| | `issue.addAttachment({params})` | POST /rest/api/3/issue/{issueIdOrKey}/attachments
| | `issue.getChangeLog({params})` | GET /rest/api/3/issue/{issueIdOrKey}/changelog
| | `issue.getComments({params})` | GET /rest/api/3/issue/{issueIdOrKey}/comment
| | `issue.addComment({params})` | POST /rest/api/3/issue/{issueIdOrKey}/comment
| | `issue.getComment({params})` | GET /rest/api/3/issue/{issueIdOrKey}/comment/{id}
| | `issue.updateComment({params})` | PUT /rest/api/3/issue/{issueIdOrKey}/comment/{id}
| | `issue.deleteComment({params})` | DELETE /rest/api/3/issue/{issueIdOrKey}/comment/{id}
| | `issue.getEditIssueMetadata({params})` | GET /rest/api/3/issue/{issueIdOrKey}/editmeta
| | `issue.sendNotificationForIssue({params})` | POST /rest/api/3/issue/{issueIdOrKey}/notify
| | `issue.getIssuePropertyKeys({params})` | GET /rest/api/3/issue/{issueIdOrKey}/properties
| | `issue.getIssueProperty({params})` | GET /rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}
| | `issue.setIssueProperty({params})` | PUT /rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}
| | `issue.deleteIssueProperty({params})` | DELETE /rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}
| | `issue.getRemoteIssueLinks({params})` | GET /rest/api/3/issue/{issueIdOrKey}/remotelink
| | `issue.createOrUpdateRemoteIssueLink({params})` | POST /rest/api/3/issue/{issueIdOrKey}/remotelink
| | `issue.deleteRemoteIssueLinkByGlobalId({params})` | DELETE /rest/api/3/issue/{issueIdOrKey}/remotelink
| | `issue.getRemoteIssueLinkById({params})` | GET /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}
| | `issue.updateRemoteIssueLink({params})` | PUT /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}
| | `issue.deleteRemoteIssueLinkById({params})` | DELETE /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}
| | `issue.getTransitions({params})` | GET /rest/api/3/issue/{issueIdOrKey}/transitions
| | `issue.transitionIssue({params})` | POST /rest/api/3/issue/{issueIdOrKey}/transitions
| | `issue.getVotes({params})` | GET /rest/api/3/issue/{issueIdOrKey}/votes
| | `issue.addVote({params})` | POST /rest/api/3/issue/{issueIdOrKey}/votes
| | `issue.deleteVote({params})` | DELETE /rest/api/3/issue/{issueIdOrKey}/votes
| | `issue.getIssueWatchers({params})` | GET /rest/api/3/issue/{issueIdOrKey}/watchers
| | `issue.addWatcher({params})` | POST /rest/api/3/issue/{issueIdOrKey}/watchers
| | `issue.deleteWatcher({params})` | DELETE /rest/api/3/issue/{issueIdOrKey}/watchers
| | `issue.getIssueWorklogs({params})` | GET /rest/api/3/issue/{issueIdOrKey}/worklog
| | `issue.addWorklog({params})` | POST /rest/api/3/issue/{issueIdOrKey}/worklog
| | `issue.getWorklog({params})` | GET /rest/api/3/issue/{issueIdOrKey}/worklog/{id}
| | `issue.updateWorklog({params})` | PUT /rest/api/3/issue/{issueIdOrKey}/worklog/{id}
| | `issue.deleteWorklog({params})` | DELETE /rest/api/3/issue/{issueIdOrKey}/worklog/{id}
| | `issue.getWorklogPropertyKeys({params})` | GET /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties
| | `issue.getWorklogProperty({params})` | GET /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}
| | `issue.setWorklogProperty({params})` | PUT /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}
| | `issue.deleteWorklogProperty({params})` | DELETE /rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}
| Jql
| | `jql.getFieldReferenceData()` | GET /rest/api/3/jql/autocompletedata
| | `jql.getFieldAutoCompleteSuggestions({ params })` | GET /rest/api/3/jql/autocompletedata/suggestions
| | `jql.convertUserIdentifiers({ params })` | POST /rest/api/3/jql/pdcleaner
| Myself
| | `myself.getCurrentUser()` | GET /rest/api/3/myself
| Issue notification schemes
| | `notificationScheme.getNotificationSchemesPaginated({ params })` | GET /rest/api/3/notificationscheme
| | `notificationScheme.getNotificationScheme({ params })` | GET /rest/api/3/notificationscheme/{id}
| Search
| | `search.search({ post: false or true (default: true), params })` | GET or POST /rest/api/3/search
| Users
| | `users.findUsers({ params })` | GET /rest/api/3/user/search
| Worklog |
| | `worklog.getIDsOfDeletedWorklogs({ params })` | GET /rest/api/3/worklog/deleted
| | `worklog.getWorklogs({ params })` | POST /rest/api/3/worklog/list
| | `worklog.getIDsOfUpdatedWorklogs({ params })` | GET /rest/api/3/worklog/updated

### 🚨[`Deprecated`](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-basic-auth-and-cookie-based-auth/)🚨

### Auth supported calls

- [⬆️ Agile supported calls](#agile-supported-calls)
- [⬆️ Rest supported calls](#rest-supported-calls)

| API | Method | REST Call |
| --- | ------ | --------- |


| Session
| | `session.getSession()` | GET /rest/auth/1/session
| | `session.createSession({ params })` | POST /rest/auth/1/session
| | `session.deleteSession()` | DELETE /rest/auth/1/session

## License

[MIT license](http://opensource.org/licenses/MIT)
