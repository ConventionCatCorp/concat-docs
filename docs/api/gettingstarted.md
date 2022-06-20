---
sidebar_position: 2
displayed_sidebar: apiSidebar
---

# Getting Started

:::info
The ConCat APIs are in **early access**, are subject to change, and are available to event customers and select external partners only.

If you're interested in integrating with ConCat, please reach out to **developers@concat.systems** with your use-case.
:::

## Registering as a Developer

Developer registration is by invitation only. To register as a developer, please reach out to **developers@concat.systems** with the following:

* Your name
* Your company name, website, and contact information
* A display name for your application
* A short description of your use-case
* A list of our event customers you are interested in, or are already working with *(optional)*

Upon approval, you will be given a unique API ID and secret key. You can use these to authenticate your requests to the ConCat APIs.

## Authenticating Requests

All requests to the ConCat APIs **must** be done through a HTTPS connection, with a minimum TLS protocol of v1.2 or newer. ConCat uses a HTTP Authorization header and event ID to authenticate your request. The headers are in the format of:

```
Authorization: Bearer <API ID>:<API Secret>
EventId: <Event ID>
```

:::info
The above headers **should** always be included in your request, even if the request is not authenticated. This helps us prevent abuse of the APIs, and collect usage statistics to improve the service.
:::

### Authorizing an Event Organization
Each event organization must explicitly approve your integration for access to their events. This can be done by having your event contact reach out to **support@concat.systems** with your assigned API ID.

Once we've assigned your integration, you'll receive an email with the event organization's unique ID. You can use this to retrieve a list of all events by that organization for subsequent requests.

### Handling Revocations
In the event that an event organization stop using your application, you'll receive a revocation email and will no longer be able to access their events. You **must** delete all associated event data stored by your application within 30 days of receiving the revocation email.

## Revoking Access
If there's no activity by your integration for a year or more, we reserve the right to revoke your API credentials to prevent abuse. You can reach back out to us to re-activate at any time.

If you're no longer planning to use the ConCat APIs, we ask that you reach out to us to let us know. We'll revoke your API credentials and remove your integration from our systems.
