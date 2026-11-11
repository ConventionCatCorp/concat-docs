---
sidebar_position: 2
displayed_sidebar: apiSidebar
---

# Obtaining a Bearer Token

:::info
Using OAuth in On Behalf Of (OBO) mode requires a user to interact with your application and the ConCat API in order to obtain a token. Any changes to your application scopes will require the user to re-authenticate. Service integrations do not require a user to authenticate, and application scopes can be modified at any time.
:::

Every request in this guide goes to the event customer's ConCat instance, for example `https://reg.mybigevent.org`. You need the **ID** and **Secret** of an OAuth application that the event customer created in Housekeeping; see [Getting Started](/docs/api/gettingstarted#getting-an-application-id-and-secret).

## On Behalf Of (OBO)

When using the OBO method, the user is sent to a consent page displaying the requested permission scopes, a basic description of your app, and the ability to grant or deny access.

After the user grants access, they are redirected back to your application with an authorization code. Your application exchanges this code for a bearer token and a refresh token. The bearer token expires after a set amount of time; the refresh token doesn't expire until it's used or the user's access is revoked.

### Step 1. Requesting Authorization

You'll need to create an OAuth authorization URL in order to redirect the user to ConCat for authorization. This will include your client ID, the requested scopes, and a return redirect URL.

The authorization URL is made up of the base URL of the event organization's instance, followed by `/oauth/authorize`, and the following query parameters:

#### Query Parameters

<div style={{ marginBottom: '1rem' }}>
  <Attribute id="oauth-req-client_id" name="client_id" type="number">
    The ID of your OAuth application.
  </Attribute>
  <Attribute id="oauth-req-response_type" name="response_type" type="string">
    The type of response that you want ConCat to return. The only supported value is <code>code</code>.
  </Attribute>
  <Attribute id="oauth-req-redirect_uri" name="redirect_uri" type="string">
    The URL that ConCat redirects the user to after they grant or deny access. It must use <code>http</code> or <code>https</code>, and its <strong>origin</strong> (scheme, host and port) must match one of the application's callback URIs. The path isn't checked. ConCat adds <code>?code=…</code> or <code>?error=…</code> to the end of this URL as it is, so use a URL without a query string.
  </Attribute>
  <Attribute id="oauth-req-scope" name="scope" type="string">
    The scopes you want to request, separated by spaces and URL-encoded. Only <Link to="/docs/api/gettingstarted/scopes#obo-scopes">OBO scopes</Link> can be requested here.
  </Attribute>
  <Attribute id="oauth-req-state" name="state" type="string" optional>
    A string, up to 4000 characters, that ConCat returns unchanged with the redirect. Use it to check that the response belongs to a request your application made.
  </Attribute>
  <Attribute id="oauth-req-code_challenge" name="code_challenge" type="string" optional>
    A PKCE code challenge, 43 to 128 characters: the base64url-encoded SHA-256 hash of a <code>code_verifier</code> that your application keeps secret. If you send it, the code can only be exchanged together with that verifier (step 3). Only the SHA-256 method is supported, and there is no <code>code_challenge_method</code> parameter.
  </Attribute>
</div>

An example authorization URL will look something like this:

<ExampleBox header="Example" codeBlockType="http">
  https://reg.mybigevent.org/oauth/authorize?client_id=123&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Foauth%2Fcallback&state=xyz&scope=pii%3Abasic%20pii%3Aemail&code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM
</ExampleBox>

#### Using PKCE

PKCE protects the authorization code if it's intercepted, and is recommended for every application, especially ones that can't keep a secret, such as single-page or mobile apps.

1. Generate a random `code_verifier` of 43 to 128 characters, and keep it for step 3.
2. Compute `code_challenge` as the SHA-256 hash of the verifier, encoded as base64url without padding.
3. Send `code_challenge` with the authorization URL, and `code_verifier` with the token request.

<ExampleBox header="Generating a PKCE pair" headerSubText="Node.js" codeBlockType="language-js">
  {`import { createHash, randomBytes } from 'node:crypto';

const codeVerifier = randomBytes(32).toString('base64url'); // 43 characters
const codeChallenge = createHash('sha256').update(codeVerifier).digest('base64url');`}
</ExampleBox>

