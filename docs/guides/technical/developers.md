---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# OAuth applications and webhooks

Webhooks tell another system when something happens, such as an order completing. OAuth applications let it use the ConCat API, on its own or for an attendee who agrees.

:::info[In this guide]
The **Developers** page; creating a webhook; testing, verifying and deleting webhooks; creating an OAuth application; editing or deleting one; what attendees see when authorizing an app; logging out through an app.
:::

## The Developers page

<Sidenote title="Who can do this">
The **Webhooks** tab needs `webhook:manage`; the **OAuth Applications** tab needs `oauth:manage`. Either one shows **Developers** in the System menu.
</Sidenote>

**Housekeeping › System › Developers** has two tabs:

- **Webhooks**: addresses on your own server that ConCat sends a `POST` request to when a chosen event happens.
- **OAuth Applications**: ConCat API clients, each with an ID and a secret. For how developers use them, see [Obtaining a Bearer Token](/docs/api/gettingstarted/oauth) and [Scopes](/docs/api/gettingstarted/scopes).

Webhooks and applications belong to your organization, so every convention sees the same lists.

:::note[With only one of the permissions]
The page opens on **Webhooks**. If you can manage OAuth applications but not webhooks, that tab shows access denied: click **OAuth Applications**.
:::

## Create a webhook

A webhook listens for one or more of the events in Table 2.1.

<TableFigure title="Webhook events">

| Event | Sent when |
| --- | --- |
| `test` | You click **Test** on the webhook (section 3). |
| `volunteer-submitted` | A volunteer application is submitted. |
| `volunteer-updated` | A volunteer application changes. |
| `volunteer-assigned`, `volunteer-unassigned` | A volunteer is assigned to, or removed from, a department. |
| `volunteer-deleted` | A volunteer application is deleted. |
| `registration-created` | Never sent at present. <small>Use `registration-updated`.</small> |
| `registration-updated` | A registration is created or changes. |
| `user-updated` | A user's account details change. <small>Only sent to webhooks that fire for every convention.</small> |
| `order-complete`, `order-canceled` | An order is completed or canceled. |
| `dealer-upsert` | A dealer is created or changes. |
| `application-upsert`, `application-deleted` | A dealer application is created, changes or is deleted. |
| `nfc-badge-scanned` | An NFC badge is scanned. |

</TableFigure>

1. Go to **Housekeeping › System › Developers**.

   <Result>The page opens on the **Webhooks** tab, with **View Verification Key** at the top and **Create New** below the list.</Result>

2. Click **Create New**.

   <Result>The **Create Webhook** dialog opens.</Result>

3. Enter a **Name** and the receiving **URL**, and select one or more **Events** (hold Ctrl, or ⌘ on a Mac, for several). Tick **Only fire for this convention** to ignore your other conventions, then click **Create**.

   <Result>A **Webhook created!** message appears and the new webhook is listed.</Result>

:::caution[Watch out]
- The **URL** must start with `https://`. Any other address is refused.
- A webhook can't be edited. To change one, delete it and create it again.
:::

ConCat sends requests in the background and, if your server doesn't accept one, tries up to 5 times, waiting longer each time. Housekeeping has no delivery log.

## Test, verify and delete webhooks

<Sidenote title="Fires">
The **Fires** column shows a green tick when the webhook fires for the convention you're in, and a red cross when it doesn't. Hover over it for the reason.
</Sidenote>

1. In the webhook's row, click **Test** (Figure 3.1).

   <Result>ConCat sends a `test` event (`{"test":123}`) to the URL. If your server accepts it, **Success, see console for data** appears. If your server refuses it or can't be reached, an error message says so.</Result>

2. Click **View Verification Key**.

   <Result>A panel shows the public key, and says it can also be retrieved from `/.well-known/jwks.json`.</Result>

3. To remove a webhook, click **Delete** in its row.

   <Result>A **Webhook deleted** message appears and the row disappears.</Result>

<Figure
  src="/img/guides/technical/webhooks.webp"
  alt="The Webhooks tab: a View Verification Key button, then a table with one example webhook, Volunteer sync, its URL and two events, a green tick under Fires, and Delete and Test buttons."
  title="The Webhooks tab"
  markers={[
    { n: 1, x: 0.2, y: 2.6, w: 14.4, h: 19.8 },
    { n: 2, x: 66.8, y: 47.8, w: 2.3, h: 15 },
    { n: 3, x: 83.4, y: 47.8, w: 6, h: 19.8 },
    { n: 4, x: 89.2, y: 47.8, w: 4.6, h: 19.8 },
  ]}
>

