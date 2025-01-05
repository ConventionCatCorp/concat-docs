---
sidebar_position: 2
displayed_sidebar: apiSidebar
---

# Obtaining a Bearer Token

:::info
Using OAuth in On Behalf Of (OBO) mode requires a user to interact with your application and the ConCat API in order to obtain a token. Any changes to your application scopes will require the user to re-authenticate. Service integrations do not require a user to authenticate, and application scopes can be modified at any time.
:::

## On Behalf Of (OBO)
When using the OBO method, the user will be redirected to an authentication page displaying the requested permission scopes, a basic description of your app, and the ability to grant or deny access.

After receiving authorization, the user will be redirected back to your application with a token. You can use this token to authenticate your future requests to the ConCat APIs by exchanging it for a bearer token and a refresh token. The bearer token will expire after a set amount of time, but the refresh token will never expire until used or the user revokes access.

### Step 1. Requesting Authorization
You'll need to create an OAuth authorization URL in order to redirect the user to ConCat for authorization. This will include your client ID, requested scopes, and a return redirect URL.

The authorization URL is made up of the base URL of the event organization's instance, followed by `/oauth/authorize`, and the following query parameters:

#### Query Parameters
<div style={{ marginBottom: "1rem" }}>
  <attribute id="oauth-req-client_id" name="client_id" type="number">
    The client ID that identifies your application.
  </attribute>
  <attribute id="oauth-req-response_type" name="response_type" type="string">
    The type of response that you want ConCat to return. The only supported value is "code".
  </attribute>
  <attribute id="oauth-req-redirect_uri" name="redirect_uri" type="string">
    The URL that ConCat will redirect to after authorization. This must be the same URL that you provided when registering your application, otherwise the user will receive an invalid request error.
  </attribute>
  <attribute id="oauth-req-scope" name="scope" type="string">
    The scope(s) that you want to request access to. This must be a URL-encoded list of scopes, separated by spaces.
  </attribute>
  <attribute id="oauth-req-state" name="state" type="string" optional>
    An optional string that ConCat will return with the authorization response. This string can be used to verify that the request originated from your application.
  </attribute>
</div>

An example authorization URL will look something like this:

<exampleBox header="Example" codeBlockType="http">
  https://reg.mybigevent.org/oauth/authorize?client_id=123&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Foauth%2Fcallback&state=xyz&scope=pii%3Abasic
</exampleBox>

### Step 2. Redirecting the User

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: '1rem', marginBottom: '1rem' }}>
  <div>
    <p>
      Once you've generated the authorization URL, you'll need to redirect the user to ConCat.
    </p>
    <p>
      This can be done via a HTTP or JavaScript redirect, by presenting the link to the user as a button or <code>a</code> hyperlink, or in a pop-up window. The authorization page must <strong>never</strong> be displayed in an iframe.
    </p>
    <p>
      ConCat will display a consent screen to the user. This screen will include a description of your application, and a list of requested permissions. The user can then either grant or deny access. At this time, the user cannot partially grant access to certain scopes.
    </p>
  </div>
  <div>
    <img className="bordered-img" src="https://cdn.concat.app/docs/oauth-example-consent.png" className="bordered-img" alt="ConCat OAuth Consent Screen" />
  </div>
</div>

:::caution
The user must have access to all of the requested scopes in order to grant access. If the user does not have access to all of the requested scopes, they will receive an invalid request error.
:::

#### Sensitive Scopes

Sensitive scopes are scopes that allow access to administrative endpoints or provide access to information of other users. These scopes should be requested with care and limited to only the scopes required to provide the desired functionality.

When a user is presented with a consent screen, sensitive scopes will be highlighted in red along with the text: `This is an administrative permission`. The `Authorize Application` button will also be highlighted red.

<img className="bordered-img" src="https://cdn.concat.app/docs/oauth-example-consent-admin.png" alt="Admin OAuth Consent Screen" style={{ maxWidth: '500px' }} />

<div style={{ marginBottom: '1.5rem' }} />

:::danger
Abuse or misuse of sensitive scopes will result in your application being suspended. If a bearer or refresh token with a sensitive scope is lost or compromised, contact ConCat Support **immediately** for assistance.
:::

### Step 3. Exchanging for Token

The user will be redirected back to your application's `redirect_uri` with query parameters containing a `code` and optional `state` attribute. You can use this code to exchange it for a bearer token and a refresh token.

<exampleBox header="Example" codeBlockType="http">
  https://thebest.app/api/oauth/token?code=123&state=xyz