### Step 2. Redirecting the User

<SplitColumn>
  <div>
    <p>
      Once you've generated the authorization URL, you'll need to redirect the user to ConCat.
    </p>
    <p>
      This can be done via a HTTP or JavaScript redirect, by presenting the link to the user as a button or <code>a</code> hyperlink, or in a pop-up window. The authorization page must <strong>never</strong> be displayed in an iframe.
    </p>
    <p>
      The user must be logged in to ConCat; if they aren't, they're asked to log in first. ConCat then displays a consent screen with a description of your application and a list of the requested permissions. The user can either grant or deny access. The user cannot partially grant access to certain scopes.
    </p>
    <p>
      If the user has already authorized your application for the same redirect URI and for all of the requested scopes, ConCat approves the request without showing the consent screen again.
    </p>
  </div>
  <div>
    <img className="bordered-img" src="https://cdn.concat.app/docs/oauth-example-consent.png" alt="ConCat OAuth Consent Screen" />
  </div>
</SplitColumn>

If the request is malformed, the user sees an **Invalid Request** screen instead of the consent screen. This happens when a parameter is missing, the application doesn't exist, the scope is unknown or isn't an OBO scope, the `redirect_uri` origin isn't one of the application's callback URIs, or the user doesn't hold a permission that one of the scopes requires.

