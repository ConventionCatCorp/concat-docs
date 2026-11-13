---
sidebar_position: 1
displayed_sidebar: apiSidebar
---

# About Webhooks

Webhooks allow you to set up external applications to receive notifications when certain events happen. When a webhook event is triggered, ConCat sends an HTTP `POST` request to the URL of each webhook that listens for that event.

These webhook events can be used to trigger automated actions in third-party applications, such as updating access control, mailing lists, and more.

## Creating a webhook

An event customer creates webhooks in **Housekeeping › System › Developers**, on the **Webhooks** tab, which needs the `webhook:manage` permission. Each webhook has a name, a URL, and the [events](/docs/api/webhooks/events) it listens for. See [OAuth applications and webhooks](/docs/guides/technical/developers) for the steps.

- The URL must use `https://`.
- Webhooks belong to the organization. By default a webhook fires for events in every convention of the organization; a webhook set to **Only fire for this convention** fires only for events in the convention it was created in.
- A webhook can't be edited. To change one, delete it and create it again.

## The request

Each request is a `POST` with a JSON body and these headers:

| Header | Value |
| --- | --- |
| `authorization` | `Bearer` followed by a JWT signed by ConCat. See [Validating Payloads](/docs/api/webhooks/validating). |
| `content-type` | `application/json; charset=utf-8` |
| `user-agent` | `ConCat/AxiosHTTPClient` |

The body has two properties:

```json
{
  "data": { },
  "event": "order-complete"
}
```

`event` is the name of the event, and `data` holds the event's payload. See [Events and Payloads](/docs/api/webhooks/events).

## Delivery and retries

ConCat sends webhook requests in the background, so the action that triggered an event doesn't wait for your server. Any response with a status below `400` counts as delivered. If your server returns `400` or higher, or can't be reached, ConCat tries again, up to **5 attempts** in all, waiting 1, 2, 4 and then 8 seconds between attempts. After the fifth failure the event is dropped. There is no delivery log in Housekeeping.

Respond quickly with a `2xx` status, and do any slow work after responding.

## Test event

When you set up a webhook, you can send a test event to verify that the webhook is working correctly by using the **Test** button in Housekeeping. The test sends the `test` event, with the data `{"test":123}`, to that webhook only, signed like every other request.
