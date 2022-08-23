---
sidebar_position: 1
displayed_sidebar: apiSidebar
---

# Getting Started

:::caution
The ConCat APIs are in **early access**, are subject to change, and are available to event customers and select external partners only.

If you're interested in integrating with ConCat, please reach out to **developers@concat.systems** with your use-case.
:::

There are two ways to integrate with the ConCat APIs: On Behalf Of (OBO) a user, or as a service. Service-level integration is the preferred method and will allow modification of data in the future, whereas OBO integration will remain read-only and intended for primarily authentication purposes.

## Which method should I use?

#### On Behalf Of (OBO) a user
The OBO method is intended primarily for authenticating a user to a third-party service and providing metadata about the user, such as their name, email address, and any roles or permissions they have.

OBO requires the service to redirect the user to an authentication page displaying the requested permission scopes, a basic description of the service, and the ability to grant or deny access.

#### As a service
The as a service method is intended for allowing a third-party service to retrieve and modify data within the ConCat platform. This is useful for micro-services that need to perform automated actions based on webhooks, or that need to perform actions that require elevated permissions.

Permissions for a service integration are granted by an event customer at the time the integration is created. There is no additional approval or authentication step. If your service requires additional permissions, you will need to contact the event customer to request them.

## Registering as a developer

Developer registration is by invitation only. To register as a developer, please reach out to **developers@concat.systems** with the following:

* Your name
* Your company name, website, and contact information
* A display name for your application
* A short description of your use-case
* A list of our event customers you are interested in, or are already working with *(optional)*

Upon approval, you will be given a unique API ID and secret key. You can use these to authenticate your requests to the ConCat APIs in both OBO and as a service methods.

## Authenticating requests

All requests to the ConCat APIs **must** be done through a HTTPS connection, with a minimum TLS protocol of v1.2 or newer. A time-limited authentication Bearer token must be obtained and provided in the Authorization header of each request.

:::info
The Authorization header should always be provided even if the request is not authenticated. This helps us prevent abuse of the APIs, and collect usage statistics to improve the service.
:::

## Revoking access
If there's no activity by your integration for a year or more, we reserve the right to revoke your API credentials to prevent abuse. You can reach back out to us to re-activate at any time.

If you're no longer planning to use the ConCat APIs, we ask that you reach out to us to let us know. We'll revoke your API credentials and remove your integration from our systems.

### Handling revocations
In the event your integration is revoked, you'll receive a revocation email and will no longer be able to authenticate to the APIs. You **must** delete all associated event data stored by your application within 30 days of receiving the revocation email.