:::caution
Some scopes require the user to hold a permission before they can grant them. By default, the only such scope is `dashboard:read`. See [Scopes](/docs/api/gettingstarted/scopes#obo-scopes).
:::

#### Sensitive Scopes

Sensitive scopes are scopes that allow access to administrative endpoints or provide access to information of other users. These scopes should be requested with care and limited to only the scopes required to provide the desired functionality.

When a user is presented with a consent screen, scopes whose names start with `admin:` are highlighted in red along with the text: `This is an administrative permission`. The `Authorize Application` button is also highlighted red.

<img className="bordered-img" src="https://cdn.concat.app/docs/oauth-example-consent-admin.png" alt="Admin OAuth Consent Screen" style={{ maxWidth: '500px' }} />

<div style={{ marginBottom: '1.5rem' }} />

:::danger
Abuse or misuse of sensitive scopes will result in your application being suspended. If a bearer or refresh token with a sensitive scope is lost or compromised, contact ConCat Support **immediately** for assistance.
:::

#### The redirect back to your application

| The user… | ConCat redirects to |
| --- | --- |
| Clicks **Authorize Application** | `<redirect_uri>?code=<code>&state=<state>` |
| Clicks **Cancel** | `<redirect_uri>?error=access_denied&state=<state>` |

The authorization code expires after **10 minutes** and can be used only once.

### Step 3. Exchanging the Code for a Token

<SplitColumn>
  <div>
    <p>
      Exchange the code by sending a <code>POST</code> request to <code>/api/oauth/token</code>. The body must be <code>application/x-www-form-urlencoded</code>.
    </p>
    <p>
      Authenticate your application in one of two ways: send <code>client_id</code> and <code>client_secret</code> as form fields, or send an HTTP Basic header, <code>Authorization: Basic base64(client_id:client_secret)</code>. If both form fields are present, the header is ignored.
    </p>
    <h4>Form fields</h4>
    <Attribute id="oauth-code-grant_type" name="grant_type" type="string">
      Always <code>authorization_code</code>.
    </Attribute>
    <Attribute id="oauth-code-code" name="code" type="string">
      The code from the redirect.
    </Attribute>
    <Attribute id="oauth-code-redirect_uri" name="redirect_uri" type="string">
      Exactly the same <code>redirect_uri</code> you used in step 1.
    </Attribute>
    <Attribute id="oauth-code-code_verifier" name="code_verifier" type="string" optional>
      The PKCE verifier. Required if you sent a <code>code_challenge</code> in step 1.
    </Attribute>
    <Attribute id="oauth-code-scope" name="scope" type="string" optional>
      A space-separated subset of the scopes the user granted. Leave it out to get all of them.
    </Attribute>
    <Attribute id="oauth-code-client_id" name="client_id" type="number" optional>
      Your application's ID, unless you use the Basic header.
    </Attribute>
    <Attribute id="oauth-code-client_secret" name="client_secret" type="string" optional>
      Your application's secret, unless you use the Basic header.
    </Attribute>
    <div style={{ marginBottom: '1.5rem' }} />
    <p>
      The response returns an access token, the number of seconds until it expires, the granted scopes as an <strong>array</strong>, and a refresh token. Access tokens last <strong>900 seconds</strong> (15 minutes) by default; always use <code>expires_in</code> rather than a fixed value.
    </p>
  </div>
  <div>
    <EndpointRequest header="/api/oauth/token" method="POST" headerSubText="cURL">
      {`curl https://reg.mybigevent.org/api/oauth/token \\
  -X POST \\
  -u "123:abc" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "grant_type=authorization_code" \\
  -d "code=<code>" \\
  -d "redirect_uri=https%3A%2F%2Fexample.com%2Foauth%2Fcallback" \\
  -d "code_verifier=<code_verifier>"`}
    </EndpointRequest>
    <EndpointResponse>
      {`{
  "access_token": "eyJ...",
  "expires_in": 900,
  "refresh_token": "...",
  "scope": ["pii:basic", "pii:email"],
  "token_type": "Bearer"
}`}
    </EndpointResponse>
  </div>
</SplitColumn>

#### When the exchange fails

| Problem | Response |
| --- | --- |
| No client credentials | `403`, access error `1` (`MissingCredentials`) |
| An `Authorization` header that isn't a valid Basic header | `403`, access error `2` (`InvalidAuthHeader`) |
| Wrong client ID or secret | `403`, access error `3` (`InvalidCredentials`) |
| The code is unknown, already used or expired, or the `code_verifier` is missing or doesn't match | `404`, resource error `OAuthToken` |
| `redirect_uri` differs from the one used in step 1 | `400`, logic error `32` (`OAuthInvalidRedirectURI`) |
| `scope` names a scope that isn't an OBO scope | `400`, logic error `31` (`OAuthInvalidScope`) |
| `scope` asks for a scope the user didn't grant | `403`, access error `26` (`UnauthorizedOAuthScopes`) |

See [Errors](/docs/api/errors) for the shape of each error.

### Step 4. Refreshing the Token

<SplitColumn>
  <div>
    <p>
      When the bearer token expires, use the refresh token to get a new one. Send <code>grant_type=refresh_token</code> and the <code>refresh_token</code> to the same endpoint, with the same client authentication as step 3. <code>redirect_uri</code> isn't needed.
    </p>
    <p>
      The <code>scope</code> parameter is optional. If you provide it, it must be a subset of the scopes of the refresh token. Use it to drop scopes your application no longer needs. If <code>scope</code> is not provided, the scopes of the refresh token are used. Asking for a scope the token doesn't have returns access error <code>26</code> (<code>UnauthorizedOAuthScopes</code>).
    </p>
    <p>
      Each refresh token can be used only once. The response contains a new access token and a <strong>new refresh token</strong>; store it, because the old one no longer works.
    </p>
  </div>
  <div>
    <EndpointRequest header="/api/oauth/token" method="POST" headerSubText="cURL">
      {`curl https://reg.mybigevent.org/api/oauth/token \\
  -X POST \\
  -u "123:abc" \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "grant_type=refresh_token" \\
  -d "refresh_token=<refresh_token>" \\
  -d "scope=pii%3Abasic"`}
    </EndpointRequest>
    <EndpointResponse>
      {`{
  "access_token": "eyJ...",
  "expires_in": 900,
  "refresh_token": "...",
  "scope": ["pii:basic"],
  "token_type": "Bearer"
}`}
    </EndpointResponse>
  </div>
</SplitColumn>

:::caution
Scopes removed during a refresh can't be added back later without a new authorization request.
:::

### Step 5. Authenticating with the Token

All requests to the ConCat APIs **must** be done through a HTTPS connection, with a minimum TLS protocol of v1.2 or newer. ConCat uses a HTTP Authorization header to authenticate API requests. The Authorization header must be in the following format:

```
Authorization: Bearer <Token>
```

A token that has expired returns `401` with authentication error code `2001`; a token that isn't valid returns `401` with code `2000`. A token only works on the instance of the organization that issued it.

:::info
The above header **should** always be included in your request, even if the request is not authenticated. This helps us prevent abuse of the APIs, and collect usage statistics to improve the service.
:::

### Logging the User Out

To log the user out of ConCat from your application, send them to `/oauth/logout` on the instance, with these query parameters:

| Parameter | Description |
| --- | --- |
| `client_id` | Your application's ID. |
| `access_token` | A current, unexpired access token that your application holds for this user. |
| `next` | Optional. Where to send the user afterwards: a path on the same instance, or a URL whose origin matches one of the application's callback URIs. |

<ExampleBox header="Example" codeBlockType="http">
  https://reg.mybigevent.org/oauth/logout?client_id=123&access_token=eyJ...&next=https%3A%2F%2Fexample.com%2Fsigned-out
</ExampleBox>

The user must be logged in. If the access token belongs to this user and was issued to your application, ConCat ends the user's session, deletes the authorization codes and refresh tokens it issued to your application for this user, and redirects them to `next`. Access tokens are signed tokens that aren't looked up on each request, so one that was issued before the logout stays valid until it expires.

If ConCat can't verify the request, for example because the token has expired, the user sees a **Log out attempt** warning and decides whether to log out. Logging out from that warning doesn't revoke your application's tokens.

## Service Integration

When using the service integration method, the application ID and secret are exchanged for a time-limited bearer token with a set of requested application scopes. The requested application scopes can be any subset of the application's **Application Permissions**, allowing multiple bearer tokens to be issued with limited scopes and use cases.

### Step 1. Requesting a token

<SplitColumn>
  <div>
    <p>
      Send <code>grant_type=client_credentials</code> to <code>/api/oauth/token</code>, with the same client authentication as the OBO flow (form fields or an HTTP Basic header). The body must be <code>application/x-www-form-urlencoded</code>.
    </p>
    <p>
      List the scopes you need in <code>scope</code>, separated by spaces. If you leave <code>scope</code> out, the token has no scopes. The response returns an access token, the number of seconds until it expires, and the granted scopes as an array. There is no refresh token: request a new token when it expires, or when you need different scopes.
    </p>
    <Admonition type="tip">
      Requesting an OBO-only scope, or a scope the application hasn't been granted, returns logic error <code>116</code> (<code>ApplicationNotGranted</code>). A scope that doesn't exist returns logic error <code>31</code> (<code>OAuthInvalidScope</code>).
    </Admonition>
  </div>
  <div>
    <EndpointRequest header="/api/oauth/token" method="POST" headerSubText="cURL">
      {`curl https://reg.mybigevent.org/api/oauth/token \\
  -X POST \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "client_id=123" \\
  -d "client_secret=abc" \\
  -d "grant_type=client_credentials" \\
  -d "scope=user%3Aread%20registration%3Aread"`}
    </EndpointRequest>
    <EndpointResponse>
      {`{
  "access_token": "eyJ...",
  "expires_in": 900,
  "scope": ["user:read", "registration:read"],
  "token_type": "Bearer"
}`}
    </EndpointResponse>
  </div>
</SplitColumn>

### Step 2. Authenticating with the Token

All requests to the ConCat APIs **must** be done through a HTTPS connection, with a minimum TLS protocol of v1.2 or newer. ConCat uses a HTTP Authorization header to authenticate API requests. The Authorization header must be in the following format:

```
Authorization: Bearer <Token>
```

:::info
The above header **should** always be included in your request, even if the request is not authenticated. This helps us prevent abuse of the APIs, and collect usage statistics to improve the service.
:::

## ConCat's Signing Keys

Access tokens and webhook requests are JWTs signed by ConCat. The public keys that verify them are published, without authentication, at `GET /.well-known/jwks.json` as a JWK Set. Each token's `kid` header names the key that signed it. See [Get signing keys](/docs/api/endpoints/v0/reference/get-signing-keys) and [Validating Payloads](/docs/api/webhooks/validating).
