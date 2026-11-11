# API reference audit: concat-docs `docs/api/` vs ConCat master (f4d531f, 2026-11-04)

Evidence base: the master extract only (a clean `git archive` extract of ConCat master (paths are relative to the ConCat repo root)). Docs audited from the working tree of `this repo` (branch `docs/textbook-guides`, clean; `docs/api/` identical to `origin/main`).
`git -C ~/code/ConCat log origin/master` was used only for dates of master commits.

Path abbreviations used for master evidence (all relative to the extract root):

| Abbrev | Path |
| --- | --- |
| `v0/` | `src/backend/app/server/routes/public/v0/` |
| `api/` | `src/backend/app/server/routes/api/` |
| `svc/` | `src/backend/app/services/` |
| `perm.ts` | `src/backend/defaults/permissions.ts` |
| `err.ts` | `src/shared/error.ts` |
| `server.ts` | `src/backend/app/server/server.ts` |
| `rv.ts` | `src/backend/app/server/plugins/routeValidation.ts` |

Docs paths are relative to `docs/api/`.

---

## 1. Summary

| Page | Class | One-line reason |
| --- | --- | --- |
| `intro.md` | Accurate | v0 is master's only versioned API, and the `/api/docs` Swagger UI it points to exists (`server.ts:441-443`). It mentions an "API Release Notes page" that doesn't exist in this repo. |
| `gettingstarted/gettingstarted.md` | Needs update | Service integrations already write data (`user:create`, `user:roles:update`, `order:manage`), and OAuth apps are self-service in Housekeeping › Developers. |
| `gettingstarted/oauth.md` | Needs update | The token `scope` is an array, not a string. PKCE, HTTP Basic client auth, origin-only redirect checks, 10-minute codes and `error=access_denied` aren't documented. The page uses lowercase MDX tags, which don't render. |
| `gettingstarted/scopes.md` | Needs update | Lists 4 of 11 service scopes and 8 of 9 OBO scopes. The "requires administrator permission" note isn't what master's consent check enforces. |
| `errors/errors.mdx` | Needs update | `logic` is an array of objects, not an object. `code` (access) and `args` (logic) are missing, `serviceUnavailable` is missing, and 6 of 10 error categories are undescribed. |
| `errors/logicerrorcodes.mdx` | Needs update | Codes 1–7 match, but master defines 238 codes, and none of the codes the documented endpoints return are listed. |
| `endpoints/legacy/users.mdx` | Needs update (minor) | Path, method, scope and PII gating all match. Six response fields are missing. |
| `endpoints/v0/users.mdx` | Needs update | The address sub-field names are wrong, `phone` is typed boolean, 3 fields are missing, the limit is documented as 100 (master: 1000), 3 of 4 filters and `hasMore` are missing, and `POST /api/v0/users` isn't covered. |
| `endpoints/v0/roles.mdx` | Needs update | `hasMore` is missing, `scope` is shown as required but is optional, `POST /api/v0/roles/{roleId}/users` isn't covered, and one anchor is broken. |
| `endpoints/v0/registration.mdx` + `_registrationModel.mdx` | Needs update | The model is missing `uuid`, `badgeId`, `badgePrinted`, `order`, option `id` and `profilePictureURL`. `userIds` is typed as number, `paidProductId` is missing, and the model is listed under "Request". |
| `endpoints/v0/volunteers.mdx` + `_volunteerModel.mdx` | Needs update | The search response wrapper and `hasMore` are missing. `user.isStaff`, `profilePictureURL` and option `id` are missing. The department `name`/`email` descriptions are wrong. |
| `endpoints/v0/dealers.mdx` | Needs update (closest to master) | The limit max is 1000. `filter` is optional, and master's handler ignores it. `email` is required. The address fields are nullable. `phone` is typed boolean. The example header shows the wrong path. |

No page is "Not in master": every endpoint and feature the docs describe exists on master. All "Needs update" pages are dominated by field-level drift plus missing endpoints.

---

## 2. How master exposes its API (context for every finding)

- **Public versioned API = `/api/v0`**, defined in `src/backend/app/server/routes/public/v0/*.ts`. The route loader globs every file under `routes/` (`src/backend/app/server/routes/index.ts:13-15`).
- **The public/internal boundary is the `api` tag.** hapi-swagger publishes every route tagged `api` (`rv.ts:113-154`, "hapi-swagger publishes every route tagged `api` in the public API docs"). Server startup fails if such a route lacks a description, a hapi-swagger `id`, or notes that name its scope.
  - Tagged `api`: 19 `/api/v0` routes, plus `GET /.well-known/jwks.json` (`api/signing.ts:27`). Nothing else.
- **OAuth reachability is a second, weaker marker.** A route accepts third-party bearer tokens only if `auth.strategies` includes `'OAuth'`. The server default is `['cookie','support']` (`server.ts:105-109`).
  - 14 route files accept OAuth: all of `v0/`, plus `api/users/current/get.ts`, `api/users/{userId}/registration/get.ts`, `api/users/{userId}/registration/emergencycontacts/get.ts`, `api/tickets.ts` and `api/devices.ts`.
