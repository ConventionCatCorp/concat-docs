---
sidebar_position: 4
hide_table_of_contents: true
textbook: true
---

# Mass email

Send one message to a group of attendees, volunteers or dealers. Four modules have a **Mass Email** page; they share one form and differ only in how you choose recipients.

:::info[In this guide]
How it works, sending, and recipients by module: Attendees, Registration, Volunteers and Dealers.
:::

## How mass email works

<Sidenote title="Senders">
**From Address** lists the senders under **Email Senders for Mass Email** in **Housekeeping › System › Settings › Email Settings**: see [Convention setup](../quickstart/convention-setup.md), section 5.
</Sidenote>

You write the email, ConCat works out the recipients, and you review the final list before sending.

- **The body is Markdown.** ConCat wraps it in the **Mass Email** template, with a greeting and your footer: see [Email Template Overrides](../templates/templates.md).
- **The subject starts with your Notification Prefix,** as in every email your event sends.
- **Some people are skipped.** Anyone with an unconfirmed email address or a registration ban doesn't get it. A sub-account without its own address gets it at the parent's.
:::warning[Sent on confirmation]
**There's no scheduling, test send or sent-mail history.** The email goes as soon as you confirm.
:::
<TableFigure title="The four Mass Email pages">

| Menu path | Permission | Chooses recipients by |
| --- | --- | --- |
| **Housekeeping › Attendees › Mass Email** | `massemail` | **Email Target**: picked people, a role, a gatekeeping silo, or a ready-made group (section 3) |
| **Housekeeping › Registration › Mass Email** | `massemail`, plus `registration:update` to load recipients | Badge product and payment status (section 4) |
| **Housekeeping › Volunteers › Mass Email** | `massemail` <small>Department leads have it through their lead role.</small> | Department and assignment (section 5) |
| **Housekeeping › Dealers › Mass Email** | `vendor:massemail` | Area, table type and application status (section 6) |

</TableFigure>

The default *admin* and *hr* roles have `massemail`; *admin* and *dealersden* have `vendor:massemail`.

## Send a mass email

These steps use a hand-picked list, which is also how to send yourself a test first.

1. Go to **Housekeeping › Attendees › Mass Email**.

   <Result>The **Mass Email** page opens with a **Preview — 0 Estimated Recipients** card and the form.</Result>

2. In **From Address**, choose a sender.

   <Result>The sender, a full address at your email sending domain, is selected.</Result>

3. In **Email Target**, choose **Custom (Individual Users)**. In **Individual User(s)**, type part of a name and select the person; repeat for each recipient.

   <Result>The preview's title counts them, such as **Preview — 2 Estimated Recipients**, and **View List** becomes available.</Result>

4. Type a **Subject**, and write the **Body** in Markdown.

   <Result>The preview shows the email as recipients will see it, with your own name in the greeting.</Result>

5. Click **Prepare Email**.

   <Result>A **Review Email** card replaces the form: *The email will be sent to … individual(s).* If anyone was skipped, it adds *… users were disqualified for not having their emails verified, or for being banned.*</Result>

6. Click **View List** on the preview.

   <Result>An **Email Recipients** dialog lists everyone and says *This list is definitive and not an estimate.* Click **Close**.</Result>

7. Click **Send Email**.

   <Result>An **Email Sent** card says *Your email has been queued to be sent to … individual(s).*, with a **Reset Form** button.</Result>

8. Click **Reset Form**.

   <Result>The form is empty again.</Result>

:::caution[Watch out]
**Send Email** can't be undone. Check the subject, body and recipient count on the **Review Email** card first; to change something, click **Cancel** there.
:::

## Recipients in the Attendees module

Targets that need a permission are listed only if you have it. The ready-made groups appear under the headings `newsletter`, `paidAttendees` and `volunteers`.

<TableFigure title="Email targets">

