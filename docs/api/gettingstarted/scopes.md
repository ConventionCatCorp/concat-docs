---
sidebar_position: 3
displayed_sidebar: apiSidebar
---

# Scopes

Scopes limit what a token can do. Each scope is either a **service integration** scope, which an event customer grants to an OAuth application, or an **On Behalf Of (OBO)** scope, which a user grants on the consent screen. No scope is both, and asking for one in the wrong flow returns an error. The scopes of a given token can be decreased at any time, but they cannot be increased, and removed scopes cannot be recovered without authorizing again.

When you request several scopes, separate them with spaces. Token responses return the granted scopes as an array.

## Service integration scopes

The event customer grants these to an OAuth application as its **Application Permissions** in **Housekeeping › System › Developers** (see [OAuth applications and webhooks](/docs/guides/technical/developers)), and can change them later. A token request with `grant_type=client_credentials` can ask for any subset of them. Asking for a scope the application hasn't been granted, or for an OBO scope, returns logic error `116` (`ApplicationNotGranted`).

| Scope | What it allows | Endpoints |
| --- | --- | --- |
| `user:read` | Read users, roles and who holds each role | [Search users](/docs/api/endpoints/v0/reference/search-users), [Get a user](/docs/api/endpoints/v0/reference/get-user), [List roles](/docs/api/endpoints/v0/reference/list-roles), [List users with a role](/docs/api/endpoints/v0/reference/list-role-users), [List a user's roles](/docs/api/endpoints/v0/reference/list-user-roles) |
| `user:create` | Create user accounts | [Create a user](/docs/api/endpoints/v0/reference/create-user) |
| `user:roles:update` | Grant roles to users and remove them | [Grant a role to a user](/docs/api/endpoints/v0/reference/grant-user-role), [Remove a role from a user](/docs/api/endpoints/v0/reference/remove-user-role) |
| `user:note:read` | Read the notes staff have written about users | [Search user notes](/docs/api/endpoints/v0/reference/search-user-notes) |
| `registration:read` | Read attendee registrations | [Search registrations](/docs/api/endpoints/v0/reference/search-registrations), [Get a user's registration](/docs/api/endpoints/v0/reference/get-user-registration) |
| `volunteer:read` | Read volunteer applications and departments | [Search volunteers](/docs/api/endpoints/v0/reference/search-volunteers), [Get a user's volunteer application](/docs/api/endpoints/v0/reference/get-user-volunteer), [List volunteer departments](/docs/api/endpoints/v0/reference/list-volunteer-departments) |
| `vendor:read` | Read dealers and their applications | [Search dealers](/docs/api/endpoints/v0/reference/search-dealers) |
| `order:view` | Read orders and vouchers | [Search orders](/docs/api/endpoints/v0/reference/search-orders), [Search vouchers](/docs/api/endpoints/v0/reference/search-vouchers) |
| `order:manage` | Remove items from unpaid orders, and revoke items in paid orders | [Remove an order item](/docs/api/endpoints/v0/reference/remove-order-item), [Revoke an order item](/docs/api/endpoints/v0/reference/revoke-order-item) |
| `system:export:sqlite` | Export the convention's statistics data as an SQLite file | `GET /api/v0/export/sqlite` (not in the endpoint reference) |
| `user:note:categories:manage` | Read and edit all user note categories | None: no endpoint accepts an OAuth token for this scope |

## OBO scopes

A user grants these on the consent screen, during the [authorization flow](/docs/api/gettingstarted/oauth#on-behalf-of-obo). Scopes can be dropped when they are no longer required by passing a subset of the granted scopes in the [token refresh flow](/docs/api/gettingstarted/oauth#step-4-refreshing-the-token). Additional scopes can be requested by sending the user through the authorization flow again. Requesting a service integration scope here returns logic error `31` (`OAuthInvalidScope`).

| Scope | What the consent screen says | Permission needed at consent |
| --- | --- | --- |
| `pii:basic` | Access your basic personal information | None |
| `pii:email` | Access your email address | None |
| `pii:phone` | Access your phone number | None |
| `pii:address` | Access your physical address | None |
| `pii:finance:read` | Access your order history | None |
| `con:read` | Access your convention registration | None |
| `admin:ticket:read` | Access all issued tickets | None (marked as an administrative permission) |
| `admin:ticket:scan` | Mark issued tickets as scanned | None (marked as an administrative permission) |
| `dashboard:read` | Allows accessing the statistics dashboard | The user must hold the `dashboard:read` permission |

`pii:basic` is the scope of the [Retrieve Current User](/docs/api/endpoints/legacy/users) endpoint. `pii:email`, `pii:phone` and `pii:address` add the user's email address, phone number and address to its response.

### Permission at consent time

When a scope needs a permission, a user who doesn't hold it can't grant the scope: the authorization request fails with logic error `139` (`UserMissingPermissions`), and the user sees an **Invalid Request** screen. By default, `dashboard:read` is the only scope that needs one.

Scopes whose names start with `admin:` are highlighted in red on the consent screen with the text *This is an administrative permission*, but they don't need a permission to be granted.