- **Swagger/OpenAPI.** Master serves hapi-swagger 17.3.2 (`package.json:262`; lock `9101-9102`): `/api/swagger.json` (Swagger **2.0**), UI at `/api/docs`, assets at `/api/swaggerui/` (`server.ts:427-495`). The API description, tags and OAuth `securityDefinitions` are configured there (`server.ts:445-485`).
  - Master has **no script or npm task that writes the spec to a file** (`package.json:53-110`; nothing in `build/`). The spec exists only at runtime; the e2e test fetches it from a running server (`src/backend/test/e2e/api/swagger.test.ts:31-34`).
  - Every public route builds its notes with `apiNotes()`, which appends "### Authentication … requires the `scope` scope" (`src/backend/app/server/util/apiNotes.ts:9-15`). That landed in master on 2026-10-29 (f48ec5569, #3373).
- **Pagination contract** for every `*/search` and list route: the response is `{ hasMore: boolean (required), nextPage?: string, data: [] }`. `nextPage` is **omitted**, not `null`, when there are no more results (`src/backend/app/util/paginated.ts:4-8`; e.g. `v0/user.ts:195-199`). The token is base64 JSON `{lastId}`. A bad token returns logic error 112 `BadPaginationToken` (e.g. `v0/user.ts:114-116`).
- **Shared v0 user model** (`v0/util.ts:8-17, 50-61`): `id` (string), and `firstName`, `lastName`, `username`, `email` (string **or null**, required). `preferredName` and `phone` are optional and nullable. `profilePictureURL` is a required string. Every page that embeds a user omits `profilePictureURL` and never mentions `null`.
- **Shared option model** (`v0/util.ts:63-70`): `{ id, name, type, value }`. `type` is one of `address | currency | file | multi | number | phone | select | text` (`src/shared/options/index.ts:47-48`). Every docs page lists only 4–6 of these, and most omit `id`.

---

## 3. Per-page detail

### 3.1 `intro.md`: Accurate

- The `/api/docs` Swagger claim is true (`server.ts:442`). "Latest version is v0" is true; `routes/public/` contains only `v0/`.
- Docs-side issue: "All API changes will be documented on the API Release Notes page". No such page exists in this repo (grep found the phrase only in `intro.md`).
- The rate-limit and abuse statements are policy and can't be checked against code. A rate limiter does exist (`src/backend/app/server/plugins/rateLimit.ts`; 429 shape at `rv.ts:244-251, 300`).

### 3.2 `gettingstarted/gettingstarted.md`: Needs update

| Claim | Master | Evidence |
| --- | --- | --- |
| "Service-level integration … will allow modification of data **in the future**" | Service tokens can already write: create users, grant/remove roles, remove/revoke order items | `v0/user.ts:402-406` (`user:create`), `v0/roles.ts:295-299, 367-371` (`user:roles:update`), `v0/orders.ts:357-361, 436-440` (`order:manage`) |
| "OBO integration will remain read-only" | The OBO scope `admin:ticket:scan` drives a write route | `api/tickets.ts:252-273` (`PATCH /api/tickets/{id}/scan`, OAuth only) |
| "Developer registration is by invitation only … you will be given a unique API ID and secret key" | Event-customer admins with `oauth:manage` create OAuth apps themselves in Housekeeping › Developers › OAuth applications. The secret is returned once and stored as a SHA-256 hash. Whether third-party developers still go through an invitation is a business process: unverified. | `src/frontend/containers/housekeeping/developers/index.tsx:33-40`; `api/oauth.ts:87-122` (`POST /api/oauth` returns `{id, secret}`) |
| "Permissions for a service integration are granted … at the time the integration is created" | Correct: `applicationPermissions` on the app, editable later | `api/oauth.ts:113-118, 146-151` |
| HTTPS / TLS 1.2 minimum | Not enforced in app code. Unverified (infrastructure). | — |

### 3.3 `gettingstarted/oauth.md`: Needs update

Endpoints: frontend `GET /oauth/authorize` (`src/frontend/containers/corecontainer.tsx:182`) and `POST /api/oauth/token` (`api/oauth/token/post.ts:64-174`). Both exist.

| # | Docs | Master | Evidence |
| --- | --- | --- | --- |
| 1 | Token response `"scope": "pii:basic"` (string) | `scope` is a **string array** | `src/shared/oauth.ts:37-43`; `svc/OAuthService.ts:528, 595` |
| 2 | Examples show `expires_in: 3600` | Default access-token life is **900 s** (config minimum 300) | `config/default.js:94-96`; `svc/Config.ts:318` |
| 3 | Query params: client_id, response_type, redirect_uri, scope, state | Also **`code_challenge`** (PKCE, 43–128 chars, verified as base64url SHA-256, i.e. S256 only). The token endpoint then needs **`code_verifier`**. | `src/frontend/containers/oauth/authorize/index.tsx:118, 130`; `api/oauth/{clientId}/authorize/post.ts:72`; `svc/OAuthService.ts:445-454`; `api/oauth/token/post.ts:163` |
| 4 | Client credentials only as form fields | Also accepted as **HTTP Basic** (`Authorization: Basic base64(id:secret)`) | `api/oauth/token/post.ts:34-55, 69-72` |
| 5 | "redirect_uri … must be the same URL that you provided when registering" | Only the **origin** is checked against registered URIs. The token exchange requires `redirect_uri` to equal the one used at authorization. | `svc/OAuthService.ts:686-703, 441-443` |
| 6 | Code lifetime not stated | Authorization codes expire after **10 minutes** and are single-use | `svc/OAuthService.ts:337-351, 456-457` |
| 7 | Deny path not described | On "Cancel" the user is redirected to `redirect_uri?error=access_denied&state=…` | `src/frontend/containers/oauth/authorize/components/Denied.tsx:25-26` |
| 8 | Successful redirect `?code=…&state=…` | Correct | `.../authorize/components/Authorized.tsx:24-26` |
| 9 | "User must have access to all requested scopes" | Enforced only for scopes with a `requiredPermission`. In master's seed that is **only `dashboard:read`**. | `svc/OAuthService.ts:641-672`; `src/backend/app/db/migrations/20170903T133604892-user.ts:2918-2920` |
| 10 | Sensitive scopes highlighted red with "This is an administrative permission" | Correct for scopes whose names start with `admin:`. The button turns red. | `.../components/OAuthPermission.tsx:15, 27`; `authorize/index.tsx:109, 189`; `src/shared/translations/en-US.json:2037` |
| 11 | Refresh: new refresh token, optional `scope` subset, no new scopes | Correct. Refresh tokens rotate (the old one is deleted), and `UnauthorizedOAuthScopes` (access error 26) is returned for a superset. | `svc/OAuthService.ts:420-426, 459-491`; `api/oauth/token/post.ts:110-112` |
| 12 | Refresh example sends `redirect_uri` | Ignored for refresh grants (harmless) | `svc/OAuthService.ts:428-443` |
| 13 | Service: "requesting OBO-only scopes will result in an error" | Correct: logic error 116 `ApplicationNotGranted`, also returned for scopes not granted to the app. Unknown scope: 31 `OAuthInvalidScope`. | `svc/OAuthService.ts:544-562`; `api/oauth/token/post.ts:125-131` |
| 14 | Token endpoint content type `application/x-www-form-urlencoded` | Correct (only type allowed) | `api/oauth/token/post.ts:138-140` |
| 15 | Expired or invalid token behavior not documented | 401 `authentication` error, code 2000 Invalid / 2001 Expired | `src/backend/app/server/plugins/auth/oAuth.ts:116-121`; `err.ts` `AuthError` |
| 16 | Not documented | RP-initiated logout: `/oauth/logout?client_id=&access_token=&next=` revokes the app's tokens for the user and redirects to `next` if its origin is registered | `src/frontend/containers/oauth/logout.tsx:18-52`; `api/users/logout/get.ts:48-110` |

Docs-side rendering bug: `oauth.md` uses lowercase `<attribute>` (lines 24-38), `<exampleBox>` (43, 88, 102, 113, 144, 154, 197, 206) and `<splitColumn>` (184, 215). `src/theme/MDXComponents.tsx:21-43` registers only PascalCase names, so these render as unknown HTML elements. The 2026-04 MDX 3 migration (PR #69, see §6.2) missed this file.

### 3.4 `gettingstarted/scopes.md`: Needs update

Master's scope flags come from `perm.ts`: `oAuthApplication: true` means the scope can be granted to a service app; `oAuthGrantable: true` means it can be granted by a user (OBO). The flags are seeded by `20170903T133604892-user.ts:18-28`.

**Service integration scopes** (docs list 4; master has 11):

| Scope | In docs | `perm.ts` | Used by an OAuth-reachable route |
| --- | --- | --- | --- |
| `user:read` | yes | 203-204 | `v0/user.ts:205, 269`; `v0/roles.ts:56, 132, 212` |
| `user:roles:update` | yes | 132-133 | `v0/roles.ts:299, 371` |
| `registration:read` | yes | 106-108 (also selfScoped, default) | `v0/registration.ts:321, 407` |
| `volunteer:read` | yes | 231-232 | `v0/volunteers.ts:141, 212, 286` |
| `user:create` | **no** | 177-178 | `v0/user.ts:406` |
| `user:note:read` | **no** | 190-191 | `v0/userNotes.ts:101` |
| `vendor:read` | **no** | 210-211 | `v0/dealer.ts:222` |
| `order:view` | **no** | 264-265 | `v0/orders.ts:209`; `v0/vouchers.ts:113`; `api/tickets.ts:317` |
| `order:manage` | **no** | 277-278 | `v0/orders.ts:361, 440` |
| `system:export:sqlite` | **no** | 328-329 | `v0/export.ts:797` (route not tagged `api`) |
| `user:note:categories:manage` | **no** | 396-398 | none: its routes (`api/userNotes.ts:286, 339, 385, 398`) use the default cookie/support strategies |

The Swagger `securityDefinitions` list the first 10 of these, not the last (`server.ts:471-482`).

**OBO scopes** (docs list 8; master has 9):

| Scope | In docs | `perm.ts` | Notes |
| --- | --- | --- | --- |
| `pii:basic`, `pii:email`, `pii:phone`, `pii:address` | yes | 57-58, 72-73, 79-80, 42-43 | Consumed by `GET /api/users/current` (`api/users/current/get.ts:50, 64-79`) |
| `pii:finance:read` | yes | 64-65 | No OAuth-reachable route consumes it. `GET /api/users/{id}/orders` checks `pii:finance:read:{id}` but uses the default strategies (`api/users/{userId}/orders/get.ts:18-25`). |
| `con:read` | yes | 24-25 | Only `GET /api/users/{id}/registration/emergencycontacts` (`.../emergencycontacts/get.ts:51-52`) |
| `admin:ticket:read`, `admin:ticket:scan` | yes ("Requires administrator permission") | 85-86, 91-92 | In master's seed these have **no** `requiredPermission`, so the consent check doesn't require an admin permission. Only `dashboard:read` is gated (migration `:2918-2920`; tests cover only `dashboard:read`, `src/backend/test/e2e/api/oauth.test.ts:223-226`). Production DB state is unverified. Worth raising with the platform team as a possible authorization gap. |
| `dashboard:read` | **no** | 298-299 | Gated by `requiredPermission`. No route in master consumes it. |

### 3.5 `errors/errors.mdx`: Needs update

| Docs | Master | Evidence |
| --- | --- | --- |
| Base format shows `"logic": {}` | `logic` is an **array** of `{ code, message, args? }` | `err.ts:437-441, 472-474`; `rv.ts:198-209` |
| Access error attributes: `message`, `permissions` | Also a required **`code`** (`AccessError` enum, 1–31) | `err.ts:443-447, 247-279` |
| Logic error attributes: `code`, `message` | Also optional **`args`** (e.g. `{scopes}` for 31/116/139) | `err.ts:438`; `api/oauth/token/post.ts:126, 130` |
| Base format lists 9 categories | Master has 10. **`serviceUnavailable`** (string array, 503) is missing. | `err.ts:504-506`; `rv.ts:265-267, 302` |
| Describes server, access and logic only | `validation` (array of `{source, message, path, type, context}`, 400), `authentication` (`{code, message}`, 401), `resource` (`{name, message?}`, 404), `usage` (`"No such route."`, 404), `rateLimit` (`{expiresAt, message}`, 429), `internal` (string or string[], 500) aren't described | `err.ts:429-506`; `rv.ts:282-303` (status → shape map: 400 validation/logic, 401 authentication, 403 access, 404 usage/resource, 413 logic, 429 rateLimit, 500 internal/server, 503 serviceUnavailable) |
| — | Each response carries exactly **one** category | `rv.ts:269-280` |

Docs-side: the `Attribute` id `access-errors-attr-message` is used twice (lines 58 and 76).

### 3.6 `errors/logicerrorcodes.mdx`: Needs update

- Master: `LogicError` enum `err.ts:3-244`, with `Test = -1`, `None = 0`, then **1–238**. Messages are in `src/backend/app/server/errorCodes.ts:5+`, and there are 240 `logic_error.*` keys in `src/shared/translations/en-US.json`. A full number list is saved at `.../scratchpad/logic-codes.txt`.
- Docs list 1–7, and every name/number pair matches (`err.ts:6-12`). Code 7 `CannotAddCompensationToOwn` is marked deprecated; master never raises it (only the message maps reference it: `errorCodes.ts:16`, `src/frontend/utils/errorHandling.tsx:43`), which supports the label.
- Codes the documented API can return that are **missing**:
  - 10 `UserAlreadyHasRole` (`v0/roles.ts:274-276`)
  - 31 `OAuthInvalidScope`
  - 32 `OAuthInvalidRedirectURI`
  - 49 `OrderNotPaid` (`v0/orders.ts:422-424`)
  - 79 `OrderIsPaid` (`v0/orders.ts:349-351`)
  - 112 `BadPaginationToken` (every search route)
  - 114 `CannotRemoveAddonFromCart` (`v0/orders.ts:341-343`)
  - 116 `ApplicationNotGranted`
  - 137 `OrderGrantError` (`v0/orders.ts:426-428`)
  - 138 `InternalRole` (`v0/roles.ts:286-288, 358-360`)
  - 139 `UserMissingPermissions` (`api/oauth/{clientId}/authorize/post.ts:46-49`)
  - 174 `OnlySearchOrFilter` (`v0/user.ts:118-121`)
- Recommendation: document at least the API-relevant codes. A full generated table would need to be built from `err.ts` + `errorCodes.ts`.

### 3.7 `endpoints/legacy/users.mdx` (`GET /api/users/current`): Needs update (minor)

- Method, path and scope `pii:basic` match. Strategies are `cookie`, `OAuth`, `support` (`api/users/current/get.ts:45-57`). The route isn't tagged `api` (not in Swagger), so "legacy" is a fair label.
- PII gating matches: email requires `pii:email`, phone requires `pii:phone`, the six address fields require `pii:address` (`get.ts:64-79`).
- Documented fields that match: `sub` (string), `id` (number), `bornAt`, `firstName`, `lastName`, `preferredName`, `username`, `newsletter`, `emailVerified`, `identityVerified`, `isVolunteer` (= has an `assignment` department, `get.ts:95-105`), `permissions`, `profilePictureUrl`, `isDepartmentLead`, `userRoles[{id:number,name}]` (`get.ts:118-134`).
- **Missing** response fields: `createdAt`, `updatedAt`, `organizationId` (`get.ts:16-36`), `child` (always `false`, `get.ts:128`), `isRoleManager` (`get.ts:129`), `supportAgent` (optional, `get.ts:126`).
- Docs-side: the example header says `/api/users/:id`, but the path is `/api/users/current` (line 113).

### 3.8 `endpoints/v0/users.mdx`: Needs update

**GET `/api/v0/users/{id}`** (`v0/user.ts:259-292`). Method, path and scope `user:read` match. The docs call the path parameter `{userId}`; master calls it `{id}` (cosmetic).

| Field | Docs | Master (`v0/user.ts:85-108`) |
| --- | --- | --- |
| `address.*` | `addressCity`, `addressCountry`, `addressLine1`, `addressLine2`, `addressState`, `addressZipcode` | **`city`, `country`, `line1`, `line2`, `state`, `zipcode`**, all nullable (`:98-105`, `:29-36`) |
| `phone` | type **boolean** | string or null, E.164 (`:93`) |
| `bornAt` | missing | `YYYY-MM-DD` string or null (`:94-97`) |
| `profilePictureURL` | missing | required string (`:106`) |
| `ownerUserId` | missing | string or null, required. Set for sub-accounts. (`:107`, `:38`) |
| `email`, `firstName`, `lastName`, `username` | non-null strings | nullable (`:87-91`) |

The description text (line 24) is copied from Search ("Search for users…").

**POST `/api/v0/users/search`** (`v0/user.ts:110-257`). Method, path and scope match.

| Item | Docs | Master |
| --- | --- | --- |
| `limit` | 1–100, default 100 | **1–1000, default 1000** (`:237-243`) |
| `filter` | `roleId` only | `roleId`, **`email`** (valid email), **`search`** (free text), **`ownerUserId`** (`:244-251`). `search` can't be combined with others: logic error 174 (`:118-121`). With `search`, `nextPage` is a page counter, not an id cursor (`:123-151`). |
| `hasMore` | missing | required boolean (`:210`) |
| `nextPage` when no more | example shows `null` | omitted (`:197`) |
| `data[]` | same field drift as GET | `userModel` (`:212`) |

**Not covered:** POST `/api/v0/users` (create user, scope `user:create`, `v0/user.ts:301-467`). Body fields: `username` (required); `firstName`, `lastName`, `preferredName`, `bornAt`, `phone` (E.164), `address*`, `newsletter`, `email`, `id` (reserved-range numeric string), `password`, `reason` (min 10, audited), `sendEmail` (default false). Returns `{id}`. A duplicate unique field returns a validation error of type `custom.unique` (`:385-397`). An `id` above the org's last id returns `number.max` (`:313-339`).

Docs-side: "first and ast name" typo (lines 39, 144).

### 3.9 `endpoints/v0/roles.mdx`: Needs update

| Endpoint | Method/path/scope | Mismatches |
| --- | --- | --- |
| `GET /api/v0/roles` (`v0/roles.ts:34-89`) | match | Response lacks `hasMore` (always `false`, `:47-50, 62`). Example `"nextPage": null`, but master omits it. Not paginated. |
| `GET /api/v0/users/{userId}/roles` (`:177-256`) | match | Response lacks `hasMore` (`:218`). `scope` values are `convention` or `global` (`:227`); the docs give none. Expired grants are excluded (`:191`). |
| `PUT /api/v0/users/{userId}/roles/{roleId}` (`:258-333`) | match | Body `scope` is **optional**. Anything but `global` means convention (`:283, 318-322`); the docs present it as required. Already has the role: logic error 10 (`:274-276`). Internal role: logic error 138 (`:286-288`). Returns an empty body (null). |
| `DELETE /api/v0/users/{userId}/roles/{roleId}` (`:335-415`) | match | 404 `resource` if the user lacks the role (`:347-349`). Logic error 138 for automation-managed roles (`:357-360, 392-408`). Neither is documented. |
| **Not covered**: `POST /api/v0/roles/{roleId}/users` (`:91-175`) | scope `user:read` | Paginated list of `{userId}` holding the role (convention or global, unexpired). Body: `nextPage`, `limit` 1–1000 (default 1000). |

Docs-side: the RestList anchor `'list roles'` (line 14) has a space, so it doesn't match slug `list-roles`. Attribute ids `su-resp-data` and `su-resp-id` repeat across endpoints.

### 3.10 `endpoints/v0/registration.mdx` + `_registrationModel.mdx`: Needs update

**GET `/api/v0/users/{id}/registration`** (`v0/registration.ts:298-348`). Method, path and scope match. Not documented:
- 404 `resource` if the user has no registration (`:308-310`).
- Users can read their own registration without the scope (`grantOwnerScope`, `:331-334`).
- Docs-side: the model is placed under an `<h4>Request</h4>` heading (line 33); it is the response.

**POST `/api/v0/registration/search`** (`:350-439`). Method, path and scope match.

| Item | Docs | Master |
| --- | --- | --- |
| `limit` | 1–100, default 100 | matches (`:426`) |
| `filter.userIds` | type **number** ("The ID of the user") | **array of numeric strings**, max 100 (`:428-432`) |
| `filter.paidProductId` | missing | numeric string. Only registrations paid with that product (`:433, 369-378`). |
| `hasMore` | missing | required (`:400`) |
| `data` type | "Array of User" | Array of Registration (`:402`) |

**Registration model** (`:265-296` vs `_registrationModel.mdx`):

| Field | Docs | Master |
| --- | --- | --- |
| `uuid` | missing | required string (`:266`) |
| `badgeId` | missing | required integer (`:270`) |
| `badgeName` | string | string, may be `""` (`:271`) |
| `badgePrinted` | missing | string or null (`:272, 240`) |
| `order` | missing | `{orderId, orderItemId}`. Present only when paid. (`:277-280, 241-246`) |
| `productDisplayName` | string | nullable (`:275`) |
| `options[].id` | missing | present (`:290-295`; `v0/util.ts:91-96`) |
| `options[].type` values | select, multi, text, number | plus address, currency, file, phone (`src/shared/options/index.ts:47-48`) |
| `user.profilePictureURL` | missing | required (`v0/util.ts:59`) |
| `user.email` etc. | non-null | nullable (`v0/util.ts:53-58`) |

Docs-side: the options description says "provided by the volunteer" (copy-paste). Attribute id `ruvr-usr-id` is used for both `flags[].id` and `user.id`.

### 3.11 `endpoints/v0/volunteers.mdx` + `_volunteerModel.mdx`: Needs update

| Endpoint | Method/path/scope | Mismatches |
| --- | --- | --- |
| `POST /api/v0/volunteers/search` (`v0/volunteers.ts:174-243`) | match; limit 1–100 default 100 matches (`:238`) | The Response section renders the bare model. The real response is `{hasMore, nextPage?, data: Volunteer[]}` (`:216-220`), so `hasMore` and `data` are undocumented. |
| `GET /api/v0/users/{id}/volunteer` (`:122-172`) | match | 404 if no application (`:129-131`). Own record readable without the scope (`:155-158`). Hidden departments included (`showHidden`, `:126`). |
| `GET /api/v0/volunteers/departments` (`:245-313`) | match; bare array matches | The `name` and `email` attribute descriptions say "The date the volunteer record was created/last updated" (`volunteers.mdx:167-172`). `leads[]` lack `profilePictureURL`. Hidden departments included (`:301`). |

**Volunteer model** (`:92-120` vs `_volunteerModel.mdx`):
- `user.isStaff` (required boolean) is missing (`:116-118`).
- `user.profilePictureURL` is missing.
- `options[].id` is missing (`v0/util.ts:65`); option types are incomplete as in §3.10.
- `contactMethods[].isPrimary` is **present only when true** (`:79`), but the docs show it as always present.
- `departments[].states` values match (`:109-112`).

### 3.12 `endpoints/v0/dealers.mdx`: Needs update (closest to master)

**POST `/api/v0/dealers/search`** (`v0/dealer.ts:78-253`). Method, path and scope `vendor:read` match.

| Item | Docs | Master |
| --- | --- | --- |
| `limit` | 1–100, default 100 | **1–1000**, default 100 (`:240`) |
| `filter` | shown as required | optional object. `userIds` is required inside it (`:241-248`). |
| `filter.userIds` effect | "IDs of the users to filter by" | **Ignored.** The handler only reads `nextPage` and `limit` (`:80`), and the query has no user filter (`:86-96`). This is a master bug, or the docs should drop it. |
| `email` | optional | required string (`:209`) |
| `addressLine1/City/Zipcode/State/Country` | non-null strings | **nullable**, required (`:210-215`) |
| `user.phone` | type boolean | string or null |
| `user.profilePictureURL` | missing | required (`:189` → `v0/util.ts:59`) |
| `applications[].status` | no values | `approved`, `pending`, `rejected`, `waitlisted` (`:21`; schema accepts any string, `:197`) |
| `tableType.paid` | "paid for" | `true` iff the application has a paid order item (`:159`) |
| option `type` values | 4 or 6 values | 8 values (see §2) |
| `hasMore` | documented | matches (`:182`) |

Docs-side: the example header says `/api/v0/users/search` (line 425). The example JSON is invalid (missing comma after `"id": "12"`, line 481) and shows `"nextPage": null`.

### 3.13 Docs-wide hygiene (not master-related)

- Examples use host `reg.cces.dev` and contain trailing commas (invalid JSON).
- Pages use `ExampleBox`, while CLAUDE.md prescribes `EndpointRequest`/`EndpointResponse`.
- Attribute ids aren't unique per page in roles, registration and volunteers.

---

## 4. Master API endpoints the docs don't cover

**How public vs internal was decided:**
1. **Public** = tagged `api` (published by hapi-swagger, enforced by `rv.ts:113-154`).
2. **De-facto external** = accepts the `OAuth` strategy but isn't tagged `api`. These are used by bearer-token clients such as QuikTicket devices.
3. **Internal** = default `cookie`/`support` strategies only (SPA routes). Excluded except where an OAuth flow depends on them.

### 4.1 Public (`api`-tagged), not documented (8 of 20)

| Method | Path | Scope | Evidence |
| --- | --- | --- | --- |
| POST | `/api/v0/users` | `user:create` | `v0/user.ts:301-467` |
| POST | `/api/v0/roles/{roleId}/users` | `user:read` | `v0/roles.ts:91-175` |
| POST | `/api/v0/users/notes/search` | `user:note:read` | `v0/userNotes.ts:26-130` |
| POST | `/api/v0/orders/search` | `order:view` | `v0/orders.ts:108-331` |
| DELETE | `/api/v0/orders/items/{orderItemId}` | `order:manage` | `v0/orders.ts:333-404` |
| POST | `/api/v0/orders/items/{orderItemId}/revoke` | `order:manage` | `v0/orders.ts:406-485` |
| POST | `/api/v0/vouchers/search` | `order:view` | `v0/vouchers.ts:41-176` |
| GET | `/.well-known/jwks.json` | none | `api/signing.ts:14-45` |

Master quirks that docs written for these endpoints should either avoid copying or report as master bugs:
- `users/notes/search` validates `filter.ids` but ignores it (`v0/userNotes.ts:28, 118-125`). Its response schema types `id`, `userId` and `authorId` as numbers, but the handler returns strings (`:90-92` vs `:59-61`).
- `vouchers/search` with `voucherIds` skips cursor pagination (`v0/vouchers.ts:51-60`).
- `revoke` documents 201 in Swagger but returns null (empty body) (`v0/orders.ts:464` vs `:434`).

### 4.2 OAuth-reachable, not in Swagger, not documented

| Method | Path | Scope(s) | Strategies | Evidence |
| --- | --- | --- | --- | --- |
| GET | `/api/v0/export/sqlite` | `system:export:sqlite` (service) | cookie, OAuth, support | `v0/export.ts:793-807` |
| GET | `/api/users/{id}/registration` | `registration:read` | cookie, OAuth, support | `api/users/{userId}/registration/get.ts:110-130` |
| GET | `/api/users/{id}/registration/emergencycontacts` | `admin:read:emergencycontacts` or `con:read` | cookie, OAuth, support | `.../emergencycontacts/get.ts:47-60` |
| GET | `/api/products/{id}/tickets` | `product:read` or `admin:ticket:read` | cookie, OAuth, support | `api/tickets.ts:29-42` |
| GET | `/api/tickets/{id}` | `registration:read` | cookie, OAuth, support | `api/tickets.ts:73-95` |
| PATCH | `/api/tickets/{id}/scan` | `admin:ticket:scan` | OAuth | `api/tickets.ts:252-273` |
| GET | `/api/users/{id}/tickets` | `order:view` | OAuth | `api/tickets.ts:313-326` |
| GET | `/api/tickets/events` | `admin:ticket:scan` or `admin:ticket:read` | OAuth | `api/tickets.ts:348-359` |
| GET | `/api/tickets/events/{productId}/invalidated` | `product:read` or `admin:ticket:*` | cookie, OAuth, support | `api/tickets.ts:367-383` |
| GET | `/api/tickets/events/{productId}/all` | `product:read` or `admin:ticket:read` | cookie, OAuth, support | `api/tickets.ts:391-407` |
| GET | `/api/devices/{deviceId}` | any authenticated | cookie, OAuth | `api/devices.ts:105-117` |
| PUT | `/api/devices` | `admin:ticket:scan`, `admin:ticket:read` or `system:devices:manage` | OAuth | `api/devices.ts:140-160` |

These are the endpoints the documented OBO scopes `admin:ticket:*` and `con:read` actually unlock. Whether they're meant to be public is unverified; the absence of the `api` tag suggests not.

### 4.3 OAuth flow and verification endpoints not documented

- PKCE (`code_challenge`/`code_verifier`), HTTP Basic client auth, and `error=access_denied` (see §3.3).
- `GET /api/webhooks/key` (no auth): the active signing JWK (`api/webhooks.ts:196-200`). `GET /api/nfc/key` (no auth): the NFC public JWK (`:202-206`).
- RP-initiated logout via `/oauth/logout` → `GET /api/users/logout?client_id&access_token&next&redirect_token` (`api/users/logout/get.ts:48-150`).
- Internal, session-only and correctly excluded: consent backend `GET /api/oauth/{id}` and `POST /api/oauth/{id}/authorize` (`api/oauth/{clientId}/get.ts`, `authorize/post.ts`, both default strategies); app management `GET/POST /api/oauth`, `PATCH/DELETE /api/oauth/{id}`, `GET /api/oauth/permissions` (`oauth:manage`, `api/oauth.ts`); webhook management `/api/webhooks*` (`webhook:manage`, `api/webhooks.ts`).

### 4.4 Webhooks (feature undocumented on main)

Master's webhooks:
- **15 event types** (`svc/WebHooksService.ts:12-28`).
- Body `{data, event}` with a signed JWT bearer, described in §6.1.
- Retries: 5 attempts with exponential back-off from 500 ms (`:126-127, 237-252`).
- Managed in Housekeeping › Developers › Webhooks (`src/frontend/containers/housekeeping/developers/index.tsx:25-32`).

No page on `main` covers this; only the unmerged `docs/webhooks` branch does.

---

## 5. Can master produce an OpenAPI spec?

- **Yes, at runtime only.** hapi-swagger 17.3.2 serves Swagger **2.0** at `GET /api/swagger.json` and the UI at `/api/docs` whenever `makeServer` runs with `swagger: true` (the default) (`server.ts:66-75, 427-495`).
- It includes exactly the 20 `api`-tagged routes, with operation ids from each route's `plugins['hapi-swagger'].id` (e.g. `searchUsers`, `getUser`), summaries from `description`, and notes from `apiNotes()`.
- **No export script exists** in master (`package.json` scripts, `build/`) or in the `feat/openapi-docs` branch. Today the only way to get the file is to fetch `/api/swagger.json` from a running instance; the branch's copy has `"host": "demo.concat.app"`, so it was fetched from demo.
- An offline export (build the server with `makeServer(container)` and `server.inject('/api/swagger.json')`) is plausible but **unverified**: `makeServer` needs the full injectables container (`server.ts:72-97`).
- Swagger 2.0 limits:
  - `.allow(null)` isn't expressed (the branch spec has no `x-nullable`), so nullability is lost.
  - Hand-written 400 examples in master render `logic` as an object with `code` typed `string` (e.g. `v0/orders.ts:465-477`).

---

## 6. Unmerged branches

### 6.1 `origin/docs/webhooks` (2022-08-24/25, Adam Walker): adds `docs/api/webhooks/{about,events,validating}.md`

The diff also changes one typo in `v0/users.mdx` and a margin in `src/components/attribute.module.scss`.

**`validating.md` vs master:**

| Branch claim | Master | Evidence |
| --- | --- | --- |
| `int` = base64 SHA-256 of the **`data` property** | SHA-256 (base64) of the **entire body** `JSON.stringify({data, event})` | `svc/WebHooksService.ts:254-256, 263-274` |
| `aud` = "The URL of the webhook" | **host** of the webhook URL (`new URL(url).host`) | `:277` |
| `iss` = always `concat.app` | the configured `domain` (`new SigningService(config.domain, …)`). Default config value is `localhost:8081`; the production value is unverified. | `src/backend/app/providers.ts:953`; `config/default.js:66` |
| `sub` = `webhook`, `exp` = 120 s | correct | `svc/WebHooksService.ts:278-279` |
| Key at `/api/webhooks/key` is "a PEM-encoded X.509 RSA public key" | `/api/webhooks/key` returns a **JWK** (JSON). The full set is at `/.well-known/jwks.json`, and the UI tells integrators to fetch and cache that. | `api/webhooks.ts:196-200`; `api/signing.ts:44`; `developers/webhooks/KeyView.tsx:31-36` |
| (implied RS512 from code) | `sign()` overrides the requested `RS512` with the active key's `alg` (default RS256) and sets `kid` | `svc/SigningService.ts:110-119` |

**`events.md` vs master:**
- Branch documents 7 events. Master has 15 (`svc/WebHooksService.ts:12-28`). Missing from the branch:
  - `test`: `{test:123}`, `api/webhooks.ts:225-230`
  - `order-complete`: `{orderId, status, user{id,email}, orderItems, breakdown, conventionId}`, `svc/OrderService.ts:1180-1193`
  - `order-canceled`: `{orderId:{id,conventionId,organizationId}, automated, user, orderItems, conventionId}`, `:1120-1134`
  - `dealer-upsert`, `application-upsert`, `application-deleted`: `{conventionId, user, dealer{id,name}, application?{id,status,areaId,paidOrderItemId}}`, `svc/Dealer.ts:1305-1350`
  - `nfc-badge-scanned`: `{cardUUID, conventionId, nfcTokenId, scannedByUserId, userId}`, `api/badge/nfc.ts:241-251`
  - `registration-created`: declared at `:19` but **never dispatched** in master. Only `registration-updated` fires (`svc/ConRegistration.webhook.ts:55-67`).
- Volunteer events: the branch documents `availableBeforeCon`, `anythingElse`, `previousConExperience`, `previousOtherExperience` and `eventsCanNotMiss`. **None of these exist** on master's `Volunteer` model (`src/backend/app/db/models/Volunteer.ts:10-21, 28-45`: `id`, `contactMethod`, `contactMethods`, `conventionId`, `organizationId`, `userId`, timestamps). The payload is the raw row plus `user` plus an optional `department` (`svc/VolunteerService.ts:1236-1276`).
- `volunteer-deleted`: the row is hard-deleted before dispatch (`svc/VolunteerService.ts:433-450`; `Volunteer` isn't paranoid), so the payload is just `{volunteer:{id}}` (`:1268`), not the full record the branch shows.
- `registration-updated`: master also sends `registration.conventionId`, `user.organizationId` and top-level `conventionId` (`svc/ConRegistration.webhook.ts:33-66`; props `svc/WebHooksService.ts:41-50`).
- `user-updated`: the fields match (`svc/Register.ts:555-567`), but the example's `"event"` is `registration-updated`. Master dispatches it without a convention id, so convention-scoped webhooks never receive it (`:565-567` vs `svc/WebHooksService.ts:202-205`).
- ID types: the branch shows string ids. Master sends raw model values (numbers in TypeScript; serialized type unverified).
- `user-agent: ConCat/AxiosHTTPClient` is correct (`svc/HTTPClient.ts:185`). The "Test button in Housekeeping" exists (`api/webhooks.ts:208-222`).
- Markup: lowercase `<attribute>`, `<parentAttribute>`, `<splitColumn>`, `<exampleBox>` and `<link>` are MDX 2 era tags that won't render under the current mapper (`src/theme/MDXComponents.tsx`). Example JSON has trailing commas.

**Verdict: reuse after edits (substantial).**
- Keep `about.md`, `_category_.json` and the three-page split.
- Rewrite `validating.md` with the six corrections above.
- Rebuild `events.md` from master's payload builders (most existing payload content is wrong); add the 8 missing events, or document `registration-created` as reserved.
- Convert to PascalCase components.
- Drop the stale `attribute.module.scss` margin change (main still uses `1.3rem`). Note the "first and **ast** name" typo the branch fixes is still on main in `v0/users.mdx:39,144` and `v0/dealers.mdx:169`.

### 6.2 `origin/feat/NFCDocs` (2026-04-27, Nican)

- Three commits: "fix(deps): Update docusaurus", "Force node", "Update styling".
- Content: Docusaurus 2.4 → 3.9.2, React 17 → 18, MDX 1 → 3, Node `^24.10`, prism themes API, webpack override.
- `src/theme/MDXComponents.tsx` keys switched from lowercase to PascalCase, and every API page re-cased to match (`<attribute>` → `<Attribute>`, `<link>` → Markdown links).
- **No substantive content changes** (a whitespace-insensitive diff shows only tag casing and link syntax) and **no NFC documentation**, despite the name.
- **Already merged.** `git diff origin/feat/NFCDocs a72b818` is empty: the branch was squash-merged as `a72b818 fix(deps): Update docusaurus (#69)` on 2026-04-29. Main has since moved to Docusaurus 3.10 / React 19 / Node 26.
- It missed `gettingstarted/oauth.md`, which still uses lowercase tags on main (§3.3).

**Verdict: discard.** Nothing is left to merge; the branch is fully contained in main. Any further API content work should start from main.

### 6.3 `origin/feat/openapi-docs` (2026-10-29, Nican, co-authored by Cursor)

What it does:
- Adds `static/openapi/concat.json` (Swagger 2.0, 2,796 lines, `host: demo.concat.app`).
- Adds 71 generated files under `docs/api-reference/`: `*.api.mdx`, `*.RequestSchema.json`, `*.StatusCodes.json`, `*.ParamsDetails.json`, `concat-api-documentation.info.mdx`, `sidebar.ts`.
- Deletes all hand-written v0 pages and the `v0/_category_.json`.

**Spec vs master routes:**
- The spec has 20 operations, the same method+path set as master's 20 `api`-tagged routes (19 `/api/v0` + `/.well-known/jwks.json`). No extras, nothing missing.
- Request bodies match master's Joi schemas, e.g. users/search limit 1–1000 with filters `roleId`/`email`/`search`/`ownerUserId`, dealers 1–1000/100, the registration and orders filters, and `stockReturn`.
- The response models include `profilePictureURL`, `ownerUserId`, `uuid` and similar fields. Shape coverage is far better than the hand-written pages.
- **The spec predates master's documentation pass** (#3373 f48ec5569 and `apiNotes`, both merged 2026-10-29):
  - operationIds are hapi-swagger defaults (`postApiV0UsersSearch`) instead of master's ids (`searchUsers`), and those become the sidebar labels.
  - It has no `summary` or description text, only "### Authentication / requires the following scopes", which is also emitted as each page's meta description.
  - It has no top-level `tags` with descriptions.
  - `securityDefinitions` has 7 scopes; master has 10 (`server.ts:471-482`; missing `user:create`, `user:note:read`, `order:manage`).
  - The jwks summary text differs from master's "Get signing keys" (`api/signing.ts:28`).
- Inherited master and Swagger 2.0 inaccuracies the generated pages would publish:
  - nullability is lost;
  - the 400 examples show `logic` as an object with string `code`;
  - revoke shows 201 but returns an empty body;
  - userNotes ids are typed number but are strings.

**Generation and plugin:**
- The branch ships generated output only: no generator script, no config.
- The file layout (`.api.mdx` with `api:` deflated front matter, `info_path`, `hide_send_button`, `@theme/ApiExplorer/MethodEndpoint`, `@theme/ParamsDetails`, `@theme/RequestSchema`, `@theme/StatusCodes`, `@theme/ApiLogo`, generated `sidebar.ts`) is the output of **`docusaurus-plugin-openapi-docs` + `docusaurus-theme-openapi-docs`** (PaloAltoNetworks), 4.x. The exact version is unverified because nothing pins it.
- **The branch doesn't add either package** (`package.json` unchanged; `package-lock.json` contains no "openapi"). It also doesn't configure the plugin, `themes`, or `docItemComponent: '@theme/ApiItem'` in `docusaurus.config.js`. `npm run build` is therefore expected to fail on unresolved `@theme/ApiExplorer/*` imports. Not run, per the read-only constraint.
- The output sits in `docs/api-reference/`, outside the autogenerated `apiSidebar` (`sidebars.js`: `dirName: 'api'`). The generated `sidebar.ts` (`apisidebar`) isn't wired in. Merged as is, the v0 reference would vanish from the API sidebar.
- Fit with this repo (Docusaurus 3.10.2, React 19.3, Node 26):
  - The plugin family targets Docusaurus 3.x, and it evidently accepted Swagger 2.0 input (it generated these pages from it).
  - **React 19 and Docusaurus 3.10 peer-dependency compatibility is unverified.** Check the theme's `peerDependencies` before adopting.
  - Prettier is unaffected (`.prettierignore` covers `docs/` and `static/`). `npm run typecheck` doesn't cover `docs/`.

**Verdict: reuse after edits.** The direction (generated reference from master's own Swagger) is right, and its endpoint set matches master. Required edits:
1. Regenerate `concat.json` from master's `/api/swagger.json`. Ideally add a reproducible export script (fetch from an instance, or a headless `makeServer` + `inject` in the ConCat repo) instead of a hand-downloaded demo snapshot.
2. Add and pin `docusaurus-plugin-openapi-docs` and `docusaurus-theme-openapi-docs` after confirming React 19 / Docusaurus 3.10 support. Configure the plugin (`specPath`, `outputDir`, `sidebarOptions`), `themes`, and `docItemComponent: '@theme/ApiItem'`.
3. Generate into `docs/api/…` (or splice the generated sidebar into `apiSidebar`) so the reference stays in the API sidebar. Keep the hand-written intro, getting-started/OAuth/scopes, errors and legacy pages, and fix them per §3.
4. Decide whether generated files are committed or produced at build time.
5. Raise the master-side spec defects (nullability, error example shape, 201 vs 204, userNotes id types, ignored `filter` in dealers and userNotes) with the platform team, or the generated docs will repeat them.

---

## 7. Most important findings

1. **Master's public API is 20 routes** (19 `/api/v0` + JWKS), marked by the `api` tag and served as Swagger 2.0 at `/api/swagger.json`. The docs cover 12 of them; 8 are missing (create user, role members, user notes, orders search, remove/revoke order item, vouchers, JWKS).
2. **`scopes.md` lists 4 of 11 service scopes** (missing `user:create`, `user:note:read`, `vendor:read`, `order:view`, `order:manage`, `system:export:sqlite`, `user:note:categories:manage`) and 8 of 9 OBO scopes (missing `dashboard:read`). The page that the `vendor:read`-only dealers endpoint depends on doesn't mention `vendor:read`.
3. **OAuth doc errors that break clients:**
   - the token response `scope` is an array, not a space-separated string;
   - the default access-token life is 900 s, not 3600;
   - PKCE and HTTP Basic client auth are supported but undocumented;
   - the redirect check is origin-only.
   - `oauth.md` also doesn't render its attribute and example components because of lowercase MDX tags.
4. **Wrong field names and types in v0 user models:**
   - `address.addressCity` and the other address fields are really `address.city`, `country`, `line1`, `line2`, `state` and `zipcode`;
   - `phone` is typed boolean;
   - `profilePictureURL`, `bornAt` and `ownerUserId` are missing;
   - nullability is never mentioned;
   - `hasMore` is missing from most paginated responses, and `nextPage` is shown as `null` instead of omitted.
5. **Wrong limits and filters:**
   - users/search allows up to 1000 (docs: 100) and has 3 undocumented filters;
   - registration `userIds` is an array of strings, not a number, and `paidProductId` is missing;
   - dealers `filter.userIds` is validated but **ignored by master** (`v0/dealer.ts:80, 86-96`), as is userNotes `filter.ids`.
6. **Error docs are structurally wrong:** `logic` is an array, access errors have a `code`, `serviceUnavailable` exists, and only 7 of 238 logic codes are listed, none of them the codes the API actually returns (112, 174, 10, 138, 79, 49, 31, 116, 139).
7. **Possible master security gap:** `admin:ticket:read` and `admin:ticket:scan` are OBO-grantable with **no** `requiredPermission` in master's seed, so the consent check doesn't require the user to hold an admin permission (only `dashboard:read` is gated). The docs claim they require administrator permission. Production DB state is unverified; raise this with the platform team.
8. **`docs/webhooks` branch: the validation guide is wrong in ways that make verification fail.** The hash covers the whole body, not `data`; `aud` is the host, not the URL; the key is a JWK, not PEM; and `iss` is config-driven. 8 of 15 events and all non-volunteer payloads are missing, and the volunteer fields are from a 2022 schema.
9. **`feat/NFCDocs` is already in main** (identical to `a72b818`, PR #69): discard.
10. **`feat/openapi-docs`** has the right endpoint set, but it uses a stale demo snapshot of the spec (pre-#3373: no ids, summaries or tags, and 7 of 10 scopes). It doesn't install or configure `docusaurus-plugin-openapi-docs` and its theme, and it writes outside the API sidebar. Reuse it after regenerating from master and wiring up the plugin; React 19 compatibility is unverified.