1. **View Verification Key**.
2. **Fires**: a green tick means the webhook fires for this convention.
3. **Delete**, which acts at once.
4. **Test**.

</Figure>

:::caution[Watch out]
**Delete** doesn't ask for confirmation: the webhook is removed at once.
:::

:::info[Key idea]
Every request carries an `authorization: Bearer …` header holding a token signed by ConCat. Your server should check it against the verification key before trusting the request. The token expires after 120 seconds, its audience is your webhook's host name, and its `int` claim is the base64 SHA-256 hash of the whole request body. Fetch the key from `/.well-known/jwks.json` and keep it until verification fails.
:::

## Create an OAuth application

Each application has two kinds of permission:

- **Application Permissions**: used when the application calls the API on its own, outside a user's context (OAuth `client_credentials`). You tick them when you create it.
- **User scopes**: asked for when an attendee signs in through the application; the attendee agrees on the consent screen (section 6).

1. Go to **Housekeeping › System › Developers** and click the **OAuth Applications** tab.

   <Result>The address ends in `/housekeeping/system/developers/oauth`, and a **Create New** button sits below the list.</Result>

2. Click **Create New**.

   <Result>The **Create OAuth Application** dialog opens.</Result>

3. Enter a **Name** and **Description**. Under **Callback URIs**, type each address the application returns users to and click **+** after each. Tick the **Application Permissions** it needs, then click **Save**.

   <Result>An **Application created!** message appears, and a **New secret** dialog shows the **ID:** and **Secret:**.</Result>

4. Copy the **ID** and **Secret** somewhere safe, then click **Close**.

   <Result>The new application is listed with its ID in the **#** column.</Result>

:::caution[Watch out]
ConCat stores only a hash of the secret, so it can't show it again. If you lose it, delete the application and create a new one, which gets a new ID.
:::

:::note[Callback URIs]
ConCat checks only the *origin* of the return address (its scheme, host and port), not its path. Addresses must start with `http://` or `https://`.
:::

## Edit or delete an OAuth application

1. In the application's row, click **Edit**.

   <Result>The **Edit OAuth Application** dialog opens with its current details.</Result>

2. Change the details, then click **Save**.

   <Result>An **Application updated!** message appears. The secret is unchanged.</Result>

3. To remove an application, click the delete button (the bin icon) in its row.

   <Result>A **Delete Application** dialog asks *Are you sure you want to delete? Data for this option from users will be erased.* and names the application.</Result>

4. Click **Delete**.

   <Result>An **Application deleted!** message appears and the row disappears.</Result>

## What attendees see when they authorize an app

An application sends the attendee to your instance's `/oauth/authorize` page, where they must be logged in. If they already authorized the same application, scopes and return address, ConCat approves without showing the screen.

The screen is titled **Authorize:** and the application's name, and lists **Sign In Automatically** and one line per scope. A scope that starts with `admin:` is marked *This is an administrative permission.*, and the **Authorize Application** button turns red.

To try it, use an application from section 4 that has a callback URI:

1. Logged in to your instance, open this address, with your instance's address, the application's ID and one of its callback URIs filled in: `https://<your instance>/oauth/authorize?client_id=<ID>&response_type=code&scope=pii:basic&redirect_uri=<callback URI>`

   <Result>The **Authorize** screen shows your application's name and your username, with **Authorize Application** and **Cancel**.</Result>

2. Click **Cancel**.

   <Result>The screen says **Authorization Denied**. After a moment, your browser goes to the callback URI with `error=access_denied` added.</Result>

3. Open the same address again and click **Authorize Application**.

   <Result>The screen says **Authorized!**, then your browser goes to the callback URI with a `code` added.</Result>

4. Open an address with a `client_id` that doesn't exist.

   <Result>The screen says **Invalid Request**, with the reason in small print.</Result>

:::note[Why a request can be invalid]
**Invalid Request** appears when the address is missing a field, the application doesn't exist, the return address isn't one of its **Callback URIs**, or the attendee doesn't hold every permission the scopes need.
:::

## Logging out through an app

An application can log an attendee out by sending them to your instance's `/oauth/logout` page with its credentials. ConCat also uses this page when someone logs out on another convention's address.

If ConCat can verify the request, the attendee sees *Logging you out...* and goes on to the application's address. If not, the attendee is asked first:

1. Logged in to your instance, open `https://<your instance>/oauth/logout`.

   <Result>A **Log out attempt** card appears, with **Allow log out** and **Cancel** buttons.</Result>

2. Click **Allow log out**.

   <Result>A **You are now logged out.** message appears.</Result>

**Cancel** instead returns the attendee to the homepage, still logged in.
