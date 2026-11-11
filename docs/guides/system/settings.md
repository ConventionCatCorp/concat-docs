---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Convention settings

This guide covers the **System Settings** page: your event's name, logo, venue and dates, store and account options, maintenance mode, the custom links in the attendee sidebar, and the platform fees ConCat charges.

:::info[In this guide]
The tabs of the System Settings page (section 1), the logo and event info (section 2), venue, dates, store and user options (section 3), maintenance mode (section 4), cancelling a pending PII clear (section 5), custom menu links (section 6) and platform fees (section 7).
:::

## The System Settings page

<Sidenote title="Who can do this">
The page needs the **system:settings:update** permission. The default **admin** role has it. The **Email Settings**, **Note Categories** and **Hotels** tabs need further permissions.
</Sidenote>

Most of what makes your event *your* event lives on one page with ten tabs. Settings on the **Convention** tab apply to the convention you're signed in to. Some other tabs hold settings for your whole organization. [Start here](../quickstart/start-here.md), section 2, explains the module menu.

1. Go to **Housekeeping › System › Settings**.

   <Result>A page headed **System Settings** opens on the **Convention** tab. The address ends in `/housekeeping/system/settings`.</Result>

<TableFigure title="The System Settings tabs">

| Tab | What it holds | Covered in |
| --- | --- | --- |
| **Convention** | Logo, event info, venue and dates, event store, user options, maintenance mode. | Sections 2 to 5 |
| **Terms** | The policies attendees agree to. | [Terms and policies](./terms.md) |
| **Links** | Extra links in the attendee sidebar. | Section 6 |
| **Contact** | The mailbox names that registration, HR and dealer email is sent from. | [Sending domain, senders and contact addresses](../templates/email-settings.md) |
| **Platform Info** | The fees ConCat charges, read-only. | Section 7 |
| **Conventions** | Every convention in your organization, and next year's event. | [Conventions and next year](./conventions.md) |
| **Payment Gateways** | Stripe Connect and PagSeguro. | [Payment gateways](./payments.md) |
| **Hotels** | Hotel reservations. <small>Shown only when ConCat has turned hotels on for your event and you have **hotel:manage**.</small> | Not covered here |
| **Email Settings** | Sending domain, mass-email senders and email templates. <small>Needs **email:templates**.</small> | [Sending domain, senders and contact addresses](../templates/email-settings.md) and [Email Template Overrides](../templates/templates.md) |
| **Note Categories** | Categories for notes on attendee profiles. <small>Needs **user:note:categories:manage**.</small> | [User Notes](../usernotes/usernotes.md) |

</TableFigure>

## Logo and event info

Each section of the **Convention** tab has its own **Save** button, which saves only that section.

1. On the **Convention** tab, under **Logo**, choose a PNG image, then click **Save Logo**. A width of 64 pixels is recommended.

   <Result>The upload controls are replaced by **Upload success**. The logo appears on your homepage and on the login page.</Result>

2. Under **Event info**, fill in the fields in Table 2.1, then click **Save** below them.

   <Result>An **Event info saved** message appears.</Result>

<TableFigure title="Event info fields">

| Field | What it holds |
| --- | --- |
| **Convention Long Type** | Your event's full name, at least 6 characters. <small>Despite its label, this is the name. It heads the attendee sidebar.</small> |
| **Convention Short Name** | A short name of at most 6 characters. |
| **Notification Prefix** | The prefix seen in notifications from this convention. |
| **Convention Legal Name** | The legal name of the organization running the event. |
| **Convention Legal Type** | Its legal entity type, such as *501(c)7 Not-For-Profit, Ltd., LLP, PLC*. <small>Include a registered charity number if you have one.</small> |
| **Marketing URL** | Your event's website, shown at the bottom of emails. |

</TableFigure>

## Venue, dates, store and user options

1. Under **Venue & dates**, fill in **Venue Name** (usually the name of the hotel), **Convention Timezone**, **Convention Start Date** and **Convention End Date**, then click **Save** below them.

   <Result>A **Venue & dates saved** message appears.</Result>

2. Under **Event store**, tick or untick the options in Table 3.1, then click **Save** below them.

   <Result>An **Event store settings saved** message appears.</Result>

3. Under **Users**, tick or untick the options in Table 3.1, then click **Save** below them.

   <Result>A **Users settings saved** message appears.</Result>

<TableFigure title="Event store and Users options">

| Option | What it does |
| --- | --- |
| **Enable Event Store** | Shows **Event store** in the attendee sidebar. <small>Products still exist in Housekeeping while it's off. See [Store setup](../quickstart/store-setup.md).</small> |
| **Event Store: Hide 'All Products' Tab** | Hides the *All Products* tab of the store. <small>Available only while the store is enabled.</small> |
| **Require e-mail confirmation before login.** | Attendees must confirm their email address before they can sign in. Unconfirmed users get no further email. |
| **Show 'Returning Attendee' badge on the user profile.** | Marks people who attended your convention the year before. |
| **Enable Attendees to Edit Order Options** | Lets attendees change the option values of their orders that aren't registrations. |

