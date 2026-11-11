---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Conventions and next year

Your ConCat organization can run several conventions, each at its own web address. This guide explains what belongs to the organization and what belongs to each convention, and how to start next year's event or a separate new one.

:::info[In this guide]
Organizations and conventions (section 1), Next Year or New Convention (section 2), creating next year's convention (section 3), and creating a separate new convention (section 4).
:::

## Organizations and conventions

<Sidenote title="Who can do this">
The **Conventions** tab needs the **system:settings:update** permission. The default **admin** role has it.
</Sidenote>

Your *organization* is your ConCat account. Each *convention* is one event, such as this year's convention, with its own address, dates, settings, badges and products. People's accounts belong to the organization, so an attendee uses the same account every year.

Some things can be set for the whole organization or for one convention:

- **Roles** are given for one convention or globally, for every convention (see [Roles and permissions](./roles.md)).
- **Policies** can be organization-wide or convention-specific (see [Terms and policies](./terms.md)).
- **Stripe Connect** is set up once and covers every convention (see [Payment gateways](./payments.md)).
- **The email sending domain** can be set for the organization or for one convention ([Sending domain, senders and contact addresses](../templates/email-settings.md)).

1. Go to **Housekeeping › System › Settings** and click the **Conventions** tab.

   <Result>A table lists your organization's conventions, with the columns **Long Name**, **Short Name**, **Dates** and **Domain**, and a green **+** button in the header row. Each row ends with a blue **View** button (an eye).</Result>

2. *(Optional)* Click **View** on another convention's row.

   <Result>That convention's **Conventions** tab opens at its own address.</Result>

A domain can show a status pill beside it. Green **active** means the address is live; any other status shows in yellow, and hovering over it shows what is wrong.

## Next Year or New Convention

When you create a convention, you choose one of two types:

- **Next Year** copies most settings from an earlier convention. Use it for the next edition of the same event.
- **New Convention** starts fresh, with default settings, at a new address ending in `.concat.app`.

<TableFigure title="What Next Year copies from the previous convention">

| Copied | Not copied |
| --- | --- |
| Long and short names, legal name and type, notification prefix, marketing URL and logo | Badge products and store products <small>The new convention starts with an empty *Registration* category.</small> |
| Venue, time zone, and **start and end dates** <small>Change the dates after creating it (section 3, step 6).</small> | Registrations and orders |
| Registration settings, including **Open Registration**, sub-account and age settings | The deprecated child registration and attendance limit <small>A notice in the dialog says if your convention uses them.</small> |
| The registration form, registration flags, volunteer departments, and volunteer and dealer options | |
| Email sending domain, maintenance mode, and event store settings | |
| A Stripe connection made for the previous convention only | Convention-specific policies <small>The organization-wide policies apply until you add new ones.</small> |
| Staff: everyone with the **staff** role in the previous convention gets the **staffAlumni** role in the new one | Roles given for the previous convention only <small>Global roles still apply.</small> |

</TableFigure>

## Create next year's convention

<Sidenote title="Domain Action">
*Replace* keeps your familiar address for the new event and moves last year's event to the new address. *New* leaves last year's event where it is.
</Sidenote>

The **Domain Action** decides which convention keeps your current address:

- **Replace** (the first choice): your current address goes to the new, empty convention, and the previous convention moves to the new address. If the previous convention was your organization's main one, the new convention becomes the main one.
- **New** (the second choice): the new convention is created at the new address, and the previous one keeps its address.

The **Domain** field starts with the current convention's start year followed by the first part of its address, such as `2026.myevent`. The rest of the address, after the first dot, stays the same as the previous convention's.

1. On the **Conventions** tab, click the green **+** button.

   <Result>A dialog titled **Create a New Convention** opens. Under **Type of creation**, **Next Year** is selected, and the dialog shows **Select a Previous Convention**, **Domain Action**, **Domain** and the **Request to Clear "nukeme" PII of this convention.** box.</Result>

2. In **Select a Previous Convention**, choose the convention to copy.

   <Result>The list shows each convention's long name with its address in brackets. The **Domain Action** texts update to the chosen convention's address.</Result>

3. Under **Domain Action**, choose the first option to replace the address, or the second to use a new one.

   <Result>The first option reads *Have … have an empty convention, and move the existing convention to …*, and the second *Create the new empty convention at …*, with the addresses filled in. The option you clicked is selected.</Result>

4. In **Domain**, keep or change the address prefix. Use letters, digits, dots and hyphens only.

   <Result>The texts under **Domain Action** show the full new address.</Result>

5. *(Optional)* Tick **Request to Clear "nukeme" PII of this convention.** to clear the personal information of attendees who chose the *nukeme* flag, one day from now. Then click **Create**.

   <Result>A **New convention created.** message appears. With **Replace**, it adds *You have been pushed to the login screen, please refresh the page.* The new convention is listed in the table.</Result>

6. Open the new convention (with **View**, or at your usual address if you chose **Replace**). Go to **Housekeeping › System › Settings** and, on the **Convention** tab, update **Convention Start Date** and **Convention End Date** under **Venue & dates**. Then click **Save**.

   <Result>A **Venue & dates saved** message appears. The **Conventions** tab shows the new dates on the new convention's row.</Result>

:::caution[Watch out]
- You can create only one **Next Year** convention from each previous convention. A second try says *A convention was already created as a sequence of the previous convention.*
- The PII clear can only be requested after the convention you're working in has ended. It doesn't clear dealers or volunteers. To cancel it, see [Convention settings](./settings.md), section 5.
- If the address is in use, the dialog says *That domain is already in use.*
:::

## Create a separate new convention

Use **New Convention** for an event that shouldn't inherit anything, such as a second, unrelated event run by your organization.

1. On the **Conventions** tab, click the green **+** button, then choose **New Convention** under **Type of creation**.

   <Result>The dialog shows a single **Domain** field followed by `.concat.app`.</Result>

2. Enter the address prefix (at least 3 characters: letters, digits, dots and hyphens), then click **Create**.

   <Result>A **New convention created.** message appears. The table lists a new convention named **testconvention**, short name **test**, at the address you chose.</Result>

3. Click **View** on the new row, then set up the convention as in [Convention setup](../quickstart/convention-setup.md).

   <Result>The new convention's **Conventions** tab opens at its own address.</Result>

:::note[Limits]
An organization can hold a limited number of conventions. When it's reached, creating one says *Convention is at or over capacity and cannot create more resources. Contact support to change this limit.*
:::
