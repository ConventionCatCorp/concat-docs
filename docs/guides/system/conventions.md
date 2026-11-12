---
sidebar_position: 2
hide_table_of_contents: true
textbook: true
---

# Conventions and next year

Run several conventions in one organization, each at its own address: see what each one owns, and start next year's event or a separate new one.

:::info[In this guide]
Organizations and conventions, Next Year or New Convention, creating next year's convention, creating a separate new convention.
:::

## Organizations and conventions

<Sidenote title="Who can do this">
The **Conventions** tab needs **system:settings:update**, which the default **admin** role has.
</Sidenote>

Your *organization* is your ConCat account. Each *convention* is one event, with its own address, dates, settings, badges and products. People's accounts belong to the organization, so attendees keep one account every year.

Some things can be set for the whole organization or for one convention:

- **Roles**: for one convention, or globally for all ([Roles and permissions](./roles.md)).
- **Policies**: organization-wide or convention-specific ([Terms and policies](./terms.md)).
- **Stripe Connect**: set up once, covering every convention ([Payment gateways](./payments.md)).
- **The email sending domain**: for the organization or one convention ([Sending domain, senders and contact addresses](../templates/email-settings.md)).

1. Go to **Housekeeping › System › Settings** and click the **Conventions** tab (Figure 1.1).

   <Result>A table lists your conventions and their **Domain**, with a green **+** button in the header row and a blue **View** button (an eye) on each row.</Result>

2. *(Optional)* Click **View** on another convention's row.

   <Result>That convention's **Conventions** tab opens at its own address.</Result>

<Figure
  src="/img/guides/system/conventions-table.webp"
  alt="The Conventions tab: a table with Long Name, Short Name, Dates and Domain columns, a green add button in the header row, and a View button on the convention's row."
  title="The Conventions tab"
  markers={[
    { n: 1, x: 79.8, y: 11, w: 5.4, h: 32.5 },
    { n: 2, x: 0.7, y: 44.7, w: 98.6, h: 49.4 },
  ]}
>

1. The green **+** button, which creates a convention (sections 3 and 4).
2. A convention's row, with its **Dates**, **Domain** and **View** button.

</Figure>

A domain may show a status pill: green **active** means the address is live; any other status is yellow, and hovering over it shows what's wrong.

## Next Year or New Convention

A new convention has one of two types:

- **Next Year** copies most settings from an earlier convention, for the next edition of the same event.
- **New Convention** starts fresh, with default settings, at a new address ending in `.concat.app`.

<TableFigure title="What Next Year copies from the previous convention">

| Copied | Not copied |
| --- | --- |
| Long and short names, legal name and type, notification prefix, marketing URL and logo | Badge and store products <small>The new convention starts with an empty *Registration* category.</small> |
| Venue, time zone, and **start and end dates** <small>Change the dates afterwards (section 3, step 6).</small> | Registrations and orders |
| Registration settings, including **Open Registration**, sub-account and age settings | The deprecated child registration and attendance limit <small>The dialog says if your convention uses them.</small> |
| The registration form, registration flags, volunteer departments, and volunteer and dealer options | |
| Email sending domain, maintenance mode, and event store settings | |
| A Stripe connection made for the previous convention only | Convention-specific policies <small>Organization-wide policies apply until you add new ones.</small> |
| Staff: everyone with the **staff** role in the previous convention gets **staffAlumni** in the new one | Roles given for the previous convention only <small>Global roles still apply.</small> |

</TableFigure>

## Create next year's convention

The **Domain Action** decides which convention keeps your current address:

- **Replace** (the first choice): the new, empty convention takes your current address, and the previous one moves to the new address. If the previous one was your main convention, the new one becomes main.
- **New** (the second choice): the new convention gets the new address; the previous one keeps its own.

**Domain** starts as the current convention's start year plus the first part of its address, such as `2026.myevent`; the rest of the address stays the same.

1. On the **Conventions** tab, click the green **+** button.

   <Result>The **Create a New Convention** dialog opens with **Next Year** selected under **Type of creation**.</Result>

2. In **Select a Previous Convention**, choose the convention to copy.

   <Result>The **Domain Action** options update to that convention's address.</Result>

3. Under **Domain Action**, choose the first option to replace the address, or the second to use a new one.

   <Result>The option is selected; its text names the addresses involved.</Result>

4. In **Domain**, keep or change the address prefix, using only letters, digits, dots and hyphens.

   <Result>The **Domain Action** texts show the full new address.</Result>

5. *(Optional)* Tick **Request to Clear "nukeme" PII of this convention.** to clear the personal information of attendees who chose the *nukeme* flag, one day from now. Then click **Create**.

   <Result>A **New convention created.** message appears and the convention is listed. With **Replace**, it adds *You have been pushed to the login screen, please refresh the page.*</Result>

6. Open the new convention (**View**, or your usual address after **Replace**). On the **Convention** tab of **Housekeeping › System › Settings**, update **Convention Start Date** and **Convention End Date** under **Venue & dates** and click **Save**.

   <Result>A **Venue & dates saved** message appears; the **Conventions** tab shows the new dates.</Result>

:::caution[Watch out]
- Each previous convention can have only one **Next Year** convention. A second try says *A convention was already created as a sequence of the previous convention.*
- The PII clear can be requested only after the convention you're working in has ended, and doesn't clear dealers or volunteers. To cancel it, see [Convention settings](./settings.md), section 5.
- An address in use gives *That domain is already in use.*
:::

## Create a separate new convention

Use **New Convention** for an event that shouldn't inherit anything, such as a second, unrelated event.

1. On the **Conventions** tab, click the green **+** button, then choose **New Convention** under **Type of creation**.

   <Result>The dialog shows a single **Domain** field followed by `.concat.app`.</Result>

2. Enter the address prefix (at least 3 characters: letters, digits, dots and hyphens), then click **Create**.

   <Result>A **New convention created.** message appears. The table lists a new convention named **testconvention**, short name **test**, at your address.</Result>

3. Click **View** on the new row, then set up the convention as in [Convention setup](../quickstart/convention-setup.md).

   <Result>The new convention's **Conventions** tab opens at its own address.</Result>

:::note[Limits]
An organization can hold a limited number of conventions. Past the limit, creating one says *Convention is at or over capacity and cannot create more resources. Contact support to change this limit.*
:::
