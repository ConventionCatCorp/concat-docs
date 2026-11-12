---
sidebar_position: 1
hide_table_of_contents: true
textbook: true
---

# Convention settings

Set your event's name, logo, venue, dates, store and account options, maintenance mode and sidebar links, and see ConCat's platform fees.

:::info[In this guide]
The System Settings tabs; logo and event info; venue, dates, store and user options; maintenance mode; cancelling a pending PII clear; custom menu links; platform fees.
:::

## The System Settings page

<Sidenote title="Who can do this">
The page needs **system:settings:update**, which the default **admin** role has. Some tabs need more (Table 1.1).
</Sidenote>

The **Convention** tab applies to the convention you're signed in to; some other tabs apply to your whole organization. For the module menu, see [Start here](../quickstart/start-here.md), section 2.

1. Go to **Housekeeping › System › Settings**.

   <Result>**System Settings** opens on the **Convention** tab. The address ends in `/housekeeping/system/settings`.</Result>

<TableFigure title="The System Settings tabs">

| Tab | What it holds | Covered in |
| --- | --- | --- |
| **Convention** | Logo, event info, venue, dates, store, user options, maintenance mode. | Sections 2 to 5 |
| **Terms** | The policies attendees agree to. | [Terms and policies](./terms.md) |
| **Links** | Extra links in the attendee sidebar. | Section 6 |
| **Contact** | Mailbox names that registration, HR and dealer email comes from. | [Sending domain, senders and contact addresses](../templates/email-settings.md) |
| **Platform Info** | ConCat's fees, read-only. | Section 7 |
| **Conventions** | Your organization's conventions, and next year's. | [Conventions and next year](./conventions.md) |
| **Payment Gateways** | Stripe Connect and PagSeguro. | [Payment gateways](./payments.md) |
| **Hotels** | Hotel reservations. <small>Only if ConCat has turned hotels on and you have **hotel:manage**.</small> | Not covered here |
| **Email Settings** | Sending domain, mass-email senders, email templates. <small>Needs **email:templates**.</small> | [Sending domain, senders and contact addresses](../templates/email-settings.md) and [Email Template Overrides](../templates/templates.md) |
| **Note Categories** | Note categories for attendee profiles. <small>Needs **user:note:categories:manage**.</small> | [User Notes](../usernotes/usernotes.md) |

</TableFigure>

## Logo and event info

Each section of the **Convention** tab has its own **Save** button, which saves only that section.

1. On the **Convention** tab, under **Logo**, choose a PNG (64 pixels wide is recommended) and click **Save Logo**.

   <Result>**Upload success** appears, and the logo shows on your homepage and login page.</Result>

2. Under **Event info**, fill in the fields in Table 2.1 and click its **Save**.

   <Result>An **Event info saved** message appears.</Result>

<TableFigure title="Event info fields">

| Field | What it holds |
| --- | --- |
| **Convention Long Type** | Your event's full name, at least 6 characters. <small>It heads the attendee sidebar.</small> |
| **Convention Short Name** | At most 6 characters. |
| **Notification Prefix** | The prefix on notifications from this convention. |
| **Convention Legal Name** | The legal name of the organization running the event. |
| **Convention Legal Type** | Its legal entity type, such as *501(c)7 Not-For-Profit, Ltd., LLP, PLC*. <small>Add a registered charity number if you have one.</small> |
| **Marketing URL** | Your event's website, shown at the bottom of emails. |

</TableFigure>

## Venue, dates, store and user options

1. Under **Venue & dates**, set **Venue Name** (usually the hotel), **Convention Timezone**, **Convention Start Date** and **Convention End Date**, and click its **Save**.

   <Result>A **Venue & dates saved** message appears.</Result>

2. Under **Event store**, set the options in Table 3.1 and click its **Save**.

   <Result>An **Event store settings saved** message appears.</Result>

3. Under **Users**, set the options in Table 3.1 and click its **Save**.

   <Result>A **Users settings saved** message appears.</Result>

<TableFigure title="Event store and Users options">

| Option | What it does |
| --- | --- |
| **Enable Event Store** | Shows **Event store** in the attendee sidebar. <small>Products stay in Housekeeping while it's off. See [Store setup](../quickstart/store-setup.md).</small> |
| **Event Store: Hide 'All Products' Tab** | Hides the store's *All Products* tab. <small>Only while the store is enabled.</small> |
| **Require e-mail confirmation before login.** | Attendees must confirm their email to sign in; unconfirmed users get no further email. |
| **Show 'Returning Attendee' badge on the user profile.** | Marks people who attended the year before. |
| **Enable Attendees to Edit Order Options** | Attendees can change option values on orders that aren't registrations. |