</exampleBox>

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: '1rem', marginBottom: '1rem' }}>
  <div>
    <p>
      This code can be exchanged for a bearer token and a refresh token. The bearer token will expire after a set amount of time, but the refresh token will never expire until used or the user revokes access.
    </p>
    <p>
      The response will return an access token, the length of time until the token expires, the valid scopes, and a refresh token. The refresh token can be used to obtain a new bearer token once the old one expires.
    </p>
  </div>
  <div>
    <exampleBox header="/api/oauth/token" method="POST" headerSubText="cURL">
      {`curl https://reg.mybigevent.org/api/oauth/token \\
  -X POST \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "client_id=123" \\
  -d "client_secret=abc" \\
  -d "code=123" \\
  -d "grant_type=authorization_code" \\
  -d "redirect_uri=https%3A%2F%2Fexample.com%2Foauth%2Fcallback" \\
  -d "scope=pii%3Abasic"`}
    </exampleBox>
    <exampleBox header="Response" headerSubText="application/json">
      {`{
  "access_token": "...",
  "expires_in": 3600,
  "scope": "pii:basic",
  "refresh_token": "...",
  "token_type": "Bearer",
}`}
    </exampleBox>
  </div>
</div>

:::caution
If your app no longer requires access to all of the scopes originally requested, you can provide a subset of scopes in the `scope` parameter when refreshing the token. However, no additional scopes can be granted this way, and any scopes removed cannot be re-added later without a new authorization request.
:::

### Step 4. Refreshing the Token

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: '1rem', marginBottom: '1rem' }}>
  <div>
    <p>
      If the bearer token expires, you can use the refresh token to obtain a new bearer token. A refresh token will not expire until used or the user revokes access.
    </p>
    <p>
      The <code>scope</code> parameter is optional, but if you provide it, you must provide a subset of the scopes originally requested. This can be used to remove scopes that are no longer required by your application for security. If <code>scope</code> is not provided, the scopes valid for the previous bearer token will be used.
    </p>
    <p>
      The response will return an access token, the length of time until the token expires, the valid scopes, and a new refresh token. The refresh token can be used to obtain a new bearer token once the old one expires.
    </p>
  </div>
  <div>
    <exampleBox header="/api/oauth/token" method="POST" headerSubText="cURL">
      {`curl https://reg.mybigevent.org/api/oauth/token \\
  -X POST \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "client_id=123" \\
  -d "client_secret=abc" \\
  -d "refresh_token=123" \\
  -d "grant_type=refresh_token" \\
  -d "redirect_uri=https%3A%2F%2Fexample.com%2Foauth%2Fcallback"`}
    </exampleBox>
    <exampleBox header="Response" headerSubText="application/json">
      {`{
  "access_token": "...",
  "expires_in": 3600,
  "scope": "pii:basic",
  "refresh_token": "...",
  "token_type": "Bearer",
}`}
    </exampleBox>
  </div>
</div>

### Step 5. Authenticating with the Token

All requests to the ConCat APIs **must** be done through a HTTPS connection, with a minimum TLS protocol of v1.2 or newer. ConCat uses a HTTP Authorization header to authenticate API requests. The Authorization header must be in the following format:

```
Authorization: Bearer <Token>
```

:::info
The above header **should** always be included in your request, even if the request is not authenticated. This helps us prevent abuse of the APIs, and collect usage statistics to improve the service.
:::

## Service Integration

When using the service integration method, the application ID and secret are exchanged for a time-limited bearer token with a set of requested application scopes. The requested application scopes can be any subset of the scopes approved for use by the application, allowing multiple bearer tokens to be issued with limited scopes and use cases.

### Step 1. Requesting a token

<splitColumn>
  <div>
    <p>
      To receive an access token, the application can exchange its ID and secret for a limited-time bearer token. The bearer token will expire after a set amount of time and must be re-requested using this flow when it expires.
    </p>
    <p>
      The response will return an access token, the length of time until the token expires, and the valid scopes. In order to change the scopes of the token, a new token must be requested with the updated scopes.
    </p>
    <Admonition type="tip">
      Attempting to request OBO-only scopes will result in an error.
    </Admonition>
  </div>
  <div>
    <exampleBox header="/api/oauth/token" method="POST" headerSubText="cURL">
      {`curl https://reg.mybigevent.org/api/oauth/token \\
  -X POST \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "client_id=123" \\
  -d "client_secret=abc" \\
  -d "grant_type=client_credentials" \\
  -d "scope=user%3Aread"`}
    </exampleBox>
    <exampleBox header="Response" headerSubText="application/json">
      {`{
  "access_token": "...",
  "expires_in": 3600,
  "scope": "user:read",
  "token_type": "Bearer",
}`}
    </exampleBox>
  </div>
</splitColumn>

### Step 2. Authenticating with the Token

All requests to the ConCat APIs **must** be done through a HTTPS connection, with a minimum TLS protocol of v1.2 or newer. ConCat uses a HTTP Authorization header to authenticate API requests. The Authorization header must be in the following format:

```
Authorization: Bearer <Token>
```

:::info
The above header **should** always be included in your request, even if the request is not authenticated. This helps us prevent abuse of the APIs, and collect usage statistics to improve the service.
:::