| Target | Sends to | Needs |
| --- | --- | --- |
| **Custom (Individual Users)** | People you pick in **Individual User(s)**. | — |
| **Attendees** | Registered attendees, chosen as on the Registration page (section 4). | `registration:update` and `product:manage` |
| **Gatekeeping** | Ticket holders in one gatekeeping silo, by **Ticket status**. | `raffle:manage` |
| **Roles** | Everyone with one **Role**, for this convention or globally. | `system:permission:read` |
| **Newsletter Subscribers** | Every account in your organization that ticked the newsletter box. | — |
| **Unpaid Newsletter Subscribers** | Subscribers with an unpaid registration for this convention. | — |
| **All Unpaid Users** | Accounts in your organization with a confirmed email and no registration, or an unpaid one at any of your conventions. | — |
| **Fursuiters (all)** | People whose registration for this convention has the flag with the short name `fursuits`. | — |
| **Requesting ASL Interpreters** | People whose registration for this convention has the flag with the short name `asl`. | — |
| **with a Badge Printed** | People whose badge for this convention has been printed. | — |
| **Leads Only** | This convention's department leads. | — |

</TableFigure>

### Email a gatekeeping silo

1. In **Email Target**, choose **Gatekeeping**.

   <Result>A **Gatekeeping** list (**Select one**) appears, with **Ticket status** checkboxes **Redeemed**, **Rescinded**, **Waiting** and **Winner**; **Waiting** is ticked.</Result>

2. Choose the silo and tick the ticket statuses to include.

   <Result>The preview counts the people holding tickets in those statuses.</Result>

Silos are explained in [Gatekeeping](../registration/raffle.md).

### Email everyone with a role

1. In **Email Target**, choose **Roles**, then choose a **Role**.

   <Result>The preview counts the people with that role for this convention or globally.</Result>

## Recipients in the Registration module

1. Go to **Housekeeping › Registration › Mass Email**.

   <Result>The form has **Products**, a checkbox per badge product, and **Registration Status**: **Paid** (ticked), **Unpaid** and **Only With Children**. The preview counts 0 until a product is ticked.</Result>

2. Tick one or more badge products.

   <Result>The preview counts people with a paid registration for those products.</Result>

3. Tick **Unpaid** as well.

   <Result>The count grows to include unpaid registrations for those products.</Result>

**Only With Children** keeps only people who registered children with the older child-registration feature (**Max Child Registration**), not sub-accounts.

## Recipients in the Volunteers module

<Sidenote title="Department leads">
A lead without `volunteer:admin` sees only their own departments. Leads named in Volunteer Settings get `massemail` through the *lead* role.
</Sidenote>

1. Go to **Housekeeping › Volunteers › Mass Email**.

   <Result>The form has **Department(s)**, a checkbox per department, and **Filters**: **Only Staff**, **Assigned** (ticked) and **Unassigned**. With `volunteer:admin` you also see **All Departments**.</Result>

2. Tick the departments to email.

   <Result>The preview counts the volunteers assigned to them, and the departments' own addresses are added to **From Address**.</Result>

<TableFigure title="Volunteer filters">

| Filter | Adds or keeps |
| --- | --- |
| **Assigned** | Adds volunteers assigned to a ticked department. |
| **Unassigned** | Adds volunteers with no department, whichever are ticked. |
| **Only Staff** | Keeps only volunteers who are staff members. |

</TableFigure>

## Recipients in the Dealers module

1. Go to **Housekeeping › Dealers › Mass Email**.

   <Result>The form has **Areas**, a checkbox per dealer area, and **Status**: **Pending**, **Approved**, **Waitlisted**, **Rejected**, **Cancelled**, **Paid** and **Unpaid**. **Approved**, **Paid** and **Unpaid** are ticked, so the preview already counts every approved dealer.</Result>

2. Tick a dealer area.

   <Result>The count drops to that area's matching dealers, and a **Table type** heading appears with **Filter by table type** and **Filter by addons**.</Result>

3. Tick **Filter by table type**, then tick a table type.

   <Result>The count drops to dealers who applied for the ticked types; each type shows its number of applications.</Result>

With no area ticked, every area is included. The first five statuses keep applications in those states; **Paid** and **Unpaid** narrow the list only when just one is ticked. Areas and table types are set up as in [Dealers](../dealers/managment.md).