</TableFigure>

The registration form editor is under **Housekeeping › Registration › Settings** (**Go to Registration Settings**).

## Maintenance mode

<Sidenote title="Who still gets in">
People with **system:maintenance**. The default **admin** and **user** roles both grant it, so staff with the **user** role keep access.
</Sidenote>

Maintenance mode closes your instance while you fix something: everyone without **system:maintenance**, staff included, is locked out.

:::caution[Watch out]
If no one in your organization has **system:maintenance**, turning maintenance mode on locks everyone out, and only ConCat engineers can restore access.
:::

1. Under **Danger zone**, tick **Enable maintenance mode** and click the red **Save**.

   <Result>A **Danger zone settings saved** message appears.</Result>

2. Open your login page in a private browser window.

   <Result>A **Maintenance Mode** card replaces the sign-in form; its **Admin Login** button shows the form.</Result>

3. To reopen, untick **Enable maintenance mode** and click **Save**.

   <Result>A **Danger zone settings saved** message appears, and the login page shows the sign-in form again.</Result>

4. *(Optional)* To change rate limiting, tick or untick **Enable rate limit**, in the same section, and click **Save**.

   <Result>A **Danger zone settings saved** message appears, and **Enable rate limit** keeps its new value after you reload the page.</Result>

**Enable rate limit** prevents abuse by limiting how quickly people can use ConCat. People with the `ratelimit:bypass` permission aren't limited.

## Cancel a pending PII clear

<Sidenote title="Who can do this">
Needs **staff:admin:update**, **pii:admin:read**, **pii:admin:delete** and **system:settings:update**. The default **admin** role has all four.
</Sidenote>

Attendees who don't want their details kept can choose the *nukeme* registration flag. After the convention ends, staff can ask ConCat to clear those accounts' personal information (PII), in [Registration flags](../registration/flags.md) or when creating next year's convention ([Conventions and next year](./conventions.md)). The clear runs one day after the request.

While a clear is pending, a red banner on the **Convention** tab shows its date.

1. In the red banner, click **Cancel Request**.

   <Result>A **Cancel Request** dialog warns *This cannot be undone, and a new request will need to be made in order to clear PII.*</Result>

2. Click **Confirm Cancellation**.

   <Result>A **Request was successfully canceled.** message appears, and the banner is gone.</Result>

## Custom menu links

Menu links add your own entries, such as a schedule or survey, to signed-in attendees' sidebar.

<TableFigure title="Menu link fields">

| Field | What it does |
| --- | --- |
| **Name** | The text shown in the sidebar. |
| **URL** | Where the link goes. <small>`{{user.id}}` and `{{user.username}}` are replaced with the attendee's ID and username.</small> |
| **Icon** | A Material icon name, such as `event`. <small>**Icon References** opens the list.</small> |
| **Order** | Sorts links of the same type, lowest first. |
| **Type** | Where the link appears: **Application** (under *Applications*), your convention's name (under it, after *Attendance*), or **Event Store** (under *Event store*). |
| **Open in a new tab** | Opens the link in a new browser tab. |
| **Only show to users with a paid registration** | Hides the link until the attendee has paid for a registration. |

</TableFigure>

1. Click the **Links** tab.

   <Result>The **Menu Link** card lists your links, with a green **+** button at its top right.</Result>

2. Click the green **+**, fill in the fields in Table 6.1 and click **Add**.

   <Result>An **Item created** message appears, and the link is listed in the table.</Result>

3. In a private browser window, sign in as an attendee and check the sidebar.

   <Result>The link appears with its icon, under the heading set by **Type**.</Result>

4. *(Optional)* To change a link, click its blue **Edit** button (a pencil), edit the **Edit Entry** dialog and click **Save**.

   <Result>An **Item edited** message appears with the new values in the table.</Result>

5. *(Optional)* To remove a link, click its red **Delete** button (a bin), then **Delete** in the **Delete entry** dialog.

   <Result>An **Item deleted** message appears; the link is gone from the table and sidebar.</Result>

## Platform fees

**Platform Info** shows ConCat's fees, read-only. Your event pays them unless you pass them to attendees per product in Store Management.

1. Click the **Platform Info** tab.

   <Result>**Per Registration Platform Fee** and **Other Product Platform Fee** each show a fee.</Result>
