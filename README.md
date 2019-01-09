# jira-api-wrapper

[![Build Status](https://travis-ci.com/MrRefactoring/jira-api-wrapper.svg?branch=master)](https://travis-ci.com/MrRefactoring/jira-api-wrapper)

Jira Api Wrapper for NodeJS

Supports:
* [REST API v3](https://developer.atlassian.com/cloud/jira/platform/rest/v3/) (in progress)
* [Agile API](https://developer.atlassian.com/cloud/jira/software/rest/) (in progress)
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
```

##### Pure NodeJS

```javascript 1.8
const JiraApi = require('jira-api-wrapper');

const api = new JiraApi({
  host: 'jira.atlassian.com'
});
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
  basic_auth: {
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
  basic_auth: {
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
    host: 'jenjinstudios.atlassian.net',
    oauth: {
        consumer_key: 'your-consumer-key',
        private_key: '-----BEGIN RSA PRIVATE KEY-----\n' +
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
    token_secret: 'some-secret-here'
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
        token_secret: 'your-token-secret',
        oauth_verifier: 'verifier-code-from-jira',
        consumer_key: 'your-consumer-key',
        private_key: '-----BEGIN RSA PRIVATE KEY-----\n' +
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
        consumer_key: 'your-consumer-key',
        private_key: '-----BEGIN RSA PRIVATE KEY-----\n' +
        'SomePrivateKey\n' +
        '-----END RSA PRIVATE KEY-----',
        token: 'your-access-token',
        token_secret: 'your-token-secret'
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
    basic_auth: {
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
    * moveIssuesToBacklog
    * moveIssuesToBacklogForBoard
* board
    * getAllBoards
    * createBoard
    * getBoard
    * deleteBoard
    * getIssuesForBacklog
    * getConfiguration
    * getEpics
    * getIssuesWithoutEpic
    * getIssuesForEpic
    * getFeaturesForBoard
    * toggleFeatures
    * getIssuesForBoard
    * moveIssuesToBoard
    * getProjects
    * getProjectsFull
    * getBoardPropertyKeys
    * getBoardProperty
    * setBoardProperty
    * deleteBoardProperty
    * getAllQuickFilters
    * getQuickFilter
    * getReportsForBoard
    * getAllSprints
    * getIssuesForSprint
    * getAllVersions
* issue
    * rankIssues
    * getIssue (params.agile = true required)
    * getIssueEstimationForBoard
    * estimateIssueForBoard
### Rest Api

* search
    * search

## License

[MIT license](http://opensource.org/licenses/MIT)