</TableFigure>

Below these sections, a box titled **Looking for the Registration Form Editor?** has a **Go to Registration Settings** button. The registration form now lives under **Housekeeping › Registration › Settings**.

## Maintenance mode

<Sidenote title="Who still gets in">
People with the **system:maintenance** permission. The default **admin** and **user** roles both grant it, so staff with the **user** role keep access.
</Sidenote>

Maintenance mode closes your instance while you fix something. Attendees can't sign in, register, change their details or use the store. Everyone without the **system:maintenance** permission is locked out, including staff.

:::caution[Watch out]
If no one in your organization has **system:maintenance**, turning maintenance mode on locks everyone out, and only ConCat engineers can restore access.
:::

1. Under **Danger zone**, tick **Enable maintenance mode**, then click the red **Save** below it.

   <Result>A **Danger zone settings saved** message appears.</Result>

2. Open your instance's login page in a private browser window.

   <Result>Instead of the sign-in form, a card headed **Maintenance Mode** says *We are currently performing maintenance on the registration system.* and *Please check back later.* An **Admin Login** button shows the sign-in form.</Result>

3. To reopen, untick **Enable maintenance mode** and click **Save** again.

   <Result>A **Danger zone settings saved** message appears, and the login page shows the sign-in form again.</Result>

:::note[Enable rate limit]
The **Enable rate limit** box in the same section isn't saved when you click **Save**, so changing it has no effect. Contact ConCat Support if you need rate limits changed.
:::

## Cancel a pending PII clear

<Sidenote title="Who can do this">
Cancelling needs **staff:admin:update**, **pii:admin:read**, **pii:admin:delete** and **system:settings:update**. The default **admin** role has all four.
</Sidenote>

Attendees who don't want their personal details kept after the event can choose the *nukeme* registration flag. After the convention has ended, staff can ask ConCat to clear the personal information (PII) of those accounts. The clear runs one day after the request. Staff request it under **Housekeeping › Registration › Registration Flags** (see [Registration flags](../registration/flags.md)), or when creating next year's convention (see [Conventions and next year](./conventions.md)).

While a clear is pending, a red banner at the top of the **Convention** tab says *There is an active request to clear PII of accounts who selected "nukeme". PII will be cleared on* followed by the date.

1. In the red banner, click **Cancel Request**.

   <Result>A dialog titled **Cancel Request** says *This cannot be undone, and a new request will need to be made in order to clear PII.*</Result>

2. Click **Confirm Cancellation**.

   <Result>A **Request was successfully canceled.** message appears, and the red banner is gone.</Result>

## Custom menu links

Menu links add your own entries to the sidebar attendees see, such as a link to your schedule or a survey. A link appears only to signed-in attendees.

<TableFigure title="Menu link fields">

| Field | What it does |
| --- | --- |
| **Name** | The text shown in the sidebar. |
| **URL** | Where the link goes. <small>`{{user.id}}` and `{{user.username}}` in the URL are replaced with the attendee's ID and username.</small> |
| **Icon** | The name of a Material icon, such as `event`. <small>**Icon References** opens the list of icons.</small> |
| **Order** | Links of the same type are sorted by this number, lowest first. |
| **Type** | Where the link appears: **Application** (under *Applications*), your convention's name (under it, after *Attendance*), or **Event Store** (under *Event store*). |
| **Open in a new tab** | Opens the link in a new browser tab. |
| **Only show to users with a paid registration** | Hides the link until the attendee has paid for a registration. |

</TableFigure>

1. Click the **Links** tab.

   <Result>A card headed **Menu Link** lists your links, with a green **+** button at its top right.</Result>

2. Click the green **+** button, fill in the fields in Table 6.1, then click **Add**.

   <Result>An **Item created** message appears, and the link is listed in the table.</Result>

3. Sign in as an attendee in a private browser window and look at the sidebar.

   <Result>The link appears under the heading you chose with **Type**, with its icon.</Result>

4. *(Optional)* To change a link, click its blue **Edit** button (a pencil), change the fields in the **Edit Entry** dialog, then click **Save**.

   <Result>An **Item edited** message appears, and the table shows the new values.</Result>

5. *(Optional)* To remove a link, click its red **Delete** button (a bin), then click **Delete** in the **Delete entry** dialog.

   <Result>An **Item deleted** message appears, and the link is gone from the table and the sidebar.</Result>

## Platform fees

The **Platform Info** tab shows the fees ConCat charges your event. You can't change them here. By default your event pays them; you can pass them to attendees per product in Store Management.

1. Click the **Platform Info** tab.

   <Result>A card says *These fees are charged by ConCat for use of the platform by your event.* Below it, **Per Registration Platform Fee** and **Other Product Platform Fee** each show a fee.</Result>
