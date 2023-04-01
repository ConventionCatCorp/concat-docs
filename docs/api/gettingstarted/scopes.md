---
sidebar_position: 3
displayed_sidebar: apiSidebar
---

# Scopes

Scopes are used to limit the amount of information that is returned from the API. The scope of a given token can be decreased at any time, but it cannot be increased and any removed scopes cannot be recovered without re-authenticating.

## Service integration scopes

Service integrations are granted a set of scopes at the time of creation. Approved scopes cannot be changed without updating the integration in Housekeeping. The following scopes are available for use with service integrations:

| Scope | Description |
| --- | --- |
| `user:read` | Read-only access to user data |
| `user:roles:update` | Access to updating user roles data |
| `registration:read` | Read-only access to registration data |
| `volunteer:read` | Read-only access to volunteer data |

## OBO scopes

On Behalf Of (OBO) integrations are granted a set of scopes at the time of authentication by the end-user. Scopes can be dropped when they are no longer required by passing a subset of approved scopes in the <link to="/docs/api/gettingstarted/oauth#step-4-refreshing-the-token">token refresh flow</link>. Additional scopes can be requested by re-authenticating the end-user.

The following scopes are available for use with OBO integrations:

| Scope | Description | Additional Info |
| --- | --- | --- |
| `pii:basic` | Read-only access to user's basic account data | |
| `pii:email` | Read-only access to user's email address | |
| `pii:phone` | Read-only access to user's phone number | |
| `pii:address` | Read-only access to user's address | |
| `pii:finance:read` | Read-only access to user's order history | |
| `con:read` | Read-only access to user's attendee registration | |
| `admin:ticket:read` | Read-only access to all QuikTicket™ tickets | Requires administrator permission |
| `admin:ticket:scan` | Mark a QuikTicket™ ticket as scanned | Requires administrator permission |