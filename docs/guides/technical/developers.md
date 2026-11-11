---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# OAuth applications and webhooks

Webhooks let ConCat tell another system when something happens, such as an order completing. OAuth applications let another system use the ConCat API, on its own or on behalf of an attendee who agrees. This guide sets both up and shows what attendees see when an app asks for access.

:::info[In this guide]
What the **Developers** page holds (section 1), creating a webhook (section 2), testing, verifying and deleting webhooks (section 3), creating an OAuth application (section 4), editing or deleting one (section 5), the screen attendees see when they authorize an app (section 6), and logging out through an app (section 7).
:::

## The Developers page

<Sidenote title="Who can do this">
The **Webhooks** tab needs the permission to view and edit webhooks (`webhook:manage`). The **OAuth Applications** tab needs the permission to manage OAuth applications (`oauth:manage`). Either one shows **Developers** in the System menu.
</Sidenote>

**Housekeeping › System › Developers** has two tabs:

- **Webhooks**: addresses on your own server that ConCat sends a `POST` request to when a chosen event happens.
- **OAuth Applications**: clients of the ConCat API. Each one gets an ID and a secret. For how a developer uses them, see the API guide [Obtaining a Bearer Token](/docs/api/gettingstarted/oauth) and the list of [Scopes](/docs/api/gettingstarted/scopes).

Webhooks and applications belong to your organization, so every convention in it sees the same lists.

:::note[With only one of the permissions]
The page opens on the **Webhooks** tab. If you can manage OAuth applications but not webhooks, that tab shows that access is denied. Click **OAuth Applications**.
:::

## Create a webhook

A webhook listens for one or more events. Table 2.1 lists them by the names the form shows.

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

   <Result>The **Developers** page opens on the **Webhooks** tab, with a **View Verification Key** button at the top and a **Create New** button below the list. If there are no webhooks yet, the list reads *No webhooks created*.</Result>

2. Click **Create New**.

   <Result>A **Create Webhook** dialog opens, with the fields **Name**, **URL** and **Events**, and an **Only fire for this convention** checkbox.</Result>

3. Enter a **Name** and the **URL** that should receive the requests. Select one or more **Events**: hold Ctrl (⌘ on a Mac) to select more than one. Tick **Only fire for this convention** if the webhook should ignore your other conventions. Then click **Create**.

   <Result>A **Webhook created!** message appears, and the list shows a new row with the **Name**, **URL** and **Events** you entered.</Result>

:::caution[Watch out]
- The **URL** must start with `https://`. Any other address is refused.
- A webhook can't be edited after you create it. To change one, delete it and create it again.
:::

When an event happens, ConCat sends the request in the background. If your server doesn't accept it, ConCat tries up to 5 times, waiting longer between each attempt. There is no delivery log in Housekeeping.

## Test, verify and delete webhooks

<Sidenote title="Fires">
The **Fires** column shows a green tick when the webhook fires for the convention you're in, and a red cross when it doesn't. Hold the pointer over it for the reason.
</Sidenote>

The webhook list has the columns **#**, **Name**, **URL**, **Events**, **Fires** and **Actions**.

1. In the webhook's row, click **Test**.

   <Result>ConCat sends a `test` event, with the data `{"test":123}`, to the webhook's URL. If your server accepts it, a **Success, see console for data** message appears. If it refuses it or can't be reached, an error message appears instead. For an address that can't be reached, it's a general one: *Our server ran into an issue!* with a reference code.</Result>

2. Click **View Verification Key**.

   <Result>A panel opens with a warning, *Use this public key to verify the authenticity of requests coming from ConCat.*, which says the key can be retrieved from `/.well-known/jwks.json`. Below it, a text box shows the key.</Result>

3. To remove a webhook, click **Delete** in its row.

   <Result>A **Webhook deleted** message appears, and the row disappears from the list.</Result>

:::caution[Watch out]
**Delete** doesn't ask for confirmation. The webhook is removed as soon as you click it.
:::

:::info[Key idea]
Every request carries an `authorization: Bearer …` header holding a token signed by ConCat. Your server should check that token against the verification key before it trusts the request. The token expires after 120 seconds, its audience is your webhook's host name, and its `int` claim is the base64 SHA-256 hash of the whole request body. Fetch the key from `/.well-known/jwks.json` and keep it until verification fails.
:::

## Create an OAuth application

Each application has two kinds of permission:

- **Application Permissions** are used when the application calls the API on its own, outside the context of a user (OAuth `client_credentials`). You tick these when you create it.
- **User scopes** are asked for when an attendee signs in through the application. The attendee agrees to them on the consent screen (section 6).

1. Go to **Housekeeping › System › Developers** and click the **OAuth Applications** tab.

   <Result>The address ends in `/housekeeping/system/developers/oauth`. The tab lists your applications, or reads *No applications created*, with a **Create New** button below.</Result>

2. Click **Create New**.

   <Result>A **Create OAuth Application** dialog opens, with the fields **Name**, **Description**, **Callback URIs** and **Application Permissions**. Each permission is a checkbox with its name and a short description.</Result>

3. Enter a **Name** and a **Description**. Under **Callback URIs**, type each address the application returns users to and click **+** after each one. Tick the **Application Permissions** the application needs, then click **Save**.

   <Result>An **Application created!** message appears, and a **New secret** dialog says *This is the secret for this application. Save it, as it will not be displayed again:*, followed by **ID:** and **Secret:**.</Result>

4. Copy the **ID** and **Secret** somewhere safe, then click **Close**.

   <Result>The list shows the new application, with its ID in the **#** column, its **Name**, and **Edit** and delete buttons under **Actions**.</Result>

:::caution[Watch out]
ConCat stores only a hash of the secret, so it can't show it to you again. If you lose it, delete the application and create a new one, which gets a new ID.
:::

:::note[Callback URIs]
ConCat only checks the *origin* of the return address (its scheme, host and port), not its path. Addresses must start with `http://` or `https://`.
:::

## Edit or delete an OAuth application

1. In the application's row, click **Edit**.

   <Result>An **Edit OAuth Application** dialog opens with the application's current details.</Result>

2. Change the details, then click **Save**.

   <Result>An **Application updated!** message appears. The secret is unchanged.</Result>

3. To remove an application, click the delete button (the bin icon) in its row.

   <Result>A **Delete Application** dialog asks *Are you sure you want to delete? Data for this option from users will be erased.*, followed by the application's name.</Result>

4. Click **Delete**.

   <Result>An **Application deleted!** message appears, and the row disappears from the list.</Result>

## What attendees see when they authorize an app

When an application asks an attendee to sign in with ConCat, it sends them to your instance's `/oauth/authorize` page. The attendee must be logged in. If the attendee already authorized the same application, for the same scopes and return address, ConCat approves the request without showing the screen again.

The screen is titled **Authorize:** and the application's name, with its description below. It says the application *wants to access your account,* the attendee's username, *and needs your permission to:*, then lists **Sign In Automatically** and one line per scope. A scope that starts with `admin:` is marked *This is an administrative permission.*, and the **Authorize Application** button turns red.

To see it yourself, use an application from section 4 that has a callback URI:

1. Logged in to your instance, open this address, with your instance's address, the application's ID and one of its callback URIs filled in: `https://<your instance>/oauth/authorize?client_id=<ID>&response_type=code&scope=pii:basic&redirect_uri=<callback URI>`

   <Result>The **Authorize** screen shows your application's name and description, *wants to access your account,* your username, and the buttons **Authorize Application** and **Cancel**.</Result>

2. Click **Cancel**.

   <Result>The screen says **Authorization Denied** and *You have refused access to:* the application's name. After a moment, your browser goes to the callback URI with `error=access_denied` added.</Result>

3. Open the same address again and click **Authorize Application**.

   <Result>The screen says **Authorized!** and *Just a moment while we redirect you back to:* the application's name. Your browser then goes to the callback URI with a `code` added.</Result>

4. Open an address with a `client_id` that doesn't exist.

   <Result>The screen says **Invalid Request** and *This authorization request is malformed or the application has been disabled.*, with the reason in small print below.</Result>

:::note[Why a request can be invalid]
An attendee sees **Invalid Request** when the address is missing a field, the application doesn't exist, the return address isn't one of its **Callback URIs**, or the attendee doesn't hold every permission the scopes need.
:::

## Logging out through an app

An application can log an attendee out of ConCat by sending them to your instance's `/oauth/logout` page with its credentials. ConCat also uses this page itself when someone logs out on the address of a convention other than your current one.

If ConCat can verify the request, the attendee sees *Logging you out...* and is sent on to the address the application named. If it can't, the attendee is asked first:

1. Logged in to your instance, open `https://<your instance>/oauth/logout`.

   <Result>A **Log out attempt** card says *A website is trying to log you out, but we could not verify their OAuth credentials.* and *If you trust this website, you can click 'Allow log out'. Otherwise, click 'Cancel' to return to the homepage.*, with the buttons **Allow log out** and **Cancel**.</Result>

2. Click **Allow log out**.

   <Result>A **You are now logged out.** message appears.</Result>

Clicking **Cancel** instead returns the attendee to the homepage, still logged in